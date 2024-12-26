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
import { useState } from "react";

export default function Home() {

  const [isPaid, setIsPaid] = useState(false); // This should be fetched from your backend/database

  // Early return if payment is not completed
  if (!isPaid) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Payment Required</h2>
          <p className="text-gray-600">
            Please complete your payment to access the website.
          </p>
          {/* You can add a payment button/link here */}
          <button
            className="mt-4 w-full bg-[#3f6a4b] text-white py-2 px-4 rounded hover:bg-[#3f6a4b]/90"
            onClick={() => window.location.href = 'upi://pay?pa=prantik0004-1@okaxis&pn=SenderName&tn=TestingGpay&am=5000&cu=INR'} // Replace with your payment page URL
          >
            Complete Payment
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar />
      <HeroSection />
      <BulkDealsSection />
      <TrendingStocks />
      <WhyChooseUs />
      <NewsSection />
      <ContactSection /> */}
    </div>
  );
}
