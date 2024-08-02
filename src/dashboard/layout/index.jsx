import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Link from "../components/home/Link"

function DashboardLayout() {
    return (
        <>
            <Header />
            <main className='grid md:grid-cols-[10rem_1fr] sm:grid-cols-1 custom-min:p-8 md:p-16 gap-8'>
                <Link />
                <Outlet />
            </main>
        </>
    )
}

export default DashboardLayout
