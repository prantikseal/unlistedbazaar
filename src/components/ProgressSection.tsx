"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import useMediaQuery from "@/utils/utilityFunctions";

const steps = [
  {
    number: 1,
    numberText: "one",
    title: "CONSULTATION & STRATEGY",
    description:
      "We start with a deep dive into your goals and audience. A brainstorming session where we map out a strategy that makes your newsletter shine.",
  },
  {
    number: 2,
    numberText: "two",
    title: "DESIGN & SETUP",
    description:
      "We setup your newsletter on your preferred platform and design it end-to-end",
  },
  {
    number: 3,
    numberText: "three",
    title: "WRITE 2 NEWSLETTER ISSUES",
    description:
      "We go back and forth to make sure the issue has everything you love!",
  },
  {
    number: 4,
    numberText: "four",
    title: "ANALYSIS & REPORTING",
    description:
      "We track every open, click, and conversion, providing you with clear, actionable insights. It’s like having a crystal ball to see what’s working and where to tweak.",
  },
];

const ProgressSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    restDelta: 1.0,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const offsetTop = rect.top + scrollPosition;
        const cardHeight = rect.height;

        if (
          offsetTop <= scrollPosition + windowHeight * 0.5 &&
          offsetTop + cardHeight > scrollPosition + windowHeight * 0.5
        ) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen" ref={containerRef}>
      <div className="container mx-auto flex flex-wrap md:flex-nowrap ">
        <div
          className={`${
            isMobile ? "w-full px-4" : "content w-1/2 pb-36 sticky"
          }`}
          style={{
            top: "20vh",
            height: "fit-content",
          }}
        >
          <h1 className="text-6xl font-bold mb-2 font-mango">THE PROCESS</h1>
          {/* <h2 className="text-5xl font-bold font-playfairDisplay mb-4">
            How we build a stunning newsletter for you
          </h2> */}
          <p className="text-[#8D8D8D] mb-8 max-w-xl">
            How we build a stunning newsletter for you
          </p>
        </div>

        <div className="relative ml-4  md:ml-16">
          {/* Timeline */}
          <div className="w-1 bg-gray-700 absolute left-0 top-0 bottom-0">
            <motion.div
              className="w-full bg-yellow-500 absolute top-0 left-0"
              style={{ height: lineHeight }}
            />
            <motion.div
              className="w-3 h-3 bg-yellow-500 rounded-full absolute"
              style={{ top: lineHeight }}
            />
          </div>

          {/* Steps */}
          <div className="mx-8 md:mx-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={` rounded-3xl max-w-96 p-6 mb-4 transition-all duration-300 h-[426px] relative ${
                  index === activeStep
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-800"
                }`}
                viewport={{ once: true, amount: 0.8 }}
                style={{
                  marginTop: index === 0 ? "0" : "20vh",
                  position: "sticky",
                  top: "20vh",
                  zIndex: steps.length + index,
                }}
              >
                <div
                  className={`text-xs mb-2 uppercase inline-block px-4 py-2 border ${
                    index === activeStep
                      ? "border-gray-800"
                      : "border-[#f5f5f5]"
                  } border-black rounded-3xl`}
                >
                  <span
                    className={`bg-black w-2 h-2 rounded-full inline-block mr-2
                  ${index === activeStep ? "bg-gray-800" : "bg-[#f5f5f5]"}
                  `}
                  ></span>
                  STEP {step.numberText}
                </div>
                <h4 className="text-[400px] absolute right-0 bottom-2/3 translate-y-1/2 font-bold mb-2 text-right font-playfairDisplayRegular opacity-[0.2]">
                  {step.number}
                </h4>
                <h3 className=" font-bold mb-2 font-mango leading-tight text-5xl pt-28">
                  {step.title}
                </h3>
                <p className="text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressSection;
