import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const WhyNewsLetter = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-6xl md:text-8xl font-mango font-bold px-8 text-center">
        Why <span className="text-yellow-500">Newsletter</span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pt-8"
        >
          <Image
            src="/whynewsletter.png"
            width={1020}
            height={1020}
            alt="why news letter"
            className="w-full h-full mt-8 "
          />
        </motion.div>
      </h2>
    </div>
  );
};

export default WhyNewsLetter;
