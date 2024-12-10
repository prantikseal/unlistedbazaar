"use client"
import EndCTASection from "@/components/EndCTASection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import HowWeHelpSection from "@/components/HowWeHelpSection";
import InfiniteCarousel from "@/components/InfiniteCarouselSection";
import InfoSection from "@/components/InfoSection";
import MetricSection from "@/components/MetricSection";
import NavBar from "@/components/NavBar";
import OfficialPartnerSection from "@/components/OfficialPartnerSection";
import PricingSection from "@/components/PricingSection";
import ProgressSection from "@/components/ProgressSection";
import TestimonialSection from "@/components/TestimonialSection";
import WhyNewsLetter from "@/components/WhyNewsLetter";
import { AnimatePresence } from "framer-motion";

export default function Home() {

  return (
    <AnimatePresence custom={
      {
        duration: 0.5,
        delay: 1,
        ease: [0.16, 1, 0.3, 1],
      }
    } mode="wait">
      <div className="">
        <NavBar />
        <HeroSection />
        <OfficialPartnerSection />
        <MetricSection />
        <InfoSection />
        <div className="mb-12">
          <ProgressSection />
        </div>
        <WhyNewsLetter />
        <HowWeHelpSection />
        <InfiniteCarousel />
        <TestimonialSection />
        <PricingSection />
        {/* <FAQSection /> */}
        <EndCTASection />
        <FooterSection />
      </div>
    </AnimatePresence>
  );
}
