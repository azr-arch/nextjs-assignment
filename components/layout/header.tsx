"use client";

import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import { Logo } from "../logo";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import Link from "next/link";

export const navItems = [
    {
        label: "Lorem Ipsum",
        children: [
            {
                label: "Link 1",
                href: "#",
            },
            {
                label: "Link 2",
                href: "#",
            },
            // ... more links
        ],
    },
    {
        label: "Dolor Ipsum",
        children: [
            {
                label: "Link XYZ",
                href: "#",
            },
            {
                label: "Link XYZ",
                href: "#",
            },
            // ... more links
        ],
    },
    {
        label: "Dolor Ipsum",
        children: [
            {
                label: "Link XYZ",
                href: "#",
            },
            {
                label: "Link XYZ",
                href: "#",
            },
            // ... more links
        ],
    },
];

const list = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const listItem = {
    hidden: {
        opacity: 0,
        y: "-100%",
    },
    show: {
        opacity: 1,
        y: 0,
    },
};

export const Header = () => {
    return (
        <header className="h-fit py-5 md:h-[100px] md:py-0 flex items-center">
            <Logo className="" />

            <nav
                id="nav"
                className="self-center items-center justify-center content-center ml-auto  lg:ml-[200px]"
            >
                <DesktopNav />
                <MobileNav />
            </nav>
            <Button
                className="font-semibold ml-auto hidden md:block transition-transform hover:scale-95"
                variant={"outline"}
            >
                Sign In
            </Button>
        </header>
    );
};

function DesktopNav() {
    return (
        <motion.ul
            variants={list}
            initial={"hidden"}
            animate={"show"}
            className="w-full grow px-4 hidden md:flex items-center justify-between gap-5"
        >
            {navItems.map((item, idx) => (
                <motion.li key={idx} variants={listItem}>
                    <DesktopNavItem {...item} />
                </motion.li>
            ))}
        </motion.ul>
    );
}

function DesktopNavItem({
    label,
    children,
}: {
    label: string;
    children: {
        label: string;
        href: string;
    }[];
}) {
    return (
        <div
            // id="nav-item"
            className="group relative flex items-center gap-x-1 group text-blue-600 hover:text-blue-400 transition-colors cursor-pointer"
        >
            <p className=" font-medium">{label}</p>
            <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />

            {/* DropDown Content */}
            <div className="bg-neutral-100/50 border border-neutral-200 rounded-md absolute top-8 left-1/2 -translate-x-1/2  p-2  w-[180px] transition-all duration-200 invisible opacity-0 group-hover:visible group-hover:opacity-100 ">
                {children.map((item, idx) => (
                    <Link
                        href={"#"}
                        key={idx}
                        className="px-3 block py-2 rounded-md hover:bg-neutral-300 text-sm cursor-pointer text-blue-500 hover:text-blue-800"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}

function MobileNav() {
    return (
        <div className="block md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline">
                        <Menu className="w-4 h-4" />
                    </Button>
                </SheetTrigger>
                <SheetContent className="p-0">
                    <SheetHeader className="p-6 pb-0">
                        <SheetTitle className="font-heading">Menu</SheetTitle>
                    </SheetHeader>
                    <ul className="grid py-4">
                        {navItems.map((item, idx) => (
                            <li
                                key={idx}
                                className="flex items-center cursor-pointer transition-colors gap-x-.5 py-4 px-6 hover:bg-neutral-300 justify-between"
                            >
                                <p className="text-foreground font-medium">{item.label}</p>
                                <ChevronRight className="w-4 h-4 text-foreground" />
                            </li>
                        ))}
                    </ul>
                    <Button className="font-medium ml-6" variant={"outline"}>
                        Sign In
                    </Button>
                </SheetContent>
            </Sheet>
        </div>
    );
}
