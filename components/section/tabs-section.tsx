import { SectionWrapper } from "../shared/section-wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export const TabsSection = () => {
    return (
        <SectionWrapper>
            <div className="py-[80px] md:py-[160px] px-5 sm:px-[60px] grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-[80px]">
                <div className="space-y-6">
                    <h3 className="heading-1 text-balance uppercase leading-tight">
                        lorem ipsum dolor sit amet
                    </h3>
                    <TabsBar />
                </div>
                <Image
                    src={"/assets/bg/handshake.png"}
                    className=""
                    width={600}
                    height={406}
                    alt="handshake"
                />
            </div>
        </SectionWrapper>
    );
};

function TabsBar() {
    return (
        <Tabs defaultValue="research" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="research">Research</TabsTrigger>
                <TabsTrigger value="plan">Plan</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
            </TabsList>
            <TabsContent value="research">
                <div>
                    <p className="text-neutral-500 line-clamp-3">
                        Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque
                        pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac
                        turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.
                    </p>

                    <Button className="text-blue-500 mt-6" variant={"ghost"}>
                        Check tools
                        <MoveRight className="w-4 h-4" />
                    </Button>
                </div>
            </TabsContent>
            <TabsContent value="plan">
                <div>
                    <p className="text-neutral-500 line-clamp-3">
                        Lacinia fermentum congue orci, vehicula suspendisse placerat libero nunc.
                        Etiam pellentesque nullam id magna nec varius libero, venenatis. Velit
                        turpis ac nisi ut metus. Fusce ultricies tincidunt magna et velit vel
                        dictum.
                    </p>

                    <Button className="text-blue-500 mt-6" variant={"ghost"}>
                        Check tools
                        <MoveRight className="w-4 h-4" />
                    </Button>
                </div>
            </TabsContent>
            <TabsContent value="design">
                <div>
                    <p className="text-neutral-500 line-clamp-3">
                        Phasellus scelerisque metus quis, suscipit arcu viverra nunc. Nulla facilisi
                        ultricies maecenas ac turpis eu, fringilla. Proin fermentum semper nec amet
                        in. Integer dapibus varius arcu id enim et dictum.
                    </p>

                    <Button className="text-blue-500 mt-6" variant={"ghost"}>
                        Check tools
                        <MoveRight className="w-4 h-4" />
                    </Button>
                </div>
            </TabsContent>
            <TabsContent value="password"></TabsContent>
        </Tabs>
    );
}
