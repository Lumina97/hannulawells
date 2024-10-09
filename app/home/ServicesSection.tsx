"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ExpandableServiceItem from "./ExpandableServiceItems";
import {
  testingData,
  securityConsultingData,
  technologySolutionsData,
} from "../../lib/data";
import { debug } from "console";

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLOptionElement>(null);
  const [expandedItem, setExpandedItem] = useState<{
    section: string;
    index: number;
  } | null>(null);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
    };

    // Initial check
    handleResize();

    // Add event listener to handle window resizing
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleExpand = (
    section: string,
    index: number,
    serviceRedirect?: string,
  ) => {
    if (isMobile) {
      window.location.href = `/services${serviceRedirect}`;
    } else if (
      expandedItem?.section === section &&
      expandedItem?.index === index
    ) {
      setExpandedItem(null);
    } else {
      setExpandedItem({ section, index });
    }
  };

  return (
    <section id="our-services" className="flex flex-col" ref={sectionRef}>
      <div className="mb-12 flex flex-col items-center gap-8">
        <h1 className="mb-4 mt-12 text-5xl font-normal text-white sm:text-6xl md:text-6xl lg:text-6xl">
          Our Services
        </h1>
        <p className="px-4 text-center text-2xl text-[#8D8D8D] lg:px-0">
          We provide a wide range of services to keep you safe.
        </p>
      </div>
      <div className={`mx-[5%] ${isVisible ? "fade-in" : ""}`}>
        <div className="mx-24 flex flex-row items-center justify-center gap-4">
          <hr
            className="my-12 hidden h-px flex-1 border-t-0 bg-[#1B1B1B] sm:block"
            style={{
              boxShadow: "1px 7px 13px 0px #394454",
            }}
          />
          <span className="text-center text-3xl text-white">Testing</span>
          <hr
            className="my-12 hidden h-px flex-1 border-t-0 bg-[#1B1B1B] sm:block"
            style={{
              boxShadow: "1px 7px 13px 0px #394454",
            }}
          />
        </div>
        <ul className="relative mx-auto my-12 grid grid-cols-1 justify-items-center gap-[22px] sm:w-[570px] sm:grid-cols-2 md:w-[570px] lg:w-[900px] lg:grid-cols-4">
          {testingData.map((service, index) => (
            <ExpandableServiceItem
              key={index}
              index={index}
              section="services-testing"
              service={service}
              expanded={
                expandedItem?.section === "services-testing" &&
                expandedItem?.index === index
              }
              onClick={handleExpand}
            />
          ))}
        </ul>
        <div className="mx-24 flex flex-row items-center justify-center gap-4">
          <hr
            className="my-12 hidden h-px flex-1 border-t-0 bg-[#1B1B1B] sm:block"
            style={{
              boxShadow: "1px 7px 13px 0px #394454",
            }}
          />
          <span className="text-center text-3xl text-white">
            Security Counseling
          </span>
          <hr
            className="my-12 hidden h-px flex-1 border-t-0 bg-[#1B1B1B] sm:block"
            style={{
              boxShadow: "1px 7px 13px 0px #394454",
            }}
          />
        </div>
        <ul className="relative mx-auto my-12 grid grid-cols-1 justify-items-center gap-[22px] sm:w-[570px] sm:grid-cols-2 md:w-[570px] lg:w-[900px] lg:grid-cols-4">
          {securityConsultingData.map((service, index) => (
            <ExpandableServiceItem
              key={index}
              index={index}
              section="security-consulting"
              service={service}
              expanded={
                expandedItem?.section === "security-consulting" &&
                expandedItem?.index === index
              }
              onClick={handleExpand}
            />
          ))}
        </ul>
        <div className="mx-24 flex flex-row items-center justify-center gap-4">
          <hr
            className="my-12 hidden h-px flex-1 border-t-0 bg-[#1B1B1B] sm:block"
            style={{
              boxShadow: "1px 7px 13px 0px #394454",
            }}
          />{" "}
          <span className="text-center text-3xl text-white">
            Technology Solutions
          </span>
          <hr
            className="my-12 hidden h-px flex-1 border-t-0 bg-[#1B1B1B] sm:block"
            style={{
              boxShadow: "1px 7px 13px 0px #394454",
            }}
          />{" "}
        </div>
        <ul className="relative mx-auto my-12 grid grid-cols-1 justify-items-center gap-[22px] sm:w-[570px] sm:grid-cols-2 md:w-[570px] lg:w-[900px] lg:grid-cols-4">
          {technologySolutionsData.map((service, index) => (
            <ExpandableServiceItem
              key={index}
              index={index}
              section="technology-solutions"
              service={service}
              expanded={
                expandedItem?.section === "technology-solutions" &&
                expandedItem?.index === index
              }
              onClick={handleExpand}
            />
          ))}
        </ul>
      </div>
      <button className="my-20">
        <Link
          href="/services"
          className="rounded-lg border-2 border-[rgb(45,45,45,1)] bg-transparent px-8 py-4 text-2xl text-[#B5B5B5] transition duration-700 hover:border-[#29323d] hover:bg-[#232A34] hover:text-white"
        >
          More Info
        </Link>
      </button>
    </section>
  );
};

export default ServicesSection;
