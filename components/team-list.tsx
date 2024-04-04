import { TeamCard, AdCard, CardType } from "@/types";
import { TeamInfoCard } from "./team-info-card";
import { AdvertisementCard } from "./advertisement-card";

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
                    {card.cardType === CardType.TEAM ? (
                        // Render a team info card
                        <TeamInfoCard data={card as TeamCard} />
                    ) : (
                        // Else render a advertisement card
                        <AdvertisementCard data={card as AdCard} />
                    )}
                </li>
            ))}
        </ul>
    );
};
