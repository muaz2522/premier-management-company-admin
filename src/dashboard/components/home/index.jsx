import { useState } from "react";
import Home from "./Home"
import NavPost from "./NavPost"
import { GiHamburgerMenu } from "react-icons/gi";
import HomeSidebar from "../navbar/HomeSidebar";

function DashboardCommunity() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section>
            <div className="grid sm:grid-cols-1 md:grid-cols-[1fr_10rem] gap-8 ">
                <>
                    <div className="hidden custom-min:flex cursor-pointer custom-min:justify-end md:hidden"
                        onClick={() => setIsOpen(!isOpen)}>
                        <GiHamburgerMenu />
                    </div>
                    {isOpen ? <HomeSidebar isOpen={isOpen} setIsOpen={setIsOpen} /> : ""}
                </>
                <Home />
                <NavPost />
            </div>
        </section>
    )
}

export default DashboardCommunity
