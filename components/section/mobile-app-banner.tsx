import Image from "next/image";
import { Button } from "../ui/button";
import { Banner } from "./banner";

export const MobileAppBanner = () => {
    return (
        <Banner showLogo={false} imgUrl="" className="bg-[#F3F3F3] pb-0 md:pb-0 ">
            <div className="flex flex-col md:flex-row ">
                <div className="w-full md:w-1/2 flex items-start justify-center flex-col pb-[70px]">
                    <div className="grid gap-5 max-w-[70%] mb-1 6">
                        <p className="text-blue-600 text-2xl font-semibold tracking-tighter">
                            Lorem ipsum dolor sit
                        </p>

                        <h3 className="uppercase text-balance heading-1 leading-tight text-[42px]">
                            lorem ipsum Dolor sit amet
                        </h3>

                        <p className="text-subheading-1">
                            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis
                            donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam.
                            Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
                        </p>
                    </div>

                    <div className="mt-[66px] grid gap-3 md:gap-6">
                        {/* Playstore and appstore buttons */}
                        <Button className="h-max p-0">
                            <Image
                                src={"/assets/bg/google-play-poster.png"}
                                width={140}
                                height={41}
                                className="w-[140px] h-[40px]  cursor-pointer select-none"
                                alt="Google Play Poster"
                            />
                        </Button>
                        <Button className="h-max p-0">
                            <Image
                                src={"/assets/bg/app-store-poster.png"}
                                width={140}
                                height={41}
                                className="w-[140px] h-[40px] cursor-pointer  select-none"
                                alt="App Store Poster"
                            />
                        </Button>
                    </div>
                </div>

                <div className="relative w-full md:w-1/2 hidden md:block">
                    <Image
                        src={"/assets/bg/smartphone.png"}
                        alt="Smartphone"
                        fill
                        className="object-cover object-center"
                    />
                </div>
            </div>
        </Banner>
    );
};
