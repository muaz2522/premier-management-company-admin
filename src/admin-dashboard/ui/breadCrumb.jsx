import {NavLink} from "react-router-dom"

export default function BreadCrumb({ link, text }) {

    return (
        <ul>
            <li><NavLink to={link} className="mr-8 font-medium text-black hover:text-black">{text}</NavLink></li>
        </ul>
    );
}
