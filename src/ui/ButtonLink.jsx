import { NavLink } from "react-router-dom"

function ButtonLink({ text, link, className, color = "base-color", classLink }) {
    return (
        <button className={`text-white text-base rounded-3xl ${className} bg-${color}`} ><NavLink to={link} className={({ isActive }) => `hover:text-slate-300 ${classLink} ${isActive ? "underline-offset-4 underline" : ""}`}>{text}</NavLink></button>
    )
}

export default ButtonLink
