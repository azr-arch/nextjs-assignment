import Image from "next/image";
import Link from "next/link";

const featuresData = [
    {
        imageUrl: "/assets/bg/feature-1.png",
        title: "Lorem ipsum dolor sit amet consectetur.",
        desc: `Lorem ipsum dolor sit amet consectetur. 
                Nunc gravida consequat faucibus cursus nisi.
                Nunc montes molestie a vitae vulputate. 
                Phasellus in pulvinar et vitae. Mi eget lectus nec et. 
                Libero iaculis diam nam mauris a eget. 
                Quam nibh rhoncus rhoncus enim venenatis bibendum.`,

        href: "#",
    },
    {
        imageUrl: "/assets/bg/feature-2.png",
        title: "Lorem ipsum dolor sit amet consectetur.",
        desc: `Lorem ipsum dolor sit amet consectetur. 
                Nunc gravida consequat faucibus cursus nisi.
                Nunc montes molestie a vitae vulputate. 
                Phasellus in pulvinar et vitae. Mi eget lectus nec et. 
                Libero iaculis diam nam mauris a eget. 
                Quam nibh rhoncus rhoncus enim venenatis bibendum.`,

        href: "#",
    },
    {
        imageUrl: "/assets/bg/feature-3.png",
        title: "Lorem ipsum dolor sit amet consectetur.",
        desc: `Lorem ipsum dolor sit amet consectetur. 
                Nunc gravida consequat faucibus cursus nisi.
                Nunc montes molestie a vitae vulputate. 
                Phasellus in pulvinar et vitae. Mi eget lectus nec et. 
                Libero iaculis diam nam mauris a eget. 
                Quam nibh rhoncus rhoncus enim venenatis bibendum.`,

        href: "#",
    },
    {
        imageUrl: "/assets/bg/feature-4.png",
        title: "Lorem ipsum dolor sit amet consectetur.",
        desc: `Lorem ipsum dolor sit amet consectetur. 
                Nunc gravida consequat faucibus cursus nisi.
                Nunc montes molestie a vitae vulputate. 
                Phasellus in pulvinar et vitae. Mi eget lectus nec et. 
                Libero iaculis diam nam mauris a eget. 
                Quam nibh rhoncus rhoncus enim venenatis bibendum.`,

        href: "#",
    },
];

export const Features = () => {
    return (
        <section className="mt-16">
            <div className="grid gap-5 max-w-[70%] mb-16">
                <p className="text-blue-600 text-2xl font-semibold tracking-tighter">
                    Lorem ipsum dolor sit
                </p>

                <h3 className="uppercase text-balance heading-1 leading-tight text-[42px]">
                    lorem ipsum Dolor sit amet
                </h3>

                <p className="text-subheading-1">
                    Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui.
                    Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at
                    felis aliquet. Hendrerit tellus at purus lectus.
                </p>
            </div>

            {/* Feature cards data */}
            <div className=" flex flex-wrap items-center justify-center gap-14">
                {featuresData.map((feature, idx) => (
                    <FeatureCard key={idx} {...feature} />
                ))}
            </div>
        </section>
    );
};

function FeatureCard({
    title,
    desc,
    imageUrl,
    href,
}: {
    imageUrl: string;
    href: string;
    title: string;
    desc: string;
}) {
    return (
        <div className="overflow-hidden rounded-xl max-w-[445px] h-[460px] border border-neutral-200 flex flex-col items-start pb-5">
            <div className="relative w-full h-[40%]">
                <Image fill src={imageUrl} alt="feature image" className="object-cover" />
            </div>

            <div className="px-4 py-6 grid gap-4">
                <h4 className="font-subheading font-semibold text-xl text-foreground">{title}</h4>
                <p className="font-subheading leading-tight text-sm md:text-base line-clamp-4 md:line-clamp-none">
                    {desc}
                </p>
            </div>

            <Link
                className="block text-secondaryBtn mx-4 mt-auto underline font-semibold font-subheading"
                href={href}
            >
                Learn More
            </Link>
        </div>
    );
}
