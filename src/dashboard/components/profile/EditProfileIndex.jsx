import EditProfile from "./EditProfile"
import EditProfileLink from "./EditProfileLink"

function EditProfileIndex() {
    return (
        <section>
            <div className="grid grid-cols-[1fr_15rem] gap-8">
                <EditProfile />
                <EditProfileLink />
            </div>
        </section>
    )
}

export default EditProfileIndex
