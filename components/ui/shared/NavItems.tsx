"use client";

import { headerLinks } from "@/constants";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

const NavItems = () => {
  const pathname = usePathname();
  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((navs) => {
        const isActive = pathname === navs.route;

        return (
          <li
            key={navs.route}
            className={`${
              isActive && "text-primary-500"
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={navs.route}>{navs.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
