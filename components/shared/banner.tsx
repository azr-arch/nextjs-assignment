"use client";
import { cn } from "@/lib/utils";
import { Logo } from "../logo";
import { motion } from "motion/react";
import { fadeIn } from "@/motion-variants";

export const Banner = ({
    imgUrl = "/assets/bg/banner.png",
    children,
    className,
    showLogo = true,
}: {
    children: React.ReactNode;
    imgUrl?: string;
    className?: string;
    showLogo?: boolean;
}) => {
    return (
        <motion.section
            variants={fadeIn}
            initial={"hidden"}
            whileInView="show"
            style={{
                backgroundImage: `url(${imgUrl})`,
            }}
            className={cn(
                "mt-[150px] pt-[44px] pb-[100px] md:pb-[200px] px-5 sm:px-[70px] bg-no-repeat bg-center bg-cover w-full  max-w-screen-2xl mx-auto",
                className
            )}
        >
            <div className="max-w-screen-xl  mx-auto">
                {showLogo && <Logo className="w-[100px] md:w-[156px]" />}
                {children}
            </div>
        </motion.section>
    );
};
