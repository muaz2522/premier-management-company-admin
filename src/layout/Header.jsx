import { useState } from "react";
import Navbar from "../components/Navbar/NavBar";
import ResponsiveNavbar from "../components/Responsive/ResponsiveNavbar";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {isOpen ? (
                <ResponsiveNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
            ) : (
                <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            )}
        </>
    );
}

export default Header;
