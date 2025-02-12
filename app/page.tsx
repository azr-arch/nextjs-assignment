import { Header } from "@/components/layout/header";
import { Logo } from "@/components/logo";
import { NavBar } from "@/components/nav";
import { Banner } from "@/components/section/banner";
import { BannerOne } from "@/components/section/banner-1";
import { BannerTwo } from "@/components/section/banner-2";
import { BrandMarquee } from "@/components/section/brand-marquee";
import { CarouselSection } from "@/components/section/carousel-section";
import { ContactForm } from "@/components/section/contact-form";
import { Features } from "@/components/section/features";
import { GallerySection } from "@/components/section/gallery";
import { HeroSection } from "@/components/section/hero-section";
import { MobileAppBanner } from "@/components/section/mobile-app-banner";
import { ShowcaseOne } from "@/components/section/showcase-one";
import { ShowcaseTwo } from "@/components/section/showcase-two";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <main className="h-full ">
            <SectionWrapper>
                <Header />
                <HeroSection />
                <ShowcaseOne />
                <ShowcaseTwo />
            </SectionWrapper>

            <BannerOne />

            <SectionWrapper>
                <BrandMarquee />
                <Features />
            </SectionWrapper>

            <BannerTwo />

            <SectionWrapper>
                <ContactForm />
            </SectionWrapper>

            <MobileAppBanner />
            <GallerySection />
            <CarouselSection />
        </main>
    );
}
