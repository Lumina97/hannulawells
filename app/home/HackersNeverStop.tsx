"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const HackersNeverStop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLOptionElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      className="relative my-[15%] flex h-auto w-full justify-center font-raleway"
    >
      <h1
        className={`absolute left-[27%] z-10 text-white sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3.5rem] 2xl:text-[4rem] ${
          isVisible ? "fade-in" : ""
        }`}
      >
        Hackers. Never. Stop.
      </h1>
      <div
        className={`relative h-auto w-[80%] overflow-hidden rounded-t-3xl lg:w-[60%] lg:rounded-t-5xl ${
          isVisible ? "fade-in" : ""
        }`}
      >
        <video
          preload="none"
          autoPlay
          muted
          loop
          playsInline
          className="h-auto w-full"
        >
          <source src="choppingwood.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      <Image
        src="/grp.png"
        width={5000}
        height={5000}
        quality={100}
        alt="hacker statistics by hannulawells"
        className={`absolute right-[0%] top-[15%] w-[25%] sm:top-[15%] sm:w-[32%] md:top-[4%] lg:right-[4.5%] lg:top-[3%] ${
          isVisible ? "fade-from-right" : ""
        }`}
      />
    </section>
  );
};

export default HackersNeverStop;
