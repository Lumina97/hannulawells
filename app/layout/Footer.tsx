import Image from "next/image";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="font-raleway p-8 mx-8 text-white flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center text-center md:text-left">
        <p>© 2024 by HannulaWells</p>
        <p>info@hannulawells.com</p>
        <p>+1 (805) 305-8773</p>
      </div>
      <div className="flex flex-row gap-4 mt-4 md:mt-0">
        <a
          href="https://www.linkedin.com/company/hannulawells/"
          target="_blank"
        >
          <Image src="/linkedin.png" alt="LinkedIn" width={35} height={35} />
        </a>
        <a href="https://www.instagram.com/hannulawells/" target="_blank">
          <Image src="/instagram.png" alt="Instagram" width={35} height={35} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
