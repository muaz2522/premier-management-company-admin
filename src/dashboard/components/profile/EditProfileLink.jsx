import { NavLink } from "react-router-dom"

function EditProfileLink() {
    return (
        <div className="p-4 flex flex-col gap-4">
            <NavLink to="/dashboard/edit-profile" className="p-2 hover:text-base-color w-full text-center rounded-3xl bg-dashboard-color text-base-color font-medium">Save</NavLink>
            <NavLink className="p-2 w-full text-center rounded-3xl hover:text-base-color bg-base-color text-white">Change Password</NavLink>
        </div>
    )
}

export default EditProfileLink
