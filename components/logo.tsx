import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "flex items-center justify-center h-[40px] md:h-[60px] px-8 bg-neutral-400 font-extrabold text-black font-subheading text-xl md:text-3xl",
                className
            )}
        >
            LOGO
        </div>
    );
};
