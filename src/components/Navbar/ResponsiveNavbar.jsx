import Menu from '../login/Menu';
import NavButton from '../Navbar/NavButton';
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";

export default function ResponsiveNavbar({ isOpen, setIsOpen }) {
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Offcanvas className="custom-min:w-[40%] custom-md:w-[50%]" zIndex={500} direction={"end"} isOpen={isOpen} onClick={toggle}>
                <OffcanvasHeader toggle={toggle}>
                    {/* Offcanvas */}
                </OffcanvasHeader>
                <OffcanvasBody>
                        <Menu />
                        <NavButton />
                </OffcanvasBody>
            </Offcanvas>
        </div>
    );
}
