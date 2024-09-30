import React from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

type CardProps = {
  image: string;
  title: string;
  description: string;
  author: string;
  link: string;
};

const Card = ({ image, title, description, author, link }: CardProps) => {
  return (
    <div className="card group relative flex h-[28rem] w-full flex-col justify-end rounded-3xl bg-white p-2 shadow-lg transition-transform duration-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] sm:w-96">
      {/* Background Overlay */}
      <div className="absolute left-0 top-0 h-full w-full rounded-3xl bg-black bg-opacity-60 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

      {/* Image */}
      <Image
        width={1000}
        height={1000}
        quality={100}
        src={image}
        alt={title}
        className="absolute left-0 top-0 h-full w-full rounded-3xl object-cover grayscale filter transition-all duration-500 group-hover:filter-none"
      />

      {/* Card Content */}
      <div className="cardContent group relative z-10 flex h-full flex-col justify-between text-white">
        <div className="flex flex-col">
          {/* Title */}
          <h1 className="shadow-custom4 text-1xl m-0 line-clamp-3 origin-left transform whitespace-pre-line pl-4 pr-20 pt-4 font-semibold transition-all duration-500 group-hover:scale-105 sm:text-3xl">
            {title}
          </h1>

          {/* Info - Initially Hidden, Appears on Hover */}
          <div className="info flex translate-y-4 transform flex-col items-center justify-center opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
            <p className="shadow-custom4 mt-4 whitespace-pre-wrap pl-4 pt-4 text-left text-base tracking-wide">
              {description}
            </p>
          </div>
        </div>

        {/* Author - Fades out on Hover */}
        <div className="absolute bottom-[1rem] mt-auto flex w-full justify-between">
          <h2 className="pl-4 text-lg font-semibold shadow-[black] transition-opacity duration-500 text-shadow-normal group-hover:opacity-0 sm:text-xl md:text-2xl">
            {author}
          </h2>
          <a
            href={link}
            target="_blank"
            className="flex-rows shadow-custom4 relative bottom-[-1rem] flex cursor-pointer items-center gap-2 self-end rounded border-none px-4 pt-2 font-bold text-white opacity-0 outline-none transition-opacity duration-500 hover:text-[#9DC4FF] group-hover:translate-y-0 group-hover:opacity-100"
          >
            Read More &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
