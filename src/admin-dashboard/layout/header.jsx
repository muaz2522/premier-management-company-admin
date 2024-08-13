import { FaUser } from "react-icons/fa"
import { MdLogout } from "react-icons/md"
import {NavLink, useNavigate} from 'react-router-dom'
import src from '../../assets/images/home/main-home-img.png'
import { SignOutUser } from "../../api/userAuthentication"
import { useAuth } from "../../contextApi"

function Header() {
    const navigate=useNavigate();
    const {currentUser}=useAuth();

    console.log(currentUser)
    function logOut(){
        SignOutUser(navigate);
    }
    return (
        <header className="flex items-center justify-end gap-8 py-3 px-4 text-lg">
            <img src={src} className="w-10 h-10 rounded-full" />
            <span className="text-base-color">{currentUser.firstName} {currentUser.lastName}</span>
            <NavLink link="/admin/profile" className="hover:text-base-color">
            <FaUser size="1.2em" color="base-color" />
            </NavLink>
            <MdLogout size="1.2em" color="base-color" className="cursor-pointer" onClick={logOut}/>
        </header>
    )
}

export default Header
