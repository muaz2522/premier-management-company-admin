import { NavLink } from "react-router-dom"
import NavPost from "./NavPost"
import { FaPersonWalkingArrowRight } from "react-icons/fa6";

function Link({ className, isOpen }) {
    return (
        <div className="hidden custom-min:hidden md:block" style={{ display: className }}>
            <div className="flex flex-col gap-2">
                {isOpen ? <div className="flex items-center gap-2">
                    <FaPersonWalkingArrowRight />
                    <NavLink to="/dashboard" className={({ isActive }) => `text-black hover:text-black ${isActive ? "text-slate-300" : ""}`}>Community</NavLink>
                </div> : <NavLink to="/dashboard" className={({ isActive }) => `text-black hover:text-black ${isActive ? "text-slate-300" : ""}`}>Community</NavLink>}
                {isOpen ? <NavPost className="block" /> : ""}
                {isOpen ? <div className="flex gap-2 items-center">
                    <FaPersonWalkingArrowRight />
                    <NavLink to="/dashboard/profile" className={({ isActive }) => `text-black hover:text-black ${isActive ? "text-slate-300" : ""}`}>My Account</NavLink>
                </div> : <NavLink to="/dashboard/profile" className={({ isActive }) => `text-black hover:text-black ${isActive ? "text-slate-300" : ""}`}>My Account</NavLink>}
            </div>
        </div>
    )
}

export default Link
