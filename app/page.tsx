import { Header } from "@/components/layout/header";
import { Logo } from "@/components/logo";
import { NavBar } from "@/components/nav";
import { HeroSection } from "@/components/section/hero-section";
import { ShowcaseOne } from "@/components/section/showcase-one";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="max-w-screen-xl mx-auto px-5 h-full ">
            <Header />
            <HeroSection />
            <ShowcaseOne />
            ss{" "}
        </div>
    );
}
