import Link from "../home/Link";
import NavPost from "../home/NavPost"
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";

function HomeSidebar({ isOpen, setIsOpen }) {
    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <div>
            <Offcanvas className={`!w-[200px]`} zIndex={500} direction={"end"} scrollable
                ={true} isOpen={isOpen} backdrop={false} onClick={toggle}>
                <OffcanvasHeader toggle={toggle}>
                    {/* Offcanvas */}
                </OffcanvasHeader>
                <OffcanvasBody>
                    <Link className="block" isOpen={isOpen} />
                </OffcanvasBody>
            </Offcanvas>
        </div>
    )
}

export default HomeSidebar
