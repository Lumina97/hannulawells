"use client";
import React, { useState } from "react";
import Image from "next/image";

const About = () => {
  const [zoom, setZoom] = useState(false);
  const [showClickButton, setShowClickButton] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleZoom = (zoom: boolean) => {
    setZoom(zoom);
    if (!zoom) {
      const timer = setTimeout(() => {
        setShowClickButton(true);
      }, 4000);
      return () => clearTimeout(timer);
    } else setShowClickButton(!zoom);
  };
  console.log("zoom");
  console.log(zoom);
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden font-raleway text-white">
      <div
        className={`absolute inset-0 bg-cover bg-center ${
          zoom
            ? "transition-opacity transition-transform duration-[4000ms]"
            : "transition-opacity transition-transform duration-[1500ms]"
        } ${zoom ? "bg-color-black scale-[3]" : ""}`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, ${
            zoom ? 0.5 : 0
          }), rgba(0, 0, 0, ${zoom ? 0.5 : 0})), url('/mountains.png')`,
        }}
      ></div>
      <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black to-transparent"></div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h1
          className={`absolute cursor-pointer text-4xl sm:text-7xl lg:text-9xl ${
            zoom
              ? "transition duration-[4000ms]"
              : "transition duration-[1500ms]"
          } ${zoom ? "scale-[100] opacity-0" : ""}`}
          onClick={() => handleZoom(true)}
          style={{
            whiteSpace: "nowrap",
          }}
        >
          Why pe
          <span
            className={`inline-block ${
              zoom
                ? "transition duration-[4000ms]"
                : "transition duration-[1500ms]"
            } ${zoom ? "scale-[30]" : ""}`}
          >
            o
          </span>
          ple <span className="italic">first</span>?
        </h1>
        <div
          className={`absolute translate-y-28 cursor-pointer ${
            zoom || (!zoom && !showClickButton)
              ? "scale-[100] opacity-0"
              : "opacity-1"
          }`}
          onClick={() => handleZoom(true)}
        >
          Click
        </div>
        <div
          className={`mb-[20%] flex flex-col gap-8 px-4 text-lg md:px-[10rem] md:text-3xl lg:mb-[15%] xl:mb-[10%] ${
            zoom
              ? "transition-all duration-[3000ms]"
              : "transition-all duration-[1000ms]"
          } ${
            zoom
              ? "mt-[40%] scale-100 transform opacity-100 sm:mt-[20%] lg:mt-[15%] xl:mt-[10%]"
              : "scale-0 transform opacity-0"
          }`}
        >
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              color: isHovered ? "#9DC4FF" : "white",
            }}
            className="absolute left-[5rem] top-[-5rem] cursor-pointer text-6xl sm:top-[-5rem] md:top-[-5rem] lg:top-[0rem]"
            onClick={() => handleZoom(false)}
          >
            &#8249;
          </div>
          <p className="shadow-custom4">
            “People first” is the core of who we are, what we stand for, and how
            we believe we can bring the best service to the people. No matter
            who it is, people always come first. People are the lifeblood of our
            organizations, the reason for our successes, and the catalysts for a
            better future.
          </p>
          <p className="shadow-custom4">
            We believe that when you focus on the people first then there is no
            way not to focus on integrity, quality, honesty, communication,
            kindness, and hard work. The core of the focus on the people is the
            core of human.
          </p>
          <p className="shadow-custom4">
            With our focus on the people first, we have been given the
            opportunity to help our clients in the ways they want to be helped.
            As a staple of our business, we believe all clients deserve honest
            pricing and quality engineering. Not just engineers who know how to
            get the job but engineers who love to help people get the job done.
          </p>
          <p className="shadow-custom4">
            We are your dedicated cybersecurity team and understand that every
            security program starts with the people, your people.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
