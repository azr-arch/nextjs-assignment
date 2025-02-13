"use client";

import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import { Logo } from "../logo";
import { navItems } from "../nav";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { motion } from "motion/react";

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
                <motion.li
                    variants={listItem}
                    key={idx}
                    id="nav-item"
                    className="flex items-center gap-x-1 group text-blue-600 hover:text-blue-400 transition-colors cursor-pointer"
                >
                    <p className=" font-medium">{item.label}</p>
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                </motion.li>
            ))}
        </motion.ul>
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
