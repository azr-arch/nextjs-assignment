import type { Metadata } from "next";
import { Roboto_Condensed, Inter } from "next/font/google";
import "./globals.css";
import InfoCardPopup from "@/components/info-card";
import Head from "next/head";

const robotoCondensed = Roboto_Condensed({
    weight: "700",
    subsets: ["latin"],
    variable: "--heading-font",
});

const inter = Inter({
    weight: ["400", "500", "600", "800"],
    subsets: ["latin"],
    variable: "--subheading-font",
});

export const metadata: Metadata = {
    title: "Assignment",
    description: "Built with Nextjs, ShadCN, motion",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Head>
                <link rel="icon" href="/favicon.png" sizes="16x16" type="image/png" />
            </Head>
            <body className={`${robotoCondensed.variable} ${inter.variable} antialiased relative`}>
                {children}
                <InfoCardPopup />
            </body>
        </html>
    );
}
