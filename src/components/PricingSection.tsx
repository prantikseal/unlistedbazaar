"use client";
import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);
  const bookACallRedirect = () => {
    window.open(
      "https://calendly.com/thriveletter/15-minute-discovery-call",
      "_blank"
    );
  };

  const plans = [
    {
      name: "LAUNCH",
      subheader:
        "Ideal for individuals who who need advanced features and tools for client work.",
      price: 1500,
      color: "bg-white hover:bg-[#FF9C12]",
      features: [
        "1 issue per week",
        "Strategy",
        "Designing",
        "Writing",
        "Full Newsletter Setup",
        "24x7 Dedicated Account manager",
        "Weekly and monthly reports",
        "Weekly Data analysis and optimization",
      ],
    },
    {
      name: "GROW",
      subheader:
        "Ideal for businesses who need personalized services and security for large teams. ",
      price: 3000,
      color: "bg-white hover:bg-[#FF9C12]",
      features: [
        // "IM ( Social)",
        "NL Partnerships",
        "LinkedIn/Social Media strategy to organically grow cross promotion",
        "PM",
        "Organic + paid growth Strategy",
        "1 Lead magnet per month",
        "End-to-End Ad creation and management",
        "Monetization strategy creation",
        "Sparkloop for growth Integration",
      ],
    },
    {
      name: "MONETISE",
      subheader:
        "Ideal for businesses who need personalized services and security for large teams. ",
      price: Infinity,
      color: "bg-white hover:bg-[#FF9C12]",
      features: [
        "Monetization strategy creation",
        "Boost management",
        "Sparkloop Integration",
        "Paid Newsletter",
        "Skool Community Creation",
        "Sponsorship Deck creation",
        "Ad slot filling",
      ],
    },
  ];

  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="text-white px-8">
      {/* <motion.h1
                className="text-4xl font-bold text-center mb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                POWERFUL FEATURES FOR
            </motion.h1>
            <motion.h2
                className="text-3xl font-serif italic text-center mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                powerful creators
            </motion.h2> */}

      <motion.h1
        className="text-6xl lg:text-7xl font-bold text-center mb-4 font-mango uppercase leading-tight tracking-wide mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Choose the <span className="text-yellow-500">right plan</span> for you
      </motion.h1>

      <div className="text-center mb-8">
        <p className="mb- text-xl font-dmSans pb-8">
          Choose a plan that&apos;s right for you
        </p>
        {/* <div className="flex items-center justify-center gap-4"> */}
          {/* <span>Pay Monthly</span> */}
          {/* <motion.label
            className="relative inline-flex items-center cursor-pointer"
            whileTap={{ scale: 0.95 }}
          >
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <motion.div
              className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 "
              animate={{ backgroundColor: isYearly ? "#3B82F6" : "#374151" }}
            ></motion.div>
          </motion.label> */}
          {/* <span>Pay Yearly</span> */}
        {/* </div> */}
        <motion.span
          className="text-yellow-400 text-sm pt-6 inline-block"
          animate={{ opacity: isYearly ? 1 : 0 }}
          initial={{ opacity: 0 }}
        >
          Save 25%
        </motion.span>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="flex flex-wrap justify-center gap-8 pb-24"
      >
        {plans.map((plan, planIndex) => (
          <motion.div
            key={plan.name}
            className={`${plan.color} text-gray-900 rounded-lg p-6 w-full md:w-96`}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className=" font-bold mb-4 font-mango text-6xl">
              {plan.name}
              <span className="text-lg font-mono ml-1">plan</span>
            </h3>
            <p className="text-sm">{plan.subheader}</p>
            <motion.p
              className="font-bold mb-4 font-mango text-6xl"
              key={isYearly ? "yearly" : "monthly"}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >

              <span className=" font-sans text-sm">{plan.price === Infinity ? "" : `starting from`}</span> <br />
              {isYearly ? (
                plan.price * 12 * 0.75 === Infinity ? (
                  "CUSTOM"
                ) : (
                  `$ ${plan.price * 12 * 0.75}`
                )
              ) : plan.price === Infinity ? (
                "CUSTOM"
              ) : (
                <>
                  {isNaN(plan.price) ? plan.price : `$ `}
                  {plan.price}
                </>
              )}
              <span className="text-xl font-normal font-playfairDisplay">
                {plan.price === Infinity
                  ? ""
                  : ` / ${isYearly ? "Year" : "Month"}`}
              </span>
            </motion.p>
            <motion.button
              className="bg-gray-900 text-white py-2 px-4 rounded-md w-full mb-6 hover:text-[#FF9C12]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={bookACallRedirect}
            >
              Get Started Now
            </motion.button>
            <ul className="space-y-2">
              {planIndex > 0 && (
                <motion.li
                  className="flex items-start font-bold"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span className="bg-[#FF9C12]">
                    Everything in {plans[planIndex - 1].name}
                  </span>
                </motion.li>
              )}
              {plan.features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PricingSection;
