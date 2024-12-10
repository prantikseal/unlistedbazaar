import { CurlyLine } from "@/utils/icons";
import useMediaQuery from "@/utils/utilityFunctions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EndCTASection = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="flex justify-center mb-20">
      <div className="relative container">
        <Image
          src={isMobile ? "/MobileCtaSection.png" : "/CTASection.png"}
          alt="CTA Section"
          width={1920}
          height={1080}
          className={`object-cover w-full h-full ${isMobile ? "px-8" : ""}`}
        ></Image>
        <div className="font-bold mb-4 text-4xl md:text-8xl absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white leading-tight">
          <h2 className="text-center font-mango uppercase min-w-60">
            Lets Make a{" "}
            <span className="relative inline-block text-yellow-500">
              Thriving Newsletter
              <div className="absolute -bottom-1 left-0">
                <CurlyLine
                  className={` ${
                    isMobile ? "w-[100%]" : "w-[170%]"
                  }  text-yellow-500`}
                />
              </div>
            </span>{" "}
            for You
          </h2>
          <Link
            href="https://calendly.com/thriveletter/15-minute-discovery-call"
            target="_blank"
            className="bg-yellow-500 text-[#292929] font-semibold text-xl xl:text-sm py-4 px-8 rounded-full hover:bg-yellow-600 transition duration-300"
          >
            Book a Call Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EndCTASection;
