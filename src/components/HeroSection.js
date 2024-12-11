'use client';
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-white to-[#3f6a4b]/10">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <div className="mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-[#3f6a4b]/10 text-[#3f6a4b] font-medium">
              Unlisted Shares for{' '}
              <span className="relative inline-flex items-center">
                <span className="relative z-10 font-bold px-3 py-1 
                               bg-red-500 text-white 
                               border border-dashed border-white
                               transform -skew-x-12">
                  SALE
                </span>
              </span>
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Invest like a <span className="text-5xl md:text-7xl text-[#3f6a4b]">VC</span> in
            the world of <span className="text-5xl md:text-7xl text-[#3f6a4b]">PE</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Marketplace for untapped unlisted space involving VC&apos;s angels,
            ESOPS, pre-IPO and whole startup ecosystem
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#3f6a4b] text-white px-8 py-4 rounded-lg 
                     shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open('https://wa.me/917411171144?text=I am interested in buying from unlistedbazaar')}
          >
            Start Investing
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
} 