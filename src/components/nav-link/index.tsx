'use client';

import { type FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type NavLinkProps } from "@/types";

const NavLink: FC<Readonly<NavLinkProps>> = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`transition-colors select-none ${isActive ? 'text-[#FF2121]' : 'hover:text-[#FF2121] hover:underline'}`}
    >
      {children}
    </Link>
  );
};

export default NavLink