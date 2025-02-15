import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { BannerOne } from "@/components/section/banner-1";
import { BannerTwo } from "@/components/section/banner-2";
import { BrandMarquee } from "@/components/section/brand-marquee";
import { CarouselSection } from "@/components/section/carousel-section";
import { ContactForm } from "@/components/section/contact-form";
import { FaqSection } from "@/components/section/faq-section";
import { Features } from "@/components/section/features";
import { GallerySection } from "@/components/section/gallery";
import { HeroSection } from "@/components/section/hero-section";
import { MobileAppBanner } from "@/components/section/mobile-app-banner";
import { PreFooter } from "@/components/section/pre-footer";
import { SectionFour } from "@/components/section/section-four";
import { ShowcaseOne } from "@/components/section/showcase-one";
import { ShowcaseTwo } from "@/components/section/showcase-two";
import { SlideSection } from "@/components/section/slide-section";
import { TabsSection } from "@/components/section/tabs-section";
import { SectionWrapper } from "@/components/shared/section-wrapper";

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

            <TabsSection />

            <SectionFour />
            <SlideSection />
            <FaqSection />
            <PreFooter />
            <Footer />
        </main>
    );
}
