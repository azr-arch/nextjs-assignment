import { ArrowRight } from "lucide-react";
import { Logo } from "../logo";
import { SectionWrapper } from "../shared/section-wrapper";
import { Button } from "../ui/button";

export const PreFooter = () => {
    return (
        <SectionWrapper>
            <div className="py-[120px] flex items-center justify-center w-full">
                <div className="flex flex-col items-center justify-center space-y-10 max-w-xl">
                    <div className="space-y-5 text-center">
                        <Logo className="w-fit mx-auto" />
                        <h3 className="heading-1 text-center uppercase leading-tight tracking-tight">
                            Lorem ipsum dolor sit amet <br /> consectetur. Dui.
                        </h3>
                        <p className="subtitle-2">
                            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor
                            pharetra tempor quis arcu. Ipsum nullam.
                        </p>
                    </div>
                    <Button variant={"secondaryBtn"}>
                        Lorem Ipsum
                        <ArrowRight className="w-4 h-4 ml-.5" />
                    </Button>
                </div>
            </div>
        </SectionWrapper>
    );
};
