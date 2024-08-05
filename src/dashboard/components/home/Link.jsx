import { NavLink } from "react-router-dom"
import NavPost from "./NavPost"
import { BsArrow90DegRight } from "react-icons/bs";

function Link({ className, isOpen }) {
    
    return (
        <div className="hidden custom-min:hidden md:block" style={{ display: className }}>
            <div className="flex flex-col gap-2">

                {isOpen ? <div className="flex items-center gap-2">
                    <BsArrow90DegRight size={"16px"} />
                    <NavLink to="/dashboard" className={({ isActive }) => `text-black hover:text-black ${isActive ? "!text-slate-300" : ""}`}>Community</NavLink>
                </div> : <NavLink to="/dashboard" className={({ isActive }) => `text-black hover:text-black ${isActive ? "!text-slate-300" : ""}`}>Community</NavLink>}

                {isOpen ? <NavPost className="block" /> : ""}

                {isOpen ? <div className="flex gap-3 flex-col">
                    <div className="flex items-center gap-2">
                    <BsArrow90DegRight size={"16px"} />
                    <NavLink to="/dashboard/profile" className={({ isActive }) => `text-black hover:text-black ${isActive ? "!text-slate-300" : ""}`}>My Account</NavLink>
                    </div>
                    <div className="ml-10 flex flex-col gap-3">
                    <NavLink to="/dashboard/edit-profile" className="w-max text-center">Edit Profile</NavLink>
                    <NavLink className="w-max text-center">Change Password</NavLink>
                    </div>
                </div> : <NavLink to="/dashboard/profile" className={({ isActive }) => `text-black hover:text-black ${isActive ? "!text-slate-300" : ""}`}>My Account</NavLink>}
            </div>
        </div>
    )
}

export default Link
