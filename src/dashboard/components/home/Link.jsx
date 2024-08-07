import { NavLink } from "react-router-dom"
import NavPost from "./NavPost"
import { BsArrow90DegRight } from "react-icons/bs";

function Link({ className, isOpen }) {

    return (
        <div className="hidden custom-min:hidden md:block" style={{ display: className }}>
            <div className="flex flex-col gap-2">

                {isOpen ? <div className="flex items-center gap-2">
                    <BsArrow90DegRight size={"16px"} />
                    <NavLink
                        to="/dashboard"
                        end
                        className={({ isActive }) => {
                            "text-xl"
                            `text-xl ${isActive ? "!text-slate-300" : "!text-black"}`
                        }}
                    >
                        Community
                    </NavLink>
                </div> : <NavLink
                    to="/dashboard"
                    style={{fontSize:"14px"}}
                    end
                    className={({ isActive }) => {
                        
                        return isActive ? "!text-slate-300" : "!text-black";
                    }}
                >
                    Community
                </NavLink>}

                {isOpen ? <NavPost className="block" /> : ""}

                {isOpen ? <div className="flex gap-3 flex-col">

                    <div className="flex items-center gap-1 mb-1">
                        <BsArrow90DegRight size={"16px"} />
                        <NavLink to="/dashboard/profile" className={`text-black hover:text-black`}>My Account</NavLink>
                    </div>
                    <div className="ml-10 flex flex-col gap-2">
                        <NavLink to="/dashboard/edit-profile" className="w-max text-center">Edit Profile</NavLink>
                        <NavLink className="w-max text-center">Change Password</NavLink>
                    </div>

                </div> : <NavLink
                    to="/dashboard/profile"
                    style={{fontSize:"14px"}}
                    className={({ isActive }) => {

                        return isActive ? "!text-slate-300" : "!text-black";
                    }}
                >
                    My Account
                </NavLink>}
            </div>
        </div>
    )
}

export default Link




