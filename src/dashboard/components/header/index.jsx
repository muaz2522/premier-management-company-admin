import src from '../../../assets/images/main-app-img.png'
import profile from '../../../assets/images/dashboard/profile-img-icon.png'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react';
import { SignOutUser } from '../../../api/userAuthentication';
import { useAuth } from '../../../contextApi';

function Header() {
    const[isLogOut,setIsLogOut]=useState(false);
    const navigate=useNavigate();
    const location=useLocation();
    const auth=useAuth();
    const isDashboard=location.pathname==="/dashboard"?"Community Dashboard":"Profile Management";

    function handleSignOut(){
    console.log("Muaz-> ",auth.currentUser);
        SignOutUser(navigate);
    }

    return (
        <nav className="flex items-center relative p-4 justify-between text-lg h-20 border-b border-slate-300">
            <NavLink to="/">
                <img className="w-40" src={src} alt="Premier" />
            </NavLink>
            <span className='hidden custom-min:hidden sm:block text-2xl font-semibold text-base-color'>{isDashboard}</span>
            <div className='flex flex-col'>
            <img className="w-8 cursor-pointer" src={profile} alt="profile" onClick={()=>setIsLogOut(!isLogOut)} />
            {isLogOut?<button onClick={handleSignOut} className='absolute -bottom-6 border-1 text-lg font-semibold border-base-color rounded-3xl px-4 py-1 right-6'>Logout</button>:""}
            </div>
        </nav>
    )
}

export default Header
