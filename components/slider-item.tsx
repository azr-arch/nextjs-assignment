import { TicketCard } from "@/types";
import Image from "next/image";
import { Button } from "./button";

interface SliderItemProps {
    data?: TicketCard;
}

export const SliderItem = ({ data }: SliderItemProps) => {
    return (
        <div className="w-full h-full relative max-w-[300px]  inline-flex flex-col items-start shrink-0 bg-white dark:bg-darkCard p-4 rounded-sm  shadow-md">
            <div className="relative h-full w-full max-h-[401px] ">
                <Image
                    src={data?.imageUrl || ""}
                    alt={`${data?.team}'s Banner`}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Dashed Effect */}
            <div className=" flex items-center px-4 h-[20px] relative   w-full mb-auto dark:shadow-white ticket-effect">
                <div className="w-full h-[1px] dashed" />
            </div>

            <div className="flex flex-col w-full items-center mb-5">
                <h3
                    className="text-black dark:text-white  font-medium text-lg mb-3 truncate"
                    title={data?.team}
                >
                    {data?.team}
                </h3>

                <div className="space-y-2 text-center text-xs md:text-sm ">
                    <p className="uppercase text-black dark:text-white">
                        {data?.date} | {data?.weekday} | {data?.time}
                    </p>
                    <p className="text-secondary dark:text-darkSecondary">{data?.venue}</p>
                </div>
            </div>

            <Button variant="secondary" className="w-full">
                Take Flight Collection
            </Button>
        </div>
    );
};
