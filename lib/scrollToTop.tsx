"use client"; // Enable client-side rendering

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0); // Instantly scroll to the top of the page
  }, [pathname]); // Dependency on pathname to trigger effect

  return null; // This component doesn't render anything
};

export default ScrollToTop;
