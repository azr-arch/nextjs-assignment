import { ArrowRight, Check, MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";

export const HeroSection = () => {
    return (
        <section className="flex items-center justify-center md:justify-start min-h-hero">
            {/* LHS */}
            <div className="max-w-xl md:max-w-lg text-whites">
                <h3 className="heading-1 leading-[70px] text-[64px] tracking-tighter mb-5 text-balance md:text-pretty">
                    Lorem ipsum dolor sit amet
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis.
                    Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero imperdiet
                    neque. Justo suspendisse tristique posuere quis eget viverra. Nunc euismod
                    ultrices etiam nulla habitasse.{" "}
                </p>

                <div className=" max-w-[450px] mt-[60px]">
                    <div className="flex items-center gap-2">
                        <Input className="border-[#C3C3C3]" type="text" />
                        <Button className="text-white items-center" variant={"secondaryBtn"}>
                            Submit
                            <MoveRight className="w-4 h-4" />
                        </Button>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                        <span className="w-7 h-7 rounded-full text-white bg-blue-700 flex items-center justify-center">
                            <Check className="w-4 h-4" />
                        </span>
                        <p className="text-foreground font-subheading font-medium">
                            No credit card required
                        </p>
                    </div>
                </div>
            </div>
            {/* Image Container with Clip Path */}
            <div className="absolute inset-0 -z-10 hero-clip-path overflow-hidden w-0 md:w-1/2 ml-auto">
                <Image
                    src="/assets/bg/hero-bg.png"
                    alt="Hero Bike"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>
        </section>
    );
};
