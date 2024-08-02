import ProfileLink from "./ProfileLink"
import Profile from './Profile'

function ProfileAccount() {
    return (
        <section>
            <div className="grid grid-cols-[1fr_15rem] gap-8">
                <Profile />
                <ProfileLink />
            </div>
        </section>
    )
}

export default ProfileAccount
