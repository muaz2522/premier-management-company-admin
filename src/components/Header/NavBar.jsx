import src from '../../assets/images/main-app-img.png';
import Menu from "../login/Menu";
import NavButton from "./NavButton";
import { IoMenu } from "react-icons/io5";

function NavBar({ isOpen, setIsOpen }) {
  return (
    <nav className="flex items-center p-4 justify-between text-lg h-20 border-b border-slate-300">
      <div className="flex items-center gap-8">
        <img className="w-40" src={src} alt="Premier" />
        <div className='hidden custom-min:hidden sm:block'>
          <Menu />
        </div>
      </div>
      <div className='hidden custom-min:hidden sm:block'>
        <NavButton />
      </div>
      <div className='hidden custom-min:block sm:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
        <IoMenu />
      </div>
    </nav>
  )
}

export default NavBar
