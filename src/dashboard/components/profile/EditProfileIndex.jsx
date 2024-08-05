import EditProfile from "./EditProfile"
import EditProfileLink from "./EditProfileLink"

function EditProfileIndex() {
    return (
        <section>
            <div className="grid custom-min:grid-cols-1 md:grid-cols-[1fr_15rem] gap-8">
                <EditProfile />
                <EditProfileLink />
            </div>
        </section>
    )
}

export default EditProfileIndex
