import { Button } from "@/components/button";
import { Collection } from "@/components/collection";
import { TeamList, TeamOrAddCard } from "@/components/team-list";
import { ThemeSwitch } from "@/components/theme-switch";

const sportsTeamData = [
    {
        banner: "/images/team-1.png", // if this data is being fetched, then this can be changed to image url,
        name: "sacramento river cats",
        noOfEvents: 48,
        sport: "baseball",
        cardType: "teamCard",
    },
    {
        banner: "/images/team-2.png", // if this data is being fetched, then this can be changed to image url,
        name: "las vegas aviators",
        noOfEvents: 28,
        sport: "baseball",
        cardType: "teamCard",
    },
    {
        banner: "/images/team-3.png", // if this data is being fetched, then this can be changed to image url,
        name: "new jersey devils",
        noOfEvents: 15,
        sport: "baseball",
        cardType: "teamCard",
    },
    {
        banner: "/images/team-2.png", // if this data is being fetched, then this can be changed to image url,
        name: "las vegas aviators",
        noOfEvents: 28,
        sport: "baseball",
        cardType: "teamCard",
    },
    {
        banner: "/images/ad.png",
        title: "Advertisement title",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        cardType: "advertisementCard",
    },
];

export default function MainPage() {
    return (
        <div className="w-full h-full max-w-screen-xl mx-auto">
            <div className="space-y-6">
                {/* This can be extracted into a component */}
                <div className="relative w-full flex items-center">
                    <div>
                        <h3 className="block font-bold text-black dark:text-white text-2xl">
                            Sports
                        </h3>

                        {/* Underline effect */}
                        <div className="w-full h-[2px] bg-[#738FFF] mt-1.5" />
                    </div>

                    <ThemeSwitch />
                </div>

                <TeamList data={sportsTeamData as TeamOrAddCard[]} />
            </div>
            <Button variant="primary" className="shadow-sm shadow-black mx-auto mt-[50px]">
                See More
            </Button>

            <Collection />
        </div>
    );
}
