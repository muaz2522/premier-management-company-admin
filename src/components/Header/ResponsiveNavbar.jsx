import Menu from '../login/Menu';
import NavButton from './NavButton';
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";

export default function ResponsiveNavbar({ isOpen, setIsOpen }) {
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Offcanvas className="!w-[200px]" zIndex={500} direction={"end"} isOpen={isOpen} scrollable
                ={true} backdrop={false} onClick={toggle}>
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
