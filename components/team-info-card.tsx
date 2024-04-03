import Image from "next/image";
import { TeamOrAddCard } from "./team-list";
import { TeamList } from "./team-list";
import { TeamCard, AdCard } from "@/types";

interface TeamInfoCardProps {
    data?: TeamCard;
}

export const TeamInfoCard = ({ data }: TeamInfoCardProps) => {
    return (
        <div className="bg-white shadow-md dark:bg-darkCard p-2.5 min-w-[237px] h-full flex flex-col gap-y-4 w-1/2 md:w-full min-h-[511px] mx-auto md:mx-0">
            <div className="flex-grow relative rounded-sm overflow-hidden">
                <Image
                    src={data?.banner || ""}
                    alt={`${data?.name}'s Poster`}
                    fill
                    className="object-cover object-top"
                />
            </div>

            <div className="flex  md:flex-grow-0 flex-col items-start gap-y-4">
                <h2 className="text-[17px] text-black dark:text-white font-medium capitalize truncate">
                    {data?.name}
                </h2>

                <div className="bg-main dark:bg-darkMain space-x-[39px] inline-flex rounded-sm py-3 px-2.5 w-full">
                    <div className="flex flex-col gap-y-3">
                        <span className="text-secondary dark:text-darkSecondary text-xs font-normal">
                            Total Events
                        </span>
                        <p className="text-black dark:text-white text-sm font-medium leading-none">
                            {data?.noOfEvents} Events
                        </p>
                    </div>

                    <div className="flex flex-col gap-y-3">
                        <span className="text-secondary dark:text-darkSecondary text-xs font-normal">
                            Sport
                        </span>
                        <p className="text-black dark:text-white text-sm font-medium capitalize leading-none">
                            {data?.sport}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
