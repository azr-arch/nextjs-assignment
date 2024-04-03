"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    if (!mounted) return null;

    return (
        <button
            className="ml-auto text-xs text-black dark:text-white uppercase tracking-wide bg-blueAccent/80 px-2 py-1 rounded-md"
            onClick={toggleTheme}
        >
            {theme === "light" ? "Dark" : "Light"}
        </button>
    );
};
