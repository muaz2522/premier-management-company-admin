import { NavLink } from "react-router-dom"

function EditProfileLink() {
    return (
        <div className="p-4 flex flex-col custom-min:items-end md:items-start gap-4">
            <NavLink to="/dashboard/edit-profile" className="p-2 font-semibold text-lg hover:text-base-color w-44 text-center rounded-3xl bg-dashboard-color text-base-color">Save</NavLink>
            <NavLink to="#" className="p-2 w-44 text-center rounded-3xl text-lg hover:text-base-color font-semibold bg-base-color text-white">Change Password</NavLink>
        </div>
    )
}

export default EditProfileLink
