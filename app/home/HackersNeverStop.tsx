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
      { threshold: 0.1 }
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
      className="font-raleway flex justify-center w-full h-auto my-[15%] relative"
    >
      <h1
        className={`absolute z-10 left-[27%] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3.5rem] 2xl:text-[4rem] text-white ${
          isVisible ? "fade-in" : ""
        }`}
      >
        Hackers. Never. Stop.
      </h1>
      <div
        className={`relative w-[80%] lg:w-[60%] h-auto rounded-t-5xl overflow-hidden ${
          isVisible ? "fade-in" : ""
        }`}
      >
        <video
          preload="none"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto"
        >
          <source src="choppingwood.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      <Image
        src="/hackerstats.svg"
        width={75}
        height={75}
        alt="hacker statistics by hannulawells"
        className={`absolute right-[0%] lg:right-[4.5%] top-[15%] md:top-[15%] sm:top-[15%] lg:top-[3%] w-[25%] ${
          isVisible ? "fade-from-right" : ""
        }`}
      />
    </section>
  );
};

export default HackersNeverStop;
