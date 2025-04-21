import Image from "next/image";
import Logo from "@/public/logo-light.png";


import SideBarItem from "./SideBarItems";

const Sidebar = () => {
    return <aside className="h-full row-span-full py-6 px-10 bg-white flex flex-col gap-6 border-gray-50 border-r-2">
        <div className="flex items-center justify-center">
            <Image src={Logo} alt="Slack Logo Here" height="200" width="200" />
        </div>
        <div>
            <ul className="flex flex-col gap-3">
                <SideBarItem />
            </ul>
        </div>
    </aside>;
};

export default Sidebar;