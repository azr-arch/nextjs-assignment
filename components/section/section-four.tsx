import { ArrowRight } from "lucide-react";
import { ShowcaseSection } from "../shared/showcase-secion";
import { Button } from "../ui/button";
import Image from "next/image";

export const SectionFour = () => {
    return (
        <ShowcaseSection className="relative grid-rows-[auto_1fr] mt-[60px] gap-x-[100px] bg-[#F1F1F1] mb-[170px]">
            <Image
                src={"/assets/bg/testdrive.png"}
                alt="test drive"
                className="order-1 md:-mt-[80px]"
                width={570}
                height={570}
            />

            <div>
                <div className="space-y-5">
                    <h2 className="uppercase heading-1 text-balance leading-tight text-blue-700">
                        Lorem ipsum dolor sit amet consectetur. Dignissim tellus.
                    </h2>
                    <p className="subheading-2 text-sm font-normal sm:text-base">
                        Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit
                        laoreet urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt
                        ultricies feugiat mauris. Aliquam platea turpis porta nisl felis. Massa in
                        facilisis semper libero eget eu quisque bibendum platea. Tortor fames.
                    </p>
                </div>
                <Button variant={"secondaryBtn"} className="mt-10">
                    Lorem ipsum
                    <ArrowRight className="ml-..5 w-5 h-5" />
                </Button>
            </div>

            {/* Info card */}
            <div className="bg-white py-10 px-8 shadow-2xl space-y-10 order-3 -mb-[170px]">
                <h5 className="tracking-tight font-heading text-foreground font-semibold text-2xl">
                    Lorem ipsum dolor sit
                </h5>
                <div className="space-y-4 font-subheading leading-tight text-xs sm:text-base">
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet
                        habitasse semper.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat
                        vitae amet suspendisse fermentum velit. Nibh dolor nunc id tristique sit.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque
                        scelerisque facilisi. Ultrices lectus viverra pharetra commodo.
                    </p>
                </div>
            </div>
        </ShowcaseSection>
    );
};
