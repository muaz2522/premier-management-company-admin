import { NavLink } from "react-router-dom";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { ADMIN_ROUTES } from '../../constants';
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { BsFilePost } from "react-icons/bs";
import src from '../../assets/images/main-app-img.png';

// Sidebar data
const data = [
    // {
    //     name: "Home",
    //     link: ADMIN_ROUTES.HOME,
    //     icon: <IoHomeOutline size='1.2em' />,
    // },
    {
        name: "Users",
        link: ADMIN_ROUTES.USERS,
        icon: <FiUsers size='1.2em' />,
    },
    {
        name: "Posts",
        link: ADMIN_ROUTES.POSTS,
        icon: <BsFilePost size='1.2em' />,
    },
    // {
    //     name: "Add Admin",
    //     link: ADMIN_ROUTES.CREATE_ADMIN,
    //     icon: <FiUserPlus size='1.2em' />,
    // },
    // {
    //     name: "Settings",
    //     link: ADMIN_ROUTES.SETTINGS,
    //     icon: <IoSettingsOutline size='1.2em' />,
    // },
];

export default function SideBar() {
    return (
        <div className="flex flex-col items-center m-0 bg-white border-r h-lvh">
            <NavLink to="/" className="py-4 px-6">
                <img src={src} alt="logo" className="w-2/3" />
            </NavLink>
            <ul className="w-full p-4">
                {data.map((item, i) => (
                    <ListItem key={i} item={item} />
                ))}
            </ul>
        </div>
    );
}

function ListItem({ item }) {
    return (
        <NavLink
            to={item.link}
            end={item.link === ADMIN_ROUTES.USERS} // Ensure exact matching for home
            className={({ isActive }) =>
                `flex items-center gap-4 text-lg font-medium text-black hover:text-black py-2 pl-3 px-20 mb-1 rounded ${
                    isActive ? 'bg-ground-color' : 'hover:bg-ground-color'
                }`
            }
        >
            <li className="flex items-center gap-4 w-full">
                <span className="text-black">{item.icon}</span>
                <span className="font-semibold text-black">{item.name}</span>
            </li>
        </NavLink>
    );
}
