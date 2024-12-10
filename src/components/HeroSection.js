'use client';
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-white to-[#04dd2a]/10">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <div className="mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-[#04dd2a]/10 text-[#04dd2a] font-medium">
              Unlisted Space for <span className="font-bold">Sale</span>
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Invest in a <span className="text-5xl md:text-7xl text-[#04dd2a]">VC</span> in 
            the world of <span className="text-5xl md:text-7xl text-[#04dd2a]">PE</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Marketplace for untapped unlisted space involving VC&apos;s angels, 
            ESOPS and whole startup ecosystem
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#04dd2a] text-white px-8 py-4 rounded-lg 
                     shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Investing
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
} 