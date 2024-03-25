import { cn } from "@/utils";

type ButtonProps = {
    variant?: "primary" | "secondary";
    textContent?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ variant, children, className, ...props }: ButtonProps) => {
    return (
        <button
            className={cn(
                "px-4 py-2.5 rounded-sm bg-white text-black flex items-center justify-center",
                className,
                variant === "primary" &&
                    "bg-blueAccent text-white text-sm font-semibold rounded-sm h-[46px] w-[124px]",
                variant === "secondary" &&
                    "bg-black font-medium text-xs rounded-0 h-[36px] w-[213px]"
            )}
            {...props}
        >
            {children}
        </button>
    );
};
