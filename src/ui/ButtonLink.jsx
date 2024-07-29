import { Link } from "react-router-dom"

function ButtonLink({text,link,className}) {
    return (
        <button className={`text-white text-base rounded-3xl ${className}`} style={{backgroundColor:"var(--color-base)"}}><Link to={link}>{text}</Link></button>
    )
}

export default ButtonLink
