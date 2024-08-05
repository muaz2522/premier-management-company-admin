import { useEffect, useState } from "react";
import Navbar from "../components/Header/NavBar";
import ResponsiveNavbar from "../components/Header/ResponsiveNavbar";


function Header() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check
    
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {/* <ResponsiveNavbar isOpen={isOpen} setIsOpen={setIsOpen} /> */}
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            {isOpen ? <ResponsiveNavbar isOpen={isOpen} setIsOpen={setIsOpen} /> : ""}

        </>
    );
}

export default Header;
