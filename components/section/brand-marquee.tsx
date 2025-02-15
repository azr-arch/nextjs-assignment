import Image from "next/image";

export const BrandMarquee = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-y-6 sm:gap-y-[80px] w-full h-full mt-[50px] py-10 max-w-[1112px] mx-auto">
            <h3 className="tracking-tight leading-tight heading-1 text-balance text-center uppercase">
                Lorem ipsum dolor sit amet consectetur. Commodo leo amet.
            </h3>

            <div className="relative min-h-[408px] w-full h-full">
                <Image src={"/assets/bg/brands.png"} alt="brands" fill className="object-contain" />
            </div>
        </div>
    );
};
