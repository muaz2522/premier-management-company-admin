import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Link from "../components/home/Link"
import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import HomeSidebar from '../components/navbar/HomeSidebar';

function DashboardLayout() {
    const[isOpen,setIsOpen]=useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check
    
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <>
            <Header />
            <main className='grid md:grid-cols-[8rem_1fr] sm:grid-cols-1 custom-min:p-8 md:p-16 md:gap-4'>
                 <>
                    <div className="hidden custom-min:flex cursor-pointer pb-4 custom-min:justify-end md:hidden"
                        onClick={() => setIsOpen(!isOpen)}>
                        <GiHamburgerMenu />
                    </div>
                    {isOpen ? <HomeSidebar isOpen={isOpen} setIsOpen={setIsOpen} /> : ""}
                </>
                <Link />
                <Outlet />
            </main>
        </>
    )
}

export default DashboardLayout
