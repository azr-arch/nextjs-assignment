import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            backgroundColor: {
                main: "#292B32",
                card: "#3B3E47",
                blueAccent: "#2C9CF0",
            },
            textColor: {
                secondary: "#DFDFDF",
            },
            colors: {
                blueAccent: "#2C9CF0",
            },
        },
    },
    plugins: [],
};
export default config;
