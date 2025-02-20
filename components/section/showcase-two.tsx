"use client";

import Image from "next/image";
import { ShowcaseSection } from "../shared/showcase-secion";

import { motion } from "motion/react";
import { fadeIn, listItemVariant, listVariant } from "@/motion-variants";

const showcaseItems = [
    {
        label: ` Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.`,
        labelDesc: `Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. 
                Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. 
                Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.`,
        imagrUrl: "/assets/bg/sure-drive-logo.png",
    },
    {
        label: ` Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.`,
        labelDesc: `Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. 
                    Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. 
                    Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.`,
        imagrUrl: "/assets/bg/sure-drive-logo.png",
    },
    {
        label: ` Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.`,
        labelDesc: `Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra.
                    Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. 
                    Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.`,
        imagrUrl: "/assets/bg/sure-drive-logo.png",
    },
];

export const ShowcaseTwo = () => {
    return (
        <ShowcaseSection>
            <div>
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="show"
                    id="showcase-title-container"
                    className="grid gap-5"
                >
                    <p className="text-blue-600 text-2xl font-semibold tracking-tighter">
                        Lorem ipsum dolor sit
                    </p>

                    <h3 className="uppercase text-balance heading-1 text-[42px]">
                        lorem ipsum Dolor sit amet
                    </h3>

                    <p className="text-subheading-1">
                        Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec
                        dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl
                        iaculis at felis aliquet. Hendrerit tellus at purus lectus.
                    </p>
                </motion.div>

                <motion.div
                    variants={listVariant}
                    initial={"hidden"}
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-rows-3 gap-8 mt-[50px]"
                >
                    {showcaseItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={listItemVariant}
                            id="showcase-item"
                            className="flex items-start gap-x-4 justify-center"
                        >
                            <Image
                                src={item.imagrUrl}
                                width={36}
                                height={36}
                                alt="Sure drive logo"
                                className="w-9 h-9"
                            />

                            <div className="space-y-2">
                                <p className="text-xl font-semibold text-foreground">
                                    {item.label}
                                </p>
                                <p className="text-black">{item.labelDesc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <div
                id="showcase-img-container"
                className="relative w-full h-full -order-1 md:order-1 max-w-[577px] max-h-[620px]"
            >
                <Image
                    src={"/assets/bg/showcase-2-1.png"}
                    alt="Office men"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Abstract line pattern */}
            <div
                id="showcase-border"
                className="absolute inset-0 gradient-lines"
                style={{
                    position: "absolute",
                    width: "15%" /* Extend beyond container */,
                    height: " 10%",
                    top: "100%",
                    zIndex: "-999",
                    left: "-10%" /* Adjust to center the lines */,
                }}
            />
        </ShowcaseSection>
    );
};
