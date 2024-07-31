import { Link } from "react-router-dom"
import ButtonLink from "../../ui/ButtonLink"

function NavButton() {
    return (
        <div className="flex sm:flex-row custom-min:flex-col custom-min:gap-4 md:gap-8 custom-min:mt-8 sm:mt-0 ">
            <button className="sm:border sm:rounded-3xl custom-min:items-center sm:items-start flex custom-min:flex-col custom-min:gap-4 sm:gap-0 sm:flex-row border-slate-300">
                <Link className="hover:text-stone-700 sm:py-2 sm:px-4 custom-min:border custom-min:py-2 custom-min:px-8 custom-min:rounded-3xl sm:rounded-none sm:w-24 sm:border-0 sm:border-r border-slate-300" to="/login">Login</Link>
                <Link className="hover:text-stone-700 sm:py-2 sm:px-4 custom-min:w-auto custom-min:border custom-min:py-2 custom-min:px-8 custom-min:rounded-3xl sm:rounded-none sm:border-0" to="/signup">Sign Up</Link>
            </button>
            <ButtonLink link="/contact" text="Get in touch" className="py-2 px-4" />
        </div>
    )
}

export default NavButton
