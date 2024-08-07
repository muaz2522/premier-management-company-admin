import { NavLink } from "react-router-dom"

function ProfileLink() {
    return (
        <div className="p-4 md:flex md:flex-col gap-4 hidden custom-min:hidden">
            <NavLink to="/dashboard/edit-profile" className="p-2 text-lg hover:text-base-color w-full text-center rounded-3xl bg-dashboard-color text-base-color font-semibold">Edit Profile</NavLink>
            <NavLink className="p-2 w-full text-center rounded-3xl font-semibold text-lg hover:text-base-color bg-base-color text-white">Change Password</NavLink>
        </div>
    )
}

export default ProfileLink
