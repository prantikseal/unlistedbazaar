"use client";
import React from "react";
import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { BigCircleFooterIcon } from "@/utils/icons";

const FooterSection = () => {
  const bookACallRedirect = () => {
    window.open(
      "https://calendly.com/thriveletter/15-minute-discovery-call",
      "_blank"
    );
  };
  return (
    <footer className="bg-[#1E1E1E] filter  py-8 mb-22 px-4 h-screen relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 z-50">
          {/* Contact Section */}
          <div className="container mx-auto">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <Link href={`mailto:hello@thriveletter.studio`} className="mb-2">
              hello@thriveletter.studio
            </Link>
            {/* <p className="mb-4">+62821-5949-5854</p> */}
            <div className="flex space-x-4">
              {/* <Instagram size={20} /> */}
              <Link href="https://www.linkedin.com/company/thriveletter">
                <Linkedin size={20} className="hover:text-yellow-500 mt-4" />
              </Link>
            </div>
          </div>

          {/* Central Section */}
          <div className="text-center flex flex-col">
            <h2 className="font-bold font-mango text-3xl md:text-6xl leading-tight tracking-wide mb-4">
              GOT A NEWSLETTER? WANT TO COLLABORATE?
            </h2>
            <Link
              href="https://calendly.com/thriveletter/15-minute-discovery-call"
              target="_blank"
              className="bg-yellow-500  text-[#292929] font-semibold text-xl py-4 px-8 rounded-full hover:bg-yellow-600 transition duration-300 z-40"
            >
              Book a call now
            </Link>
          </div>

          {/* Address Section */}
          <div className="text-right">
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <p>30 North Gould St.,</p>
            <p>Shreridan, WY 82801, USA</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 py-8 border-t border-white flex flex-col md:flex-row justify-between items-center absolute left-0 bottom-0 w-full bg-[#151515] z-20">
          <div className="container mx-auto flex flex-col md:flex-row px-4 md:px-0 justify-between">
            <p className="text-sm mb-4 md:mb-0">
              &copy; Copyright 2024 ThriveLetter. All rights reserved.
            </p>
            {/* <div className="text-sm">
                        <span>Designed with by Shanks 🦈 & Developed by Prantik 🧑‍💻</span>
                    </div> */}
            <a href="#" className="text-sm hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
      <h3 className=" font-mango text-4xl md:text-9xl font-extrabold text-center text-[#414141] absolute md:bottom-12 sm:-bottom-16 w-screen left-1/2 transform -translate-x-1/2 z-10 uppercase overflow-hidden">
        Let&apos;s Work Together
      </h3>
      <div className="absolute bottom-60 md:bottom-0 w-[30%] left-1/2 transform -translate-x-1/2">
        <BigCircleFooterIcon className="w-[100%] h-auto" />
      </div>
    </footer>
  );
};

export default FooterSection;
