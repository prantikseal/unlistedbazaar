"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState("Build");
  const keywords = ["Build", "Launch", "Grow"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWord((prev) => {
        const currentIndex = keywords.indexOf(prev);
        const nextIndex = (currentIndex + 1) % keywords.length;
        return keywords[nextIndex];
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col justify-center items-center h-auto px-5 pt-20 xl:pt-16">
        <motion.div className="text-center mb-12 lg:mb-16">
          <div className="flex flex-col items-center gap-6">
            <div className="premium-tag bg-[#FFF7DA] px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium text-[#1E1E1E]">
              <span role="img" aria-label="star" className="text-lg">
                ⭐
              </span>
              Premium End-to-End Newsletter Agency
            </div>
          </div>
        </motion.div>
        <motion.div className="text-center mb-12 lg:mb-10">
          <h2 className="text-6xl lg:text-9xl font-mango text-[#F5F5F5] uppercase font-extrabold leading-tight tracking-wide max-w-4xl mx-auto">
            <span className="relative inline-block">
              We{" "}
              <span className="relative inline-block w-[100px] h-[0.9em] md:w-[250px] md:h-[0.8em]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWord}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-yellow-500 absolute left-0 right-0"
                  >
                    {currentWord}
                  </motion.span>
                </AnimatePresence>
              </span>{" "}
              <br />
              profitable <span className="text-yellow-500">
                newsletters
              </span>{" "}
              for you
            </span>
          </h2>
        </motion.div>

        <p className="text-white text-center max-w-3xl text-xs md:text-xl font-medium">
          We are your dedicated Newsletter Team that builds High ROI{" "}
          <span className="text-yellow-500">newsletters</span> for you with less
          than 30 mins a week on your end
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
