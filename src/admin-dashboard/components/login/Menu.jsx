import { NavLink } from "react-router-dom"

function Menu() {
    return (
        <menu className="flex sm:gap-4 md:gap-12 custom-min:flex-col sm:flex-row custom-min:gap-4  custom-min:items-center">
          <NavLink
            className={({ isActive }) =>
              `hover:text-nav-color text-lg font-semibold ${isActive ? "!underline-offset-1 !underline" : ""}`
            }
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `hover:text-nav-color text-lg font-semibold ${isActive ? "!underline-offset-1 !underline" : ""}`
            }
            to="/services"
          >
            Our Services
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:text-nav-color text-lg font-semibold ${isActive ? "!underline-offset-1 !underline" : ""}`
            }
            to="/about"
          >
            About Us
          </NavLink>
        </menu>
    )
}

export default Menu
