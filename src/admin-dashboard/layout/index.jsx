import { Outlet } from "react-router-dom"
import SideBar from "./sideBar"
import Header from "./header"

function AdminLayout() { 
    return (
        <div className="grid grid-cols-[17rem_1fr]">
            <SideBar />
            <section>
                <Header />
                <div className="bg-ground-color h-[calc(100vh-5rem)] overflow-y-auto">
                <Outlet />
                </div>
            </section>
        </div>
    )
}

export default AdminLayout
