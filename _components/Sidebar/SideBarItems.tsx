import NavLink from "../NavLink";
import {
    HiOutlineCalendarDays,
    HiOutlineCog6Tooth,
    HiOutlineHome,
    HiOutlineHomeModern,
    HiOutlineUsers,
} from "react-icons/hi2";

type NavItem = {
    title: string,
    href: string,
    icon: React.ReactNode,
    submenu?: { title: string, href: string; }[];
};

const navItems: NavItem[] = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: < HiOutlineHome />
    },
    {
        title: 'Bookings',
        href: '/bookings',
        icon: < HiOutlineCalendarDays />
    },
    {
        title: 'Cabins',
        href: '/cabins',
        icon: < HiOutlineHomeModern />
    },
    {
        title: 'Users',
        href: '/users',
        icon: < HiOutlineUsers />
    },
    {
        title: 'Settings',
        href: '/settings',
        icon: < HiOutlineCog6Tooth />
    }
];


const SideBarItem = () => {
    return <>
        {navItems.map((item) => (
            <li key={item.title} className="flex flex-col">
                <NavLink className="sidebar-link flex items-center gap-3 font-normal text-xl px-4 py-2" href={item.href}>
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                </NavLink>
            </li>
        ))}
    </>;
};
export default SideBarItem;