import { useState } from "react";
import Home from "./Home"
import NavPost from "./NavPost"
import { GiHamburgerMenu } from "react-icons/gi";
import HomeSidebar from "../navbar/HomeSidebar";

function DashboardCommunity() {
    return (
        <section>
            <div className="grid sm:grid-cols-1 md:grid-cols-[1fr_10rem] gap-8">
                <Home />
                <NavPost />
            </div>
        </section>
    )
}

export default DashboardCommunity
