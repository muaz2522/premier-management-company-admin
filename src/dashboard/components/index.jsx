import { useState } from "react";
import DashboardCommunity from "./home";

function MainDashboard() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <DashboardCommunity isOpen={isOpen} setIsOpen={setIsOpen}/>
    )
}

export default MainDashboard
