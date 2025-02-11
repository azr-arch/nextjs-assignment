import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

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

export const NavBar = () => {
    return (
        <NavigationMenu>
            <NavigationMenu>
                {navItems.map((item, idx) => (
                    <NavigationMenuItem key={idx}>
                        {/* Menu label */}
                        <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>

                        {/* Menu options */}
                        {item.children && (
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 w-[200px] list-none">
                                    {item.children.map((item, idx) => (
                                        <li key={idx} className="appearance-none list-none">
                                            <Link href={item.href} legacyBehavior passHref>
                                                <NavigationMenuLink
                                                    className={navigationMenuTriggerStyle()}
                                                >
                                                    Documentation
                                                </NavigationMenuLink>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        )}
                    </NavigationMenuItem>
                ))}
            </NavigationMenu>
        </NavigationMenu>
    );
};
