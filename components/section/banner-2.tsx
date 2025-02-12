import { Banner } from "./banner";

export const BannerTwo = () => {
    return (
        <Banner imgUrl={"/assets/bg/banner-2.png"}>
            <div className="w-full h-full flex items-center justify-center max-w-[65%] mt-16 mx-auto">
                <h3 className="heading-1 text-white uppercase text-balance text-center">
                    dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi.
                    dolor sit amet consectetur. Quis adipiscing
                </h3>
            </div>
        </Banner>
    );
};
