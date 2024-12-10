'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrendingStocks from "@/components/TrendingStocks";
import WhyChooseUs from "@/components/WhyChooseUs";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import BulkDealsSection from "@/components/BulkDealsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <BulkDealsSection />
      <TrendingStocks />
      <WhyChooseUs />
      <NewsSection />
      <ContactSection />
    </div>
  );
}
