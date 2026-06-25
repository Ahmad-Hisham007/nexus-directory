"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children, className = '' }) => {
    const pathname = usePathname();
    const isActive = href === pathname;
    const combinedClasses = `${className} ${isActive ? 'active' : ''}`.trim();
    return (
        <Link href={href} className={combinedClasses}>{children}</Link>
    );
};

export default NavLink;