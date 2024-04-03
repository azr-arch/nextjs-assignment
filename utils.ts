import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const DAYS_OF_WEEK = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

export const getWeekDay = (date: string) => {
    const parsedDate = parseDateString(date);
    const dayIdx = new Date(parsedDate).getDay();

    return DAYS_OF_WEEK[dayIdx];
};

function parseDateString(dateString: string) {
    // Split the input string into day, month, and year
    const [day, monthStr, year] = dateString.split(" ");

    // Map month names to numeric values
    const monthMap = {
        jan: 1,
        feb: 2,
        mar: 3,
        apr: 4,
        may: 5,
        jun: 6,
        jul: 7,
        aug: 8,
        sep: 9,
        oct: 10,
        nov: 11,
        dec: 12,
    };

    // Convert month abbreviation to numeric value
    const month = monthMap[monthStr.toLowerCase()];

    // Construct the final date string
    const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day.padStart(2, "0")}`;
    return formattedDate;
}
