import React from "react";
import Cards from "./Cards";

const Content = () => {
  return (
    <div className=" !scroll-smooth relative flex flex-col items-center justify-center min-h-screen text-white ">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/laptop.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
        <div
          className=" h-full z-100 bg-gradient-to-t from-black via-transparent"
          style={{
            background: "linear-gradient(to top, transparent 90%,  black 100%)",
          }}
        ></div>
      </div>
      <div className="relative z-10 w-full max-w-screen-xl p-4">
        <h1 className="font-raleway text-6xl lg:text-8xl mt-16 font-medium flex justify-center py-12 text-center">
          Good Reads
        </h1>
        <Cards />
      </div>
    </div>
  );
};

export default Content;
