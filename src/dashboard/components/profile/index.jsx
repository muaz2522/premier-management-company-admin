import ProfileLink from "./ProfileLink"
import Profile from './Profile'
// import HomeSidebar from "../navbar/HomeSidebar"

function ProfileAccount() {
    return (
        <section>
            <div className="grid custom-min:grid-cols-1 md:grid-cols-[1fr_15rem] gap-8">
                {/* <HomeSidebar/> */}
                <Profile />
                <ProfileLink />
            </div>
        </section>
    )
}

export default ProfileAccount
