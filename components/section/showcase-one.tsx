import Image from "next/image";
import { ShowcaseSection } from "./showcase-secion";
import { Button } from "../ui/button";
import { ArrowRight, Phone } from "lucide-react";

const showcaseItems = [
    {
        label: ` Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.`,
        imagrUrl: "/assets/bg/showcase-1.png",
    },
    {
        label: ` Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.`,
        imagrUrl: "/assets/bg/showcase-2.png",
    },
    {
        label: ` Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.`,
        imagrUrl: "/assets/bg/showcase-3.png",
    },
];

export const ShowcaseOne = () => {
    return (
        <ShowcaseSection>
            <div>
                <div className="grid gap-5">
                    <p className="text-blue-600 text-2xl font-semibold tracking-tighter">
                        Lorem ipsum dolor sit
                    </p>

                    <h3 className="capitalize text-balance heading-1 text-[42px]">
                        lorem ipsum Dolor sit amet
                    </h3>

                    <p className="text-subheading-1">
                        Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec
                        dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl
                        iaculis at felis aliquet. Hendrerit tellus at purus lectus.
                    </p>
                </div>

                <div className="grid grid-rows-3 gap-5 mt-[50px]">
                    {showcaseItems.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-x-8 justify-center">
                            <Image
                                src={item.imagrUrl}
                                width={146}
                                height={146}
                                alt="guy ona bike"
                            />

                            <p className="">{item.label}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex items-center gap-5">
                    <Button variant={"primary"}>
                        Lorem Ipsum
                        <ArrowRight />
                    </Button>
                    <Button variant={"ghost"} className=" text-secondaryBtn font-bold">
                        <Phone className="w-4 h-4" />
                        123456789
                    </Button>
                </div>
            </div>
            <div className="relative w-full h-full -order-1 md:order-1 max-w-[630px]">
                <Image src={"/assets/bg/bikes.png"} alt="bikes" fill className="object-cover" />
            </div>

            {/* Abstract line pattern */}
            <div
                className="absolute inset-0 gradient-lines"
                style={{
                    // transform: "rotate(75deg)",
                    position: "absolute",
                    width: "30%" /* Extend beyond container */,
                    height: " 10%",
                    top: "95%",
                    zIndex: "-999",
                    left: "50%" /* Adjust to center the lines */,
                }}
            />
        </ShowcaseSection>
    );
};
