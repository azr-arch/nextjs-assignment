"use client";

import Image from "next/image";
import { SectionWrapper } from "../shared/section-wrapper";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const slideVariants = {
    initial: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
};

export const SlideSection = () => {
    const [activeSlideIdx, setActiveSlideIdx] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlideIdx((prevIdx) => (prevIdx + 1) % 4); // To showcase how slide-change will look like, for demo purposes
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <SectionWrapper>
            <div className="space-y-[80px] py-[80px]">
                <div className="space-y-8">
                    <h2 className="text-balance text-center heading-1 uppercase leading-tight tracking-tight">
                        Lorem ipsum dolor sit amet
                    </h2>

                    <p className="subheading-2 text-center">
                        Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst.
                        Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut aliquam
                        at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget purus
                        ornare. Risus elit et fringilla habitant ut facilisi.
                    </p>
                </div>

                <motion.div className="space-y-[80px]">
                    <AnimatePresence initial={false}>
                        <motion.div
                            className="grid h-full grid-rows-2 sm:grid-rows-1 sm:h-[412px] grid-cols-1 sm:grid-cols-2 "
                            transition={{ duration: 0.5 }}
                        >
                            <motion.div
                                initial={{
                                    x: -100,
                                    opacity: 0,
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                }}
                                exit={{
                                    x: -100,
                                    opacity: 0,
                                }}
                                className="relative"
                                key={activeSlideIdx + 2} // Randomly assigned this
                            >
                                <Image src={"/assets/bg/win-1.png"} fill alt="win-1" />
                            </motion.div>

                            <motion.div
                                key={activeSlideIdx}
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                transition={{
                                    ease: "easeOut",
                                    duration: 0.4,
                                }}
                                variants={slideVariants}
                                className=" w-[80%] sm:w-[110%] z-10 self-center bg-white p-[48px] mx-auto -mt-[10%] sm:-mt-0 sm:-ml-[10%] space-y-6 shadow-outline"
                            >
                                <div className="space-y-4">
                                    <p className="font-subheading text-[#475569] text-2xl font-semibold">
                                        Artist & Investor
                                    </p>

                                    <p className="font-subheading text-[#0F172A] leading-tight text-balance">
                                        Enim sagittis, sit porttitor morbi lobortis amet, libero
                                        adipiscing auctor. Malesuada tristique libero, id netus
                                        tincidunt. Egestas ac arcu amet nisl quis est ...
                                    </p>
                                </div>

                                <Link
                                    href={"#"}
                                    className="text-blue-500 flex items-center gap-x-2 font-subheading"
                                >
                                    Read Full Story
                                    <MoveRight />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                    <SliderBtn
                        activeIdx={activeSlideIdx}
                        // changeActiveIdx={(idx: number) => setActiveSlideIdx(idx)}
                    />
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

function SliderBtn({
    activeIdx,
}: {
    activeIdx: number;
    // changeActiveIdx: (idx: number) => void;
}) {
    return (
        <motion.div layout className="flex items-center gap-.5 justify-center">
            {Array.from({ length: 4 }).map((_, idx) => (
                <motion.span
                    key={idx}
                    initial={false}
                    animate={
                        activeIdx === idx
                            ? {
                                  width: 42,
                              }
                            : {
                                  width: 12,
                              }
                    }
                    data-active={activeIdx === idx}
                    // onClick={() => changeActiveIdx(idx)}
                    className="slider-btn cursor-pointer"
                ></motion.span>
            ))}
        </motion.div>
    );
}
