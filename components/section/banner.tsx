import { cn } from "@/lib/utils";
import { Logo } from "../logo";

export const Banner = ({
    imgUrl = "/assets/bg/banner.png",
    children,
    className,
    showLogo = true,
}: {
    children: React.ReactNode;
    imgUrl?: string;
    className?: string;
    showLogo?: boolean;
}) => {
    return (
        <section
            style={{
                backgroundImage: `url(${imgUrl})`,
            }}
            className={cn(
                "mt-[150px] pt-[44px] pb-[100px] md:pb-[200px] px-[70px] bg-no-repeat bg-center bg-cover w-full  max-w-screen-2xl mx-auto",
                className
            )}
        >
            <div className="max-w-screen-xl  mx-auto">
                {showLogo && <Logo className="w-[100px] md:w-[156px]" />}
                {children}
            </div>
        </section>
    );
};
