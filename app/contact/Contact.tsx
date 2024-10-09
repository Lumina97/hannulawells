"use client";
import React, { useState, useRef, useEffect } from "react";
import { sendEmail } from "../../actions/sendEmails";
import SubmitBtn from "./submitButton";
import toast from "react-hot-toast";
import Image from "next/image";

type Props = {};

const Contact = (_props: Props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="relative flex min-h-screen items-center justify-center p-4 font-raleway text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/working.svg')" }}
      >
        <div className="absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      <div className="relative mx-auto my-20 flex w-full flex-col lg:flex-1 lg:flex-row lg:items-center lg:justify-between lg:p-4">
        <div className="relative mb-10 flex w-full flex-col p-[5%] lg:absolute lg:bottom-0 lg:left-0 lg:mb-0 lg:ml-[5%] lg:w-[45%] lg:p-4">
          <div className="flex w-[70%] transform gap-[1rem] overflow-hidden transition">
            <Image
              width={200}
              height={200}
              src="/Phone-us.svg"
              alt="Contact phone number"
              className="w-[25%] self-center pt-[3%]"
            />
            <h2 className="normal shadow-custom2 self-center whitespace-pre-wrap font-raleway text-4xl font-medium">{`Phone:\n(805) 305-8773`}</h2>
          </div>
          <div className="flex w-[70%] transform gap-[1rem] transition">
            <Image
              width={200}
              height={200}
              src="/email-us.svg"
              alt="Contact email address"
              className="w-[25%] pt-[3%]"
            />
            <h2 className="shadow-custom2 self-center whitespace-pre-wrap font-raleway text-4xl font-medium">{`Email\ninfo@hannulawells.com`}</h2>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center md:p-8 lg:justify-end lg:p-4">
          {!isSubmitted && (
            <>
              <form
                ref={formRef}
                className="flex w-full flex-col items-center rounded-2xl bg-[#2A2C30] bg-opacity-80 p-6 text-black opacity-80 shadow-lg md:p-8 lg:w-[50%] lg:p-4"
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
                <h1 className="mb-6 text-center text-3xl font-bold text-white sm:text-4xl">
                  Send Us a Message
                </h1>
                <input
                  aria-label="Name"
                  className="mb-4 h-14 w-full rounded-lg px-4 text-xl lg:w-[90%]"
                  name="name"
                  type="text"
                  required
                  maxLength={500}
                  placeholder="Name"
                />
                <input
                  aria-label="Email"
                  className="mb-4 h-14 w-full rounded-lg px-4 text-xl lg:w-[90%]"
                  name="senderEmail"
                  type="email"
                  required
                  maxLength={500}
                  placeholder="Email"
                />
                <input
                  aria-label="Subject"
                  className="mb-4 h-14 w-full rounded-lg px-4 text-xl lg:w-[90%]"
                  name="subject"
                  type="text"
                  required
                  maxLength={500}
                  placeholder="Subject"
                />
                <textarea
                  aria-label="Message"
                  className="mb-4 h-52 w-full rounded-lg px-4 py-2 text-xl lg:w-[90%]"
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
            <div className="flex h-[596px] w-full flex-col items-center justify-center rounded-2xl bg-[#2A2C30] p-6 text-black opacity-60 shadow-lg backdrop-blur-md sm:h-[596px] md:h-[616px] md:p-8 lg:h-[584px] lg:w-[50%] lg:p-4">
              <h3 className="pb-6 text-center text-lg font-bold text-white">
                Thank you for sending us a message,
              </h3>
              <h3 className="pb-6 text-center text-lg font-bold text-white">
                {" "}
                we will get back to you shortly.
              </h3>
              <button
                onClick={() => setIsSubmitted(false)}
                className="group flex h-[3rem] w-[10rem] cursor-pointer items-center justify-center gap-2 rounded-[8px] border-[1px] border-[#747371] bg-[#969592] font-raleway text-lg font-normal text-white shadow-[5px_5px_5px_0_rgba(0,0,0,0.30)] transition-all hover:scale-110 hover:border-[#5F7697] hover:bg-[#7C99C4] focus:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65"
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
