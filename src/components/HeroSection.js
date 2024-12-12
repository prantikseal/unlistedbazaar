'use client';
import { motion } from "framer-motion";
import Image from 'next/image';

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
            <span className="inline-block px-4 py-2 rounded-full bg-[#04dd2a]/10 text-[#065f16] font-medium">
              <div className="flex items-center gap-2">
                Unlisted Sharesfor{' '}
                <motion.span
                  className="relative inline-flex items-center"
                  animate={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Image
                    src="/sale-img.png"
                    alt="Sale"
                    width={40}
                    height={24}
                    className="object-contain rotate-45 -translate-y-1"
                    priority
                  />
                </motion.span>
              </div>
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