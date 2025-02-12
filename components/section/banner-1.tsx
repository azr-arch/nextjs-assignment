import { Banner } from "./banner";

export const BannerOne = () => {
    return (
        <Banner>
            <div className="w-full flex flex-col items-center justify-center gap-y-8 max-w-[900px] mx-auto mt-10">
                <h2 className="text-2xl md:text-[42px] heading-1 text-white text-center leading-tight uppercase tracking-tight">
                    Lorem ipsum dolor sit amet consectetur. Quis adipiscing purus egestas aliquam
                    viverra mi.
                </h2>

                <div className=" md:w-[80%] space-y-5">
                    <p className="text-center text-xs md:text-base font-semibold text-white">
                        Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat
                        vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id
                        sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut.
                        Nisl porta massa diam condimentum nulla quam.
                    </p>
                    <p className="text-center text-xs md:text-base font-semibold text-white">
                        Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum
                        ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae.
                        At viverra quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus
                        non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula.
                        Tincidunt cursus vitae leo.
                    </p>
                </div>
            </div>
        </Banner>
    );
};
