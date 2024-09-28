"use client";
import React, { useState } from "react";

const About = () => {
  const [zoom, setZoom] = useState(false);

  const handleZoom = () => {
    setZoom(true);
  };

  return (
    <div className="relative font-raleway flex flex-col items-center justify-center min-h-screen text-white overflow-hidden">
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-[4000ms] ${
          zoom ? "scale-[3]" : ""
        }`}
        style={{ backgroundImage: "url('/mountains.png')" }}
      ></div>
      <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1
          className={`absolute text-4xl sm:text-7xl lg:text-9xl cursor-pointer transition duration-[4000ms] ${
            zoom ? "opacity-0 scale-[100]" : ""
          }`}
          onClick={handleZoom}
          style={{ whiteSpace: "nowrap" }}
        >
          Why pe
          <span
            className={`inline-block transition-transform duration-[4000ms] ${
              zoom ? "scale-[30]" : ""
            }`}
          >
            o
          </span>
          ple <span className="italic">first</span>?
        </h1>
        <div
          className={`absolute translate-y-28 ${
            zoom ? "opacity-0 scale-[100]" : ""
          }`}
        >
          Click
        </div>
        <div
          className={`flex flex-col gap-8 transition-all duration-[3000ms] px-4 md:px-[5rem] text-lg md:text-3xl mb-[20%] lg:mb-[15%] xl:mb-[10%] ${
            zoom
              ? "transform scale-100 opacity-100 mt-[40%] sm:mt-[20%] lg:mt-[15%] xl:mt-[10%]"
              : "transform scale-0 opacity-0"
          }`}
        >
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
