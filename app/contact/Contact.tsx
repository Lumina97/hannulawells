"use client";
import React, { useState, useRef, useEffect } from "react";
import { sendEmail } from "../../actions/sendEmails";
import SubmitBtn from "./submitButton";
import toast from "react-hot-toast";
import Image from "next/image";

type Props = {};

const Contact = (_props: Props) => {
  const [isSubmitted, setIsSubmitted] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="font-raleway relative flex items-center justify-center min-h-screen text-white p-4">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/working.svg')" }}
      >
        <div className="absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      <div className="relative flex flex-col lg:flex-row lg:flex-1 lg:items-center lg:justify-between w-full mx-auto lg:p-4 my-20">
        <div className="relative lg:absolute lg:bottom-0 lg:left-0 flex flex-col gap-4 p-[5%] lg:p-4 w-full lg:ml-[5%] mb-10 lg:mb-0 lg:w-[45%]">
          <Image
            width={75}
            height={75}
            src="/phoneus.svg"
            alt="Contact phone number"
            className="transition transform w-[70%]"
          />
          <Image
            width={75}
            height={75}
            src="/emailus.svg"
            alt="Contact email address"
            className="transition transform  w-[90%]"
          />
        </div>
        <div className="flex flex-1 justify-center lg:justify-end items-center md:p-8 lg:p-4">
          {!isSubmitted && (
            <>
              <form
                ref={formRef}
                className="w-full flex flex-col items-center text-black bg-[#2A2C30] bg-opacity-80 p-6 md:p-8 lg:p-4 lg:w-[50%] rounded-2xl shadow-lg opacity-60"
                action={async (formData) => {
                  const { data, error } = await sendEmail(formData);

                  if (error) {
                    toast.error(error);
                    return;
                  }

                  toast.success("Email sent successfully!");
                  setIsSubmitted(true);

                  // Reset the form fields
                  formRef.current?.reset();
                }}
              >
                <h1 className="text-white font-bold text-3xl sm:text-4xl mb-6 text-center">
                  Send Us a Message
                </h1>
                <input
                  aria-label="Name"
                  className="h-14 px-4 rounded-lg mb-4 w-full lg:w-[90%] text-xl"
                  name="name"
                  type="text"
                  required
                  maxLength={500}
                  placeholder="Name"
                />
                <input
                  aria-label="Email"
                  className="h-14 px-4 rounded-lg mb-4 w-full lg:w-[90%] text-xl"
                  name="senderEmail"
                  type="email"
                  required
                  maxLength={500}
                  placeholder="Email"
                />
                <input
                  aria-label="Subject"
                  className="h-14 px-4 rounded-lg mb-4 w-full lg:w-[90%] text-xl"
                  name="subject"
                  type="text"
                  required
                  maxLength={500}
                  placeholder="Subject"
                />
                <textarea
                  aria-label="Message"
                  className="h-52 px-4 py-2 rounded-lg mb-4 w-full lg:w-[90%] text-xl"
                  name="message"
                  placeholder="Your message"
                  required
                  maxLength={5000}
                />
                <SubmitBtn isSubmitted={isSubmitted} />
              </form>
            </>
          )}
          {isSubmitted && (
            <div className="w-full h-[596px] lg:h-[584px] md:h-[616px] sm:h-[596px] flex flex-col justify-center items-center text-black bg-[#2A2C30] backdrop-blur-md  p-6 md:p-8 lg:p-4 lg:w-[50%] rounded-2xl shadow-lg opacity-60">
              <h3 className=" text-center  text-lg font-bold text-white pb-6">
                Thank you for sending us a message,
              </h3>
              <h3 className=" text-center text-lg  font-bold  text-white pb-6">
                {" "}
                we will get back to you shortly.
              </h3>
              <button
                onClick={() => setIsSubmitted(false)}
                className="cursor-pointer font-normal text-lg font-raleway group flex items-center justify-center gap-2 h-[3rem] w-[10rem] bg-[#969592] hover:bg-[#7C99C4] text-white border-[1px] border-[#747371] rounded-[8px] shadow-[5px_5px_5px_0_rgba(0,0,0,0.30)] transition-all focus:scale-110 hover:scale-110 hover:border-[#5F7697] active:scale-105 disabled:scale-100 disabled:bg-opacity-65"
              >
                New Message
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
