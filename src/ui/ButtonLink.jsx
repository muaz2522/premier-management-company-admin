import { NavLink } from "react-router-dom"

function ButtonLink({ text, link, className, color = "base-color", classLink }) {
    return (
        <button className={`text-white text-base rounded-3xl ${className} bg-${color}`} ><NavLink to={link} className={`${classLink} `}>{text}</NavLink></button>
    )
}

export default ButtonLink
