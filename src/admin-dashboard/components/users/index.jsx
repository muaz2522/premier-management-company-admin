import UserList from "./userList";

function User({user}) {
    
    return (
        <section className="p-4">
                    <div>
                        <span className="text-3xl font-bold">All Users</span>
                    </div>
                    <div className="text-lg py-8">
                        <header className="grid grid-cols-[1.5fr_1.5fr_2.5fr_1.2fr_1.2fr_1fr] p-4 border">
                            <div className="font-semibold">image</div>
                            <div className="font-semibold">name</div>
                            <div className="font-semibold">email</div>
                            <div className="font-semibold">job Title</div>
                            <div className="font-semibold">experience</div>
                            <div></div>
                        </header>
                        {/* <section> */}
                            {user.map((item, i) => (
                                <UserList user={item} key={i} />
                            ))}
                        {/* </section> */}
                    </div>
        </section>
    )
}

export default User
