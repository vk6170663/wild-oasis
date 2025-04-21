'use client';

import Image from "next/image";
import userAvatar from "@/public/logo-light.png";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
    return <div className="h-18 p-4 sticky inset-0">
        <div className="flex items-center justify-end gap-6">
            <div className="flex items-center gap-2">
                <Image src={userAvatar} alt="User Avatar" className="rounded-full w-18" />
                <span className="text-lg font-gray-100 font-medium">He</span>
            </div>
            <div>
                <HeaderMenu />
            </div>
        </div>
    </div >;
};

export default Header;