import { NavLink } from "react-router-dom"

function ButtonLink({ text, link, className }) {
    return (
        <button className={`text-white text-base rounded-3xl ${className}`} style={{ backgroundColor: "var(--color-base)" }}><NavLink to={link} className={({ isActive }) => `hover:text-slate-300 ${isActive ? "underline-offset-4 underline" : ""}`}>{text}</NavLink></button>
    )
}

export default ButtonLink
