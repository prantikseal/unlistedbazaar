import React from "react";
import { motion } from "framer-motion";
import { StarIcon } from "@/utils/icons";

const InfiniteCarousel = () => {
  const items = ["CREATIVITY", "MANAGEMENT", "GROWTH", "MONETIZATION"];

  return (
    <div className="w-full bg-[#fcfcfc] overflow-hidden py-4 mb-32">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -100 + "%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="text-4xl md:text-8xl font-mango font-bold mx-4 text-black">{item}</span>
            <StarIcon className="w-8 h-8 mx-4 text-[#FFCC00]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteCarousel;
