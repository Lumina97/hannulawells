"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Quote from "../quote/Quote";
import { usePathname } from "next/navigation";
import FloatingNavbar from "./FloatingNavBar";

type Props = {};

const Navbar = (props: Props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showQuote, setShowQuote] = useState(false);

  const handleGetQuoteClick = () => setShowQuote(true);
  const handleQuoteClose = () => setShowQuote(false);

  const opacity = Math.min(scrollPosition / 200, 0.8);
  const blur = Math.min((scrollPosition / 200) * 3, 3);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      setScrollPosition(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, []);
  const pathname = usePathname();
  return (
    <div>
      {/* Desktop Navbar */}
      <motion.nav
        className={`fixed left-0 right-0 top-0 z-50 hidden justify-between bg-opacity-60 p-4 font-raleway text-white lg:flex`}
        style={{
          backdropFilter: `blur(${blur}px)`,
          backgroundColor: `rgba(0,0,0,${opacity})`,
        }}
      >
        <Link
          href={"/"}
          className="group relative flex cursor-pointer items-center"
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
              className="absolute left-0 top-0 scale-0 transform transition-transform duration-500 group-hover:scale-100"
              width={75}
              height={65}
            />
          </div>
          <Image
            src="/hannulawellsnavbar.svg"
            alt="HannulaWells navigation bar company name."
            className="ml-2 mt-[10px] transform transition group-hover:scale-[1.05] group-hover:drop-shadow-md"
            width={250}
            height={65}
          />
        </Link>
        <div className="flex w-55 items-center justify-between text-xl">
          {["services", "content", "about", "contact"].map((item) => (
            <div key={item} className="group relative w-13p text-center">
              <Link href={`/${item}`} className="relative inline-block">
                <span
                  className={`block transform transition-transform duration-300 hover:font-bold group-hover:scale-110 ${
                    pathname === `/${item}`
                      ? "scale-110 font-bold"
                      : "scale-100 font-normal"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
              </Link>
            </div>
          ))}
          <motion.div
            className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <button
              onClick={handleGetQuoteClick}
              className={`relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] border-white px-4 py-2 font-semibold text-white shadow-md transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[0%] before:translate-y-[200%] before:scale-x-[1.1] before:scale-y-[3] before:rounded-[100%] before:bg-white before:transition-transform before:duration-500 before:content-[""] hover:border-[rgba(157,196,255,0.8)] hover:font-semibold hover:text-neutral-900 hover:shadow-[0_0_20px_rgba(157,196,255,0.8)] hover:before:translate-x-[0%] hover:before:translate-y-[0%] hover:before:bg-[rgba(157,196,255,0.8)]`}
            >
              <span>GET A QUOTE</span>
            </button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile and Tablet Navbar */}
      <div className="lg:hidden">
        <FloatingNavbar />
      </div>

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
