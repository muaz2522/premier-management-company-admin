import src from '../../../assets/images/main-app-img.png'
import profile from '../../../assets/images/dashboard/profile-img-icon.png'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <nav className="flex items-center p-4 justify-between text-lg h-20 border-b border-slate-300">
            <NavLink to="/">
                <img className="w-40" src={src} alt="Premier" />
            </NavLink>
            <h3 className='hidden custom-min:hidden sm:block text-2xl font-medium text-base-color'>Community Dashboard</h3>
            <img className="w-8" src={profile} alt="profile" />
        </nav>
    )
}

export default Header
