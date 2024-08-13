import { NavLink } from "react-router-dom";
import ButtonLink from "../../ui/ButtonLink";
import { useAuth } from "../../contextApi";

function NavButton() {
    const auth = useAuth();

    return (
        <div className="flex sm:flex-row custom-min:flex-col custom-min:gap-4 md:gap-8 custom-min:mt-8 sm:mt-0">
            {auth.currentUser ? (
                auth.currentUser.role === "admin" ? (
                    <ButtonLink
                        link="/admin"
                        text="Dashboard"
                        className="px-3"
                        classLink="hover:text-footer-color text-base text-white"
                    />
                ) : (
                    <ButtonLink
                        link="/dashboard"
                        text="Dashboard"
                        className="px-3"
                        classLink="hover:text-footer-color text-base text-white"
                    />
                )
            ) : (
                <button className="sm:border sm:rounded-3xl custom-min:items-center flex h-[35px] custom-min:flex-col custom-min:gap-4 sm:gap-0 sm:flex-row border-slate-300">
                    <NavLink
                        className="hover:text-stone-700 text-text-color sm:py-2 sm:px-4 custom-min:border text-lg custom-min:py-2 custom-min:px-8 custom-min:rounded-3xl sm:rounded-none sm:border-0 sm:border-r"
                        to="/signUp"
                    >
                        Sign Up
                    </NavLink>
                    <NavLink
                        className="hover:text-stone-700 text-text-color sm:py-2 sm:px-4 custom-min:w-auto text-lg custom-min:border custom-min:py-2 custom-min:px-8 custom-min:rounded-3xl sm:rounded-none sm:border-0"
                        to="/login"
                    >
                        Login
                    </NavLink>
                </button>
            )}
            <ButtonLink
                link="/contact"
                text="Get in touch"
                className="py-2 px-3"
                classLink="hover:text-footer-color text-base text-white"
            />
        </div>
    );
}

export default NavButton;
