import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import { Logo } from "../logo";
import { navItems } from "../nav";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";

export const Header = () => {
    return (
        <header className="h-fit py-5 md:h-[100px] md:py-0 flex items-center">
            <Logo className="" />

            <nav className="self-center items-center justify-center content-center ml-auto  lg:ml-[200px]">
                <DesktopNav />
                <MobileNav />
            </nav>
            <Button className="font-semibold ml-auto hidden md:block" variant={"outline"}>
                Sign In
            </Button>
        </header>
    );
};

function DesktopNav() {
    return (
        <ul className="w-full grow px-4 hidden md:flex items-center justify-between gap-5">
            {navItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-x-.5">
                    <p className="text-blue-600 font-medium">{item.label}</p>
                    <ChevronDown className="w-4 h-4 text-blue-600" />
                </li>
            ))}
        </ul>
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
