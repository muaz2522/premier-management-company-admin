import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

function AppLayout() {
    return (
        <section>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </section>
    )
}

export default AppLayout
