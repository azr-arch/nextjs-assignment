import { TeamCard, AdCard } from "@/types";
import { TeamInfoCard } from "./team-info-card";

// This is type definition
export type TeamOrAddCard = TeamCard | AdCard;
interface TeamListProps {
    data: TeamOrAddCard[];
}

export const TeamList = ({ data }: TeamListProps) => {
    if (data.length <= 0) {
        return <p>No Data Found!</p>;
    }

    return (
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[14px] w-full">
            {data.map((card, idx) => (
                <li key={idx}>
                    {/* This is a component */}
                    <TeamInfoCard data={card} />
                </li>
            ))}
        </ul>
    );
};
