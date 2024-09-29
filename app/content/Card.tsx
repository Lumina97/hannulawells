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
    <div className=" relative card w-full sm:w-96 h-[28rem] rounded-3xl p-2 bg-white relative flex flex-col justify-end transition-transform duration-500 shadow-lg group hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]">
      {/* Background Overlay */}
      <div className="absolute top-0 left-0 w-full h-full rounded-3xl bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Image */}
      <Image
        width={1000}
        height={1000}
        quality={100}
        src={image}
        alt={title}
        className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl filter grayscale group-hover:filter-none transition-all duration-500"
      />

      {/* Card Content */}
      <div className="group cardContent relative z-10 text-white flex flex-col justify-between h-full">
        <div className="flex flex-col">
          {/* Title */}
          <h1 className=" pl-4 pt-4 origin-left pr-20 shadow-custom4 text-1xl sm:text-3xl font-semibold m-0 transition-all duration-500 line-clamp-3 whitespace-pre-line transform group-hover:scale-105">
            {title}
          </h1>

          {/* Info - Initially Hidden, Appears on Hover */}
          <div className="info flex flex-col justify-center items-center opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
            <p className=" pl-4 pt-4 text-left shadow-custom4 tracking-wide text-base mt-4">
              {description}
            </p>
          </div>
        </div>

        {/* Author - Fades out on Hover */}
        <div className="mt-auto flex justify-between w-full absolute bottom-[1rem]">
          <h2 className=" pl-4 text-lg sm:text-xl font-semibold text-shadow-normal shadow-[black] group-hover:opacity-0 transition-opacity duration-500">
            {author}
          </h2>
          <a
            href={link}
            target="_blank"
            className="relative bottom-[-1rem] group-hover:opacity-100 self-end group-hover:translate-y-0 opacity-0 flex flex-rows gap-2 transition-opacity duration-500 items-center self-end pt-2 px-4 outline-none border-none rounded  shadow-custom4 text-white font-bold cursor-pointer hover:text-[#9DC4FF]"
          >
            Read More &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
