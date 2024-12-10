"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MetricSection = () => {
  const metrics = [
    { value: "5 Million+", label: "Newsletter Emails sent every month" },
    { value: "50%+", label: "Avg Open Rate" },
    { value: "4-5%", label: "Avg CTR" },
    { value: "75%", label: "Newsletters become Profitable in first 90 days" },
  ];

  return (
    <div className="my-10 container mx-auto pb-20 px-8">
      <div className="flex flex-col md:flex-row gap-8 md:gap-5 justify-center">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            className="flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <h3 className="text-white font-semibold font-mango text-6xl md:text-7xl">
              {metric.value}
            </h3>
            <p className="text-[#fc0] uppercase text-lg md:text-xl lg:text-2xl mt-2">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MetricSection;
