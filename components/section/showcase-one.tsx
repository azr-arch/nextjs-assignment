import Image from "next/image";
import { ShowcaseSection } from "./showcase-secion";

export const ShowcaseOne = () => {
    return (
        <ShowcaseSection>
            <div>
                <div className="grid gap-5">
                    <p className="text-blue-600">Lorem ipsum dolor sit</p>

                    <h3 className="capitalize text-balance heading-1 text-[42px]">
                        lorem ipsum Dolor sit amet
                    </h3>

                    <p className="text-subheading-1">
                        Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec
                        dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl
                        iaculis at felis aliquet. Hendrerit tellus at purus lectus.
                    </p>
                </div>

                <div className="grid grid-rows-3 mt-[50px]s">
                    <div className="flex items-center gap-x-8 justify-center">
                        <Image
                            src={"/assets/bg/showcase-1.png"}
                            width={146}
                            height={146}
                            alt="guy ona bike"
                        />

                        <p className="">
                            Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum
                            feugiat.
                        </p>
                    </div>
                    <div className="flex items-center gap-x-8 justify-center">
                        <Image
                            src={"/assets/bg/showcase-1.png"}
                            width={146}
                            height={146}
                            alt="guy ona bike"
                        />

                        <p className="">
                            Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum
                            feugiat.
                        </p>
                    </div>
                    <div className="flex items-center gap-x-8s justify-center">
                        <Image
                            src={"/assets/bg/showcase-1.png"}
                            width={146}
                            height={146}
                            alt="guy ona bike"
                        />

                        <p className="">
                            Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum
                            feugiat.
                        </p>
                    </div>
                </div>
            </div>
        </ShowcaseSection>
    );
};
