"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const ShowcaseSection = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <motion.section
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
                transition: {
                    delay: 0.1,
                },
            }}
            viewport={{
                once: true,
                amount: 0.5,
            }}
            className="relative w-full py-5 mt-[80px]"
        >
            <div
                className={cn(
                    "grid grid-rows-[600px_1fr] md:grid-cols-2 bg-white md:grid-rows-1 shadow-2xl gap-8 gradient-border border-b-[20px] p-10 h-max",
                    className
                )}
            >
                {children}
            </div>
        </motion.section>
    );
};
