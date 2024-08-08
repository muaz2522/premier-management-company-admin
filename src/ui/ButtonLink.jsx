import { NavLink } from "react-router-dom"

function ButtonLink({ text, link, className, color = "base-color", classLink }) {
    return (
        <button className={`text-white rounded-3xl ${className} bg-${color}`} ><NavLink to={link} className={`font-semibold !text-white ${classLink} `}>{text}</NavLink></button>
    )
}

export default ButtonLink
