import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import HeaderNavbar from "./layout/HeaderNavBar";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTop from "../lib/scrollToTop";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HannulaWells",
  description:
    "HannulaWells is a cyber security services provider, servicing enterprise level environments to SMBs. We provide tailored services to simplify security infrastructure and increase security and resiliency in the most cost-effective ways possible. Our customers are our focus and we strive to understand the people behind every challenge we face. We are a close-knit organization with highly-specialized partners and we love what we do.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-black">
        <ScrollToTop />
        <HeaderNavbar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <hr className="flex-1 mt-12 h-px bg-[#2D2D2D] border-t-0" />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
