import { Slider } from "./slider";

export const Collection = () => {
    return (
        <div className="mt-9 bg-gradient-to-b from-[#18282A] to-[#221A2C] w-full flex items-center justify-center pt-9 md:pt-[70px] px-10 md:px-[77px]  pb-5 md:pb-[50px]">
            <div className="space-y-12">
                <div className="space-y-6 text-center">
                    <h1 className="text-white font-bold text-5xl">Collection Spotlight</h1>
                    <p className="text-sm text-white">
                        Discover extraordinary moments with our Spotlight Collection
                        metatickets—exclusive access to premium events for an unforgettable
                        experience. Grab yours today!
                    </p>
                </div>

                {/* Slider */}
                <Slider />
            </div>
        </div>
    );
};
