"use client";

import { ThemeProvider } from "next-themes";

export const Provider = ({ children }: { children: React.ReactNode }) => {
    // @ts-ignore
    return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};
