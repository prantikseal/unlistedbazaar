import Link from "next/link";
import React from "react";

const HowWeHelpSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-6xl md:text-8xl font-bold mb-10 font-mango">
        HOW WE <span className="text-yellow-500">HELP</span>?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-8 md:px-0">
        {[
          `Attract warm, hot, and "on fire" leads.`,
          "Build an algorithm-proof business.",
          "Turn your list into ready-to-buy customers.",
          "Boost your brand authority",
          "Growth Reporting",
          "Beehiiv boosts",
        ].map((text, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              id={`checkbox-${index}`}
              className="w-5 h-5 border-2 border-white mr-4 bg-black appearance-none checked:bg-yellow-500 checked:border-yellow-500 focus:ring-0 focus:outline-none"
            />
            <label
              htmlFor={`checkbox-${index}`}
              className="text-lg cursor-pointer"
            >
              {text}
            </label>
          </div>
        ))}
      </div>
      <Link
        href="https://calendly.com/thriveletter/15-minute-discovery-call"
        target="_blank"
        className="mt-10 text-xl py-4 px-8 bg-yellow-500 text-black font-bold rounded-full"
      >
        Book a call now
      </Link>
    </div>
  );
};

export default HowWeHelpSection;