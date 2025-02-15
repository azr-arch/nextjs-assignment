import Image from "next/image";
import { ShowcaseSection } from "../shared/showcase-secion";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export const ShowcaseThree = () => {
    return (
        <ShowcaseSection className="bg-[#F8F8F8] relative mt-[150px] pb-[100px] md:w-[90%] grid-rows-[auto_1fr]">
            <Image
                src={"/assets/bg/section-3.png"}
                alt="Bikers"
                // fill
                width={550}
                height={550}
                className="object-contain  md:-mt-[50px] lg:-mt-[100px]"
            />
            <div>
                <div className="grid gap-5">
                    <p className="text-blue-600 text-2xl font-semibold tracking-tighter">
                        Lorem ipsum
                    </p>

                    <h3 className="uppercase text-balance heading-1 leading-tight">
                        <span className="text-blue-500">Lorem</span> ipsum dolor sit amet
                        consectetur. Enim donec.
                    </h3>

                    <p className="text-subheading-1">
                        Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 font-subheading text-xl font-semibold gap-y-4">
                    <p>Lorem Ipsum </p>
                    <p>Lorem Ipsum </p>

                    <p>Lorem Ipsum </p>
                    <p>Lorem Ipsum </p>

                    <p>Lorem Ipsum </p>
                    <p>Lorem Ipsum </p>
                </div>
                <Button variant={"secondaryBtn"} className="mt-10">
                    Lorem Ipsum
                    <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </ShowcaseSection>
    );
};
