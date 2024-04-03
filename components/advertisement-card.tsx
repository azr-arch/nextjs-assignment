import { AdCard } from "@/types";
import Image from "next/image";

interface AdvertisementCardProps {
    data?: AdCard;
}

export const AdvertisementCard = ({ data }: AdvertisementCardProps) => {
    return (
        <div className="bg-card dark:bg-darkCard p-2.5 min-w-[237px] h-full flex flex-col gap-y-7 w-1/2 md:w-full min-h-[511px] mx-auto md:mx-0">
            <div className="flex-1 relative">
                <Image
                    src={data?.banner || ""}
                    alt={`Ad Poster`}
                    fill
                    className="object-cover object-center"
                />
            </div>
            <div className="flex-1 space-y-2 px-[15px]">
                <h3 className="font-semibold text-xl text-black dark:text-white truncate">
                    {data?.title}
                </h3>
                <p className="text-secondary dark:text-darkSecondary text-xs 2xl:text-sm">
                    {data?.description}
                </p>
            </div>
        </div>
    );
};
