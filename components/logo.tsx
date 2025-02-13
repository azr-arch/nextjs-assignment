"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const Logo = ({ className }: { className?: string }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 0.2,
                },
            }}
            className={cn(
                "flex items-center justify-center h-[40px] md:h-[60px] px-8 bg-neutral-400 font-extrabold text-black font-subheading text-xl md:text-3xl",
                className
            )}
        >
            LOGO
        </motion.div>
    );
};
