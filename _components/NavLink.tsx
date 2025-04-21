"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

type NavLinkProps = {
    href: string;
    className: string;
    children: React.ReactNode;
};

const NavLink: React.FC<NavLinkProps> = ({ href, className, children }) => {

    const pathName = usePathname();
    const isActive = pathName === href;

    return (
        <Link href={href} className={`${className} ${isActive ? "active" : ""}`}>{children}</Link>
    );
};

export default NavLink;