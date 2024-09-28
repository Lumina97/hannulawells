"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Quote from "../quote/Quote";

type Props = {};

const Navbar = (props: Props) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [showQuote, setShowQuote] = useState(false);

  const handleGetQuoteClick = () => setShowQuote(true);
  const handleQuoteClose = () => setShowQuote(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY === 0) {
        setShowNavbar(false);
      } else if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  const handleMouseEnter = () => {
    if (window.scrollY !== 0) {
      setShowNavbar(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.scrollY !== 0) {
      setShowNavbar(false);
    }
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (event.clientY < 50 && window.scrollY !== 0) {
      setShowNavbar(true);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [lastScrollY]);

  return (
    <div>
      {/* Desktop Navbar */}
      <motion.nav
        className={`hidden font-raleway lg:flex z-50 fixed top-0 left-0 right-0 justify-between text-white p-4 transition-all duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${
          showNavbar
            ? "bg-black bg-opacity-60 backdrop-blur-[3px]"
            : "bg-transparent"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          href={"/"}
          className="group cursor-pointer flex items-center relative"
        >
          <div className="relative flex items-center">
            <Image
              src="/whitewnavbar.svg"
              alt="HannulaWells navigation bar white logo."
              width={75}
              height={65}
            />
            <Image
              src="/bluewnavbar.svg"
              alt="HannulaWells navigation bar blue logo."
              className="absolute top-0 left-0 transition-transform duration-500 transform scale-0 group-hover:scale-100"
              width={75}
              height={65}
            />
          </div>
          <Image
            src="/hannulawellsnavbar.svg"
            alt="HannulaWells navigation bar company name."
            className="transition transform group-hover:scale-[1.05] group-hover:drop-shadow-md ml-2 mt-[10px]"
            width={250}
            height={65}
          />
        </Link>
        <div className="flex w-7/12 justify-between items-center text-xl">
          {["services", "content", "about", "contact"].map((item) => (
            <div key={item} className="w-1/6 relative group text-center">
              <Link href={`/${item}`} className="relative inline-block">
                <span className="transition-transform duration-300 transform group-hover:scale-110 font-normal hover:font-bold block">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
              </Link>
            </div>
          ))}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <button
              onClick={handleGetQuoteClick}
              className={`
                                relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
                                border-white px-4 py-2 font-semibold text-white transition-all duration-500
                                before:absolute before:inset-0 before:-z-10 before:translate-x-[0%]
                                before:translate-y-[200%] before:scale-x-[1.1] before:scale-y-[3]
                                before:rounded-[100%] before:bg-white before:transition-transform before:duration-500
                                before:content-[""] shadow-md
                                hover:text-neutral-900 hover:font-semibold hover:before:bg-[rgba(157,196,255,0.8)]
                                hover:border-[rgba(157,196,255,0.8)] hover:shadow-[0_0_20px_rgba(157,196,255,0.8)]
                                hover:before:translate-x-[0%] hover:before:translate-y-[0%]
                            `}
            >
              <span>GET A QUOTE</span>
            </button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Get a Quote Component */}
      <AnimatePresence>
        {showQuote && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <Quote close={handleQuoteClose} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
