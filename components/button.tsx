import { cn } from "@/lib/utils";

type ButtonProps = {
    variant?: "primary" | "secondary" | "icon";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ variant, children, className, ...props }: ButtonProps) => {
    return (
        <button
            className={cn(
                "px-4 py-2.5 rounded-sm  flex items-center justify-center  text-white transition-colors duration-150",
                variant === "primary" &&
                    "bg-blueAccent hover:bg-blueAccent/80  text-sm font-semibold rounded-sm h-[46px] w-[124px]",
                variant === "secondary" &&
                    "bg-black hover:bg-black/80 font-medium text-xs rounded-0 h-[36px] w-[213px]",
                variant === "icon" && "bg-transparent font-medium rounded-0 w-4 h-4",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};
