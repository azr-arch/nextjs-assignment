"use client";

import { motion } from "motion/react";
import { Logo } from "../logo";

export const Footer = () => {
    return (
        <footer className="bg-[#171E2B] px-[80px] py-[40px] flex flex-col md:flex-row  items-center md:items-start gap-4 justify-between">
            <Logo />

            <motion.div
                initial={{
                    opacity: 0,
                    x: 100,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                className="mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[68px] mx-auto text-white"
            >
                <div className="grid gap-[28px] ">
                    <b>Lorem ipsum</b>
                    <div className="grid grid-rows-4 gap-6  text-sm">
                        <p>Lorem ipssum</p>
                        <p>Lorem ipssum</p>
                        <p>Lorem ipssum</p>
                        <p>Lorem ipssum</p>
                    </div>
                </div>

                <div className="grid gap-[28px] ">
                    <b>Lorem ipsum</b>
                    <div className="grid grid-rows-4 gap-6 text-sm">
                        <p>Lorem ipssum</p>
                        <p>Lorem ipssum</p>
                        <p>Lorem ipssum</p>
                        <p>Lorem ipssum</p>
                    </div>
                </div>
                <div className="grid gap-[28px] ">
                    <b>Lorem ipsum</b>
                    <div className="grid grid-rows-4 gap-6 text-sm">
                        <p>Lorem ipssum</p>
                        <p>Lorem ipssum</p>
                        <p>Lorem ipssum</p>
                    </div>
                </div>
                <div className="grid gap-[28px] ">
                    <b>Lorem ipsum</b>
                    <div className="grid grid-rows-4 gap-6 text-sm">
                        <p>Lorem ipssum</p>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
};
