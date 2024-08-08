import src from '../../../assets/images/main-app-img.png'
import profile from '../../../assets/images/dashboard/profile-img-icon.png'
import { NavLink, useLocation } from 'react-router-dom'

function Header() {
    const location=useLocation();
    const isDashboard=location.pathname==="/dashboard"?"Community Dashboard":"Profile Management";
    return (
        <nav className="flex items-center p-4 justify-between text-lg h-20 border-b border-slate-300">
            <NavLink to="/">
                <img className="w-40" src={src} alt="Premier" />
            </NavLink>
            <h3 className='hidden custom-min:hidden sm:block text-2xl font-semibold text-base-color'>{isDashboard}</h3>
            <img className="w-8" src={profile} alt="profile" />
        </nav>
    )
}

export default Header
