import { NavLink } from "react-router-dom"
import ButtonLink from "../../ui/ButtonLink"

function NavButton() {
    return (
        <div className="flex sm:flex-row custom-min:flex-col custom-min:gap-4 md:gap-8 custom-min:mt-8 sm:mt-0 ">
            <button className="sm:border sm:rounded-3xl custom-min:items-center sm:items-start flex h-[35px] custom-min:flex-col custom-min:gap-4 sm:gap-0 sm:flex-row border-slate-300">
                <NavLink className={`hover:text-stone-700 text-text-color sm:py-2 sm:px-4 custom-min:border text-lg custom-min:py-2 custom-min:px-8 custom-min:rounded-3xl sm:rounded-none w-28 sm:border-0 sm:border-r `} to="/login">Login</NavLink>
                <NavLink className={`hover:text-stone-700 text-text-color sm:py-2 sm:px-4 custom-min:w-auto text-lg custom-min:border custom-min:py-2 custom-min:px-8 custom-min:rounded-3xl sm:rounded-none sm:border-0  `} to="/signUp">Sign Up</NavLink>
            </button>
            <ButtonLink link="/contact" text="Get in touch" className="px-3" classLink=" hover:text-footer-color text-base h-[35px] text-white" />
        </div>
    )
}

export default NavButton

// signup
//

// login
// 