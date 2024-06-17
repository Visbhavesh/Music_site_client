'use client';
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);


    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                        

                    </MenuItem>
                   
                </Link>
                <MenuItem setActive={setActive} active={active} item="Courses">
                    <div className="flex flex-col space-y-4 text-sm">
                        <a href={'/contact'}>Web Development</a>
                        <Link href='/courses'>All courses</Link>
                        <Link href="/courses">basic music</Link>
                        <Link href="/courses">music product</Link>
                        <Link href="/courses">Music teacher </Link>
                        <Link href="/courses">music portfolio</Link>

                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="About Us">
                        

                        </MenuItem>
                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us">

                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}
export default Navbar