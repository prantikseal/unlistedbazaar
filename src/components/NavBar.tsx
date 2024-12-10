"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, Menu } from "lucide-react"; // Import icons from lucide-react
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const bookACallRedirect = () => {
    window.open(
      "https://calendly.com/thriveletter/15-minute-discovery-call",
      "_blank"
    );
  };

  return (
    <div className="flex justify-center">
      <nav className="bg-white mt-10 mx-4 lg:mx-16 rounded-full p-4 lg:p-5 shadow-lg relative container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="logo flex items-center gap-2">
              <div className="text-section leading-tight flex gap-1">
                <span className="text-base font-bold text-[#1E1E1E] block uppercase">
                  Thrive
                </span>
                <span className="text-base font-black text-yellow-500 block uppercase">
                  Letter
                </span>
              </div>
              {/* <Image
                            src="/icon.png"
                            alt="logo"
                            width={32}
                            height={32}
                            className="invert"
                        /> */}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6" /> // Close icon
              ) : (
                <Menu className="w-6 h-6" /> // Menu icon
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-16">
            <button
              // onClick={() => scrollToSection('home')}
              className="font-semibold text-[#1E1E1E] hover:text-black"
            >
              Home
            </button>
            <button
              // onClick={() => scrollToSection('pricing')}
              className="font-semibold text-[#1E1E1E] hover:text-black"
            >
              Pricing
            </button>
          </div>

          {/* Get Started Button */}
          <div className="hidden lg:block">
            <button
              onClick={bookACallRedirect}
              className="bg-yellow-500 text-base text-[#292929] font-semibold py-4 px-8 rounded-full hover:bg-yellow-600 transition duration-300"
            >
              Get started now
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden fixed inset-0 bg-white z-50 ${
            isOpen ? "block" : "hidden"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <div className="flex flex-col items-center justify-center h-full px-6 py-4 space-y-4">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-9 right-7 text-black"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              onClick={() => {
                //   scrollToSection("home");
                toggleMenu();
              }}
              className="font-semibold text-[#1E1E1E] hover:text-black"
            >
              Home
            </button>
            <button
              onClick={() => {
                //   scrollToSection("pricing");
                toggleMenu();
              }}
              className="font-semibold text-[#1E1E1E] hover:text-black"
            >
              Pricing
            </button>
            <button
              onClick={bookACallRedirect}
              className="bg-yellow-500 text-sm text-[#292929] font-semibold py-2 px-6 rounded-full w-full text-center hover:bg-yellow-600 transition duration-300"
            >
              Get started now
            </button>
          </div>
        </motion.div>
      </nav>
    </div>
  );
};

export default NavBar;
