import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { LineCircleIcon, LineIcon } from "@/utils/icons";

const InfoSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

    const bookACallRedirect = () => {
      window.open(
        "https://calendly.com/thriveletter/15-minute-discovery-call",
        "_blank"
      );
    };

  return (
    <div className="min-h-screen relative overflow-hidden" ref={ref}>
      <motion.div
        className="absolute top-1 left-1 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 px-8 md:px-0"
        initial={{ scale: 1.4 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/infoSection.png"
          objectFit="cover"
          quality={100}
          width={1020}
          height={1080}
          alt="info"
          className="mx-auto"
        />
      </motion.div>
      <div className="container mx-auto relative z-10 text-center px-8 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-8xl font-mango uppercase leading-tight tracking-wide font-bold max-w-2xl mx-auto"
        >
          Building a good newsletter is{" "}
          <span className="relative text-yellow-500">
            <div className="absolute -bottom-1 md:-bottom-4 -left-44 md:left-0 -right-0 md:-right-80">
              <LineIcon className="w-[30%] md:w-[40%] text-yellow-500 " />
            </div>
            hard.
          </span>
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-7xl font-playfairDisplay max-w-2xl mx-auto pt-12 font-bold"
          style={{ lineHeight: "1.5", wordSpacing: "0.1em" }}
        >
          building a great one is even{" "}
          <span className="relative">
            harder
            <div className="absolute -bottom-4 -left-8">
              <LineCircleIcon className="w-[120%] text-yellow-500" />
            </div>
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-md text-[#8D8D8D] pt-8 max-w-2xl mx-auto"
        >
          Most newsletters fail because due to lack of time, lack of expertise
          or both. We solve exactly that.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-yellow-500 text-[#292929] font-semibold text-xl py-4 px-8 rounded-full hover:bg-yellow-600 transition duration-300 z-40 mx-auto mt-8 mb-3"
          onClick={bookACallRedirect}
        >
          Get in Touch
        </motion.button>
        {/* <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-sm text-yellow-500"
        >
          We&apos;ll take care of the rest
        </motion.p> */}
      </div>
    </div>
  );
};

export default InfoSection;
