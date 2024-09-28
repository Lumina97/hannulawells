"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  testingData,
  securityConsultingData,
  technologySolutionsData,
} from "../../lib/data";
import Image from "next/image";

const Services = () => {
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

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="scroll-smooth flex flex-col">
      <section
        id="services-hero"
        className="gap-8 lg:gap-12 flex flex-col p-4 bg-black min-h-screen items-center justify-center"
      >
        <div className="relative w-full hidden md:flex md:max-w-[60%] z-10">
          <div className="absolute top-[18.5rem] -left-40 w-[30rem] h-[30rem] bg-[rgba(157,196,255,1)] rounded-full mix-blend-multiply filter blur-[70px] opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-20 w-[30rem] h-[30rem] bg-[rgba(157,196,255,1)] rounded-full mix-blend-multiply filter blur-[70px] opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-16 left-20 w-[30rem] h-[30rem] bg-[rgba(157,196,255,1)] rounded-full mix-blend-multiply filter blur-[70px] opacity-20 animate-blob animation-delay-4000"></div>{" "}
        </div>
        <h1 className="text-white text-[3rem] leading-[2.75rem]  sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-8xl font-medium text-center">
          Professional Services
        </h1>
        <p className="text-[#E3E3E3] opacity-80 text-[1.5rem] leading-7 sm:text-xl md:text-2xl lg:text-3xl px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[20%] text-center">
          We provide a wide range of cyber security services tailored to meet
          your organizational needs.
        </p>
        <ul className="text-white flex flex-col flex-wrap items-center md:justify-center gap-6 md:flex-row md:gap-5">
          <li className="z-20">
            <a
              href="#services-testing"
              className="rounded-lg px-3 sm:px-4 py-2 text-xl sm:text-2xl lg:text-3xl bg-white bg-opacity-15 hover:text-black hover:bg-white hover:bg-opacity-80 transition duration-700"
            >
              Testing
            </a>
          </li>
          <li className="z-20">
            <a
              href="#security-consulting"
              className="rounded-lg px-3 sm:px-4 py-2 text-xl sm:text-2xl lg:text-3xl bg-white bg-opacity-15 hover:text-black hover:bg-white hover:bg-opacity-80 transition duration-700"
            >
              Security Consulting
            </a>
          </li>
          <li className="z-20">
            <a
              href="#technology-solutions"
              className="rounded-lg px-3 sm:px-4 py-2 text-xl sm:text-2xl lg:text-3xl bg-white bg-opacity-15 hover:text-black hover:bg-white hover:bg-opacity-80 transition duration-700"
            >
              Technology Solutions
            </a>
          </li>
        </ul>
      </section>
      <section id="services-testing" className="w-full" ref={sectionRef}>
        <div
          className="relative mx-auto text-white w-full"
          style={{
            backgroundImage: "url('/doorhandle.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
          <div className="relative z-10 mb-16 px-4">
            <h1 className="font-raleway text-5xl lg:text-7xl md:text-6xl font-[600] mb-8 sm:mb-16 lg:mb-16 md:pt-16 lg:ml-[3.5rem] text-center sm:text-start pt-8 xl:pt-20 xl:mb-20 sm:ml-[2.6rem]">
              Testing
            </h1>
            <ul className="flex flex-col items-center gap-4 sm:gap-8">
              {testingData.map((item, index) => (
                <li
                  id={`testing${index}`}
                  key={index}
                  className={`relative flex flex-col w-full sm:w-[90%] pb-6 sm:pb-12 gap-4 justify-center items-center rounded-2xl p-4 sm:p-8 services-background gradient-border ${
                    isVisible ? "fade-in" : ""
                  }`}
                >
                  <Image
                    width={75}
                    height={75}
                    src={item.img}
                    className="bg-none"
                    alt={item.title}
                  />
                  <h2 className="text-xl sm:text-2xl md:text-4xl md:mb-8 font-medium bg-none text-center">
                    {item.title}
                  </h2>
                  <p className="bg-none text-center sm:text-left md:text-[1.25rem] md:leading-[3rem]">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section id="security-consulting" className="w-full">
        <div
          className="relative mx-auto text-white w-full"
          style={{
            backgroundImage: "url('/carphone.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
          <div className="relative z-10 mb-16 px-4">
            <h1 className="font-raleway text-5xl lg:text-6xl font-[500] mb-12 sm:mb-16 lg:mb-20 lg:mr-[3.5rem] text-center sm:text-end pt-8 xl:pt-20 sm:mr-[2.6rem]">
              Security Consulting
            </h1>
            <ul className="flex flex-col items-center gap-4 sm:gap-8">
              {securityConsultingData.map((item, index) => (
                <li
                  id={`security${index}`}
                  key={index}
                  className={`relative flex flex-col w-full sm:w-4/5 pb-6 sm:pb-12 gap-4 justify-center items-center rounded-2xl p-4 sm:p-8 services-background-reversed gradient-border ${
                    isVisible ? "fade-in" : ""
                  }`}
                >
                  <Image
                    width={75}
                    height={75}
                    src={item.img}
                    className="bg-none"
                    alt={item.title}
                  />
                  <h2 className="text-xl sm:text-2xl md:text-4xl md:mb-8 font-medium bg-none text-center">
                    {item.title}
                  </h2>
                  <p className="bg-none text-center sm:text-left md:text-[1.25rem] md:leading-[3rem]">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section id="technology-solutions" className="w-full">
        <div
          className="relative mx-auto text-white w-full"
          style={{
            backgroundImage: "url('/drone.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
          <div className="relative z-10 mb-16 px-4">
            <h1 className="font-raleway text-5xl lg:text-6xl font-[500] mb-12 sm:mb-16 lg:mb-20 lg:ml-[3.5rem] text-center sm:text-start pt-8 xl:pt-12 sm:ml-[2.6rem]">
              Technology Solutions
            </h1>
            <ul className="flex flex-col items-center gap-4 sm:gap-8">
              {technologySolutionsData.map((item, index) => (
                <li
                  id={`technology${index}`}
                  key={index}
                  className={`relative flex flex-col w-full sm:w-4/5 pb-6 sm:pb-12 gap-4 justify-center items-center rounded-2xl p-4 sm:p-8 services-background gradient-border ${
                    isVisible ? "fade-in" : ""
                  }`}
                >
                  <Image
                    width={75}
                    height={75}
                    src={item.img}
                    className="bg-none"
                    alt={item.header}
                  />
                  <h2 className="text-xl sm:text-2xl md:text-4xl md:mb-8 font-medium bg-none text-center">
                    {item.header}
                  </h2>
                  <p className="bg-none text-center sm:text-left md:text-[1.25rem] md:leading-[3rem]">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <button
        onClick={scrollToTop}
        className="text-gray-400  rounded-full text-lg mt-12 mb-16 sm:text-xl md:text-2xl hover:text-white transition duration-700"
      >
        Back to Top ^
      </button>

      <style jsx>{`
        .gradient-border {
          position: relative;
          border-radius: 1rem;
          overflow: hidden;
        }

        .gradient-border::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 1rem;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(144, 144, 144, 1),
            rgba(255, 255, 255, 0) 10%,
            rgba(255, 255, 255, 0) 50%,
            rgba(255, 255, 255, 0) 90%,
            rgba(144, 144, 144, 1)
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          z-index: 0;
          pointer-events: none;
        }

        .gradient-border > * {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </section>
  );
};

export default Services;
