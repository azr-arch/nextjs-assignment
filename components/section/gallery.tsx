import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export const GallerySection = () => {
    return (
        <section className="  py-[160px] bg-[url('/assets/bg/linear.png')] bg-no-repeat bg-center bg-cover">
            {/* Gallery section */}
            <div className="max-w-screen-2xl mx-auto px-16  pt-[60px] bg-[#F1F5F9]  grid lg:grid-cols-[624px_1fr] grid-cols-[1fr] grid-rows-[315px_1fr] gap-6">
                <div className="space-y-8 max-w-[460px] w-[50%] md:w-full">
                    <div className="space-y-4">
                        <p className="text-[#475569] text-xl font-semibold tracking-wide uppercase">
                            No Limits
                        </p>

                        <h3 className="uppercase heading-1  leading-tight ">
                            lorem ipsum Dolor sit amet
                        </h3>
                    </div>

                    <p className="subheading-2 font-normal">
                        Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor
                        pharetra tempor quis arcu. Ipsum nullam.
                    </p>
                    <Button variant={"secondaryBtn"}>
                        Lorem Ipsum
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
                <div className="grid grid-cols-[135px_1fr] row-span-2  grid-rows-[240px_312px_72px] gap-6 order-2 lg:order-none">
                    <div className="relative h-[210px] mt-auto">
                        <Image
                            src={"/assets/bg/gallery-1.png"}
                            className="w-[135px] h-[210px]"
                            alt="Gallery images"
                            fill
                        />
                    </div>
                    <div className="relative">
                        <Image
                            src={"/assets/bg/gallery-2.png"}
                            className="object-top"
                            alt="Gallery images"
                            fill
                        />
                    </div>

                    <div className="relative col-span-2">
                        <Image src={"/assets/bg/gallery-3.png"} fill alt="Gallery images" />
                    </div>

                    <div className="relative ">
                        <Image src={"/assets/bg/gallery-8.png"} fill alt="Gallery images" />
                    </div>
                    <div className="relative ">
                        <Image src={"/assets/bg/gallery-7.png"} fill alt="Gallery images" />
                    </div>
                </div>

                <div className="grid grid-rows-[100px_239px] grid-cols-[95px_1fr] gap-x-6">
                    <div className=" col-start-2 col-end-2 col-span-2  w-[135px] h-[241px] ml-auto -mt-[160px] relative">
                        <Image src={"/assets/bg/gallery-4.png"} fill alt="Gallery images" />
                    </div>
                    <div className="relative h-[162px] mt-auto">
                        <Image src={"/assets/bg/gallery-5.png"} fill alt="Gallery images" />
                    </div>
                    <div className="relative ">
                        <Image src={"/assets/bg/gallery-6.png"} fill alt="Gallery images" />
                    </div>
                </div>
            </div>
        </section>
    );
};
