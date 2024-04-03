import { CustomSlider } from "./slider";

const data = [
    {
        id: 0,
        imageUrl: "/images/ticket-1.png",
        team: "Las Vegas Aviators",
        venue: "Las Vegas Ballpark, Las Vegas, Nevada",
        time: "4:30",
        date: "15 oct",
        weekday: "sunday",
    },
    {
        id: 1,
        imageUrl: "/images/ticket-2.png",
        team: "Sacramento River Cats",
        venue: "Sutter Health Park, Sacramento, California",
        time: "4:30",
        date: "15 oct",
        weekday: "sunday",
    },
    {
        id: 2,
        imageUrl: "/images/ticket-1.png",
        team: "Las Vegas Aviators",
        venue: "Las Vegas Ballpark, Las Vegas, Nevada",
        time: "4:30",
        date: "15 oct",
        weekday: "sunday",
    },
];

export const Collection = () => {
    return (
        <div className="mt-9 h-full bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF] dark:from-[#18282A] dark:to-[#221A2C]  w-full flex items-center justify-center pt-9 md:pt-[70px] px-10 md:px-[77px]  pb-5 md:pb-[50px]">
            <div className="space-y-12">
                <div className="space-y-6 text-center">
                    <h1 className="text-black dark:text-white font-bold text-5xl">
                        Collection Spotlight
                    </h1>
                    <p className="text-xs md:text-sm dark:text-white text-black break-words">
                        Discover extraordinary moments with our Spotlight Collection
                        metatickets—exclusive access to premium events for an unforgettable
                        experience. Grab yours today!
                    </p>
                </div>

                {/* Slider */}
                <CustomSlider data={data} />
            </div>
        </div>
    );
};
