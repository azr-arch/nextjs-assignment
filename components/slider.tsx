"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { SliderItem } from "./slider-item";
import { TicketCard } from "@/types";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";

interface SliderProps {
    data?: TicketCard[];
}

export const CustomSlider = ({ data }: SliderProps) => {
    if (!data || data?.length <= 0) return null;

    return (
        <div className="w-full h-full  flex  items-center justify-center gap-x-5 ">
            <Carousel className="justify-center w-1/2  md:w-full ">
                <CarouselContent className="min-h-[624px] self-stretch ">
                    {data.map((item, idx) => (
                        <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                            <SliderItem data={item} />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};
