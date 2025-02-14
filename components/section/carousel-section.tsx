"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "../ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";

export const CarouselSection = () => {
    return (
        <section className="max-w-screen-2xl mx-auto bg-[#155ADA] p-[80px]">
            <div className="flex items-start md:items-center  flex-col md:flex-row gap-y-14 md:gap-x-[160px] w-full">
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -100,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 0.3,
                        },
                    }}
                    className="w-[60%]"
                >
                    <p className="subheading-2 text-white">Join other Sun harvesters</p>
                    <h3 className="text-white heading-1 uppercase tracking-tight mt-2 mb-6">
                        Lorem ipsum dolor sit amet
                    </h3>

                    <p className="text-sm text-white">
                        Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend
                        mi tristique condimentum congue fusce nunc, donec magnis commodo.
                    </p>
                </motion.div>

                <Button className="bg-white transition-transform font-semibold hover:bg-white/80 text-black  md:w-[238px]">
                    Lorem Ipsum
                </Button>
            </div>
            <CarouselWrapper />
        </section>
    );
};

const carouselData = [
    {
        icon: "/assets/icons/cloud-icon.png",
        description: `Purus maecenas quis elit eu, aliquet. 
                        Tellus porttitor ut sollicitudin sit non fringilla. 
                        Quam nunc volutpat senectus neque eget amet pharetra, euismod. 
                        Tempus, nunc, molestie imperdiet curabitur commodo euismod.`,
        userAvatar: "/assets/user-avatar/jane-cooper.png",
        userName: "Jane Cooper",
    },
    {
        icon: "/assets/icons/star-icon.png",
        description: `Vehicula sit sit pharetra bibendum ut risus accumsan. 
                    Purus, in metus, enim, ipsum morbi euismod pellentesque. 
                    Mattis pharetra accumsan eget est mi enim, id. 
                    Sit quam tortor eu tellus non, in euismod integer.`,
        userAvatar: "/assets/user-avatar/ralph-edward.png",
        userName: "Ralph Edwards",
    },
    {
        icon: "/assets/icons/rook-icon.png",
        description: `Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. 
                        Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. 
                        Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.`,
        userAvatar: "/assets/user-avatar/courtney.png",
        userName: "Courtney Henry",
    },
    {
        icon: "/assets/icons/clock-icon.png",
        description: `Hendrerit augue ut nec, senectus quis integer netus. 
                        Sagittis fusce rhoncus magnis habitant amet amet. 
                        Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus.
                        Mauris egestas feugiats leo vitae praesent neque, et.`,
        userAvatar: "/assets/user-avatar/cameron.png",
        userName: "Cameron Williamson",
    },
];

function CarouselWrapper() {
    const duplicatedData = [...carouselData, ...carouselData];

    return (
        <Carousel className="mt-[80px] py-6 ">
            <CarouselContent>
                {duplicatedData.map((item, idx) => (
                    <CarouselItem className=" md:basis-1/2 lg:basis-1/3" key={idx}>
                        <CarouselCard {...item} />
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

function CarouselCard({
    icon,
    description,
    userAvatar,
    userName,
}: {
    icon: string;
    description: string;
    userAvatar: string;
    userName: string;
}) {
    return (
        <div className="py-6 bg-white rounded-lg  flex-shrink-0  ">
            <div className="w-full flex flex-col items-start justify-between h-full gap-6 p-8">
                <Image src={icon} alt={"icon"} width={64} height={64} />

                <p className="text-black leading-tight line-clamp-6">{description}</p>

                <div className="w-full flex items-center gap-5 mt-auto ">
                    <Image
                        src={userAvatar}
                        alt={`${userName} avatar`}
                        width={64}
                        height={64}
                        className="rounded-full w-[54px] h-[54px]"
                    />

                    <p className="font-heading tracking-tight">{userName}</p>
                </div>
            </div>
        </div>
    );
}
