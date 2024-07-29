import { Link } from "react-router-dom"
import src from '../assets/images/main-app-img.png';
import Button from "./ButtonLink";
function NavBar() {
  return (
    <nav className="flex items-center p-4 justify-between text-lg h-20 border-b border-slate-300">
      <div className="flex gap-12 items-center">
       <img className="w-40" src={src} alt="Premier"/>
        <Link className="hover:text-stone-700" to="/">Home</Link>
        <Link className="hover:text-stone-700" to="/services">Services</Link>
        <Link className="hover:text-stone-700" to="about">About Us</Link>
      </div>
      <div className="flex gap-12">
        <button className="border-1 border-slate-300 rounded-3xl">
          <Link className="p-2 hover:text-stone-700 border-r border-slate-300" to="/login">Login</Link>
          <Link className="p-2 hover:text-stone-700" to="/signup">Sign Up</Link>
        </button>
        <Button to="/getintouch" text="Get in touch"/>
      </div>
    </nav>
  )
}

export default NavBar
