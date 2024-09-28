import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

interface ServiceItemProps {
  index: number;
  section: string;
  service: {
    img: string;
    title: string;
    description: string;
  };
  expanded: boolean;
  onClick: (section: string, index: number, serviceRedirect?: string) => void;
}

const ExpandableServiceItem: React.FC<ServiceItemProps> = ({
  index,
  section,
  service,
  expanded,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMoreInfo, setShowMobileMoreInfo] = useState(false);

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

  return (
    <motion.li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setShowMobileMoreInfo(false);
        setIsHovered(false);
      }}
      className="aspect-square service-gradient-bg hover:bg-[#232A34] hover:shadow-[0_0_30px_0_rgba(157,196,255,0.30)] cursor-pointer font-raleway"
      style={
        expanded
          ? {
              aspectRatio: 1,
              position: "absolute",
              width: "100%",
              height: "200px",
              display: "flex",
              flexDirection: "row",
              borderColor: "rgba(45,45,45,1)",
              zIndex: 10,
              borderRadius: "1rem",
              borderWidth: "1px",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              boxShadow: "0px 0px 30px 0px rgba(157,196,255,0.30)",
            }
          : {
              aspectRatio: 1,
              borderRadius: "1rem",
              borderWidth: "1px",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              padding: "1rem",
              maxHeight: "200px",
              height: "100%",
              width: "100%",
              minHeight: isMobile ? "9rem" : "200px",
              minWidth: isMobile ? "9rem" : "200px",
              borderColor: "rgba(45,45,45,1)",
              backgroundColor: isHovered ? "#232A34" : "service-gradient-bg",
              boxShadow: isHovered
                ? "0px 0px 30px 0px rgba(157,196,255,0.30)"
                : "none",
            }
      }
      onClick={() => {
        console.log(`#${section}`);
        if (!isMobile) onClick(section, index);
        else {
          setShowMobileMoreInfo(true);
        }
      }}
      initial={{ width: "100%" }}
      animate={{
        width: expanded ? "100%" : "200px",
      }}
      transition={{ duration: 0 }}
      layout
    >
      {/*mobile blurred background*/}
      {showMobileMoreInfo && (
        <div className="absolute text-white backdrop-blur rounded-2xl">
          <a
            onClick={() => {
              onClick(section, index, `#${section}`);
            }}
            className="flex gap-[0.5rem] justify-center items-center w-[200px] h-[200px]"
          >
            More Info
            <Image
              width={75}
              height={75}
              src={"RightArrow.svg"}
              className="w-[8%]"
              alt={"RightArrow"}
            />{" "}
          </a>
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <motion.img
          src={service.img}
          alt={service.title}
          style={{ height: "3rem", width: "3rem" }}
        />
        <motion.h2
          style={{
            fontSize: isMobile ? "1rem" : "1.3rem",
            lineHeight: "2rem",
            marginTop: ".5rem",
            marginBottom: ".5rem",
            background: "none",
            color: "white",
            width: isMobile ? "9rem" : "12rem",
          }}
        >
          {service.title}
        </motion.h2>
      </div>
      {expanded && !isMobile && (
        <motion.div
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "start",
            color: "white",
            padding: "1rem",
            width: "100%",
            position: "relative",
          }}
        >
          <hr
            style={{
              backgroundColor: "rgba(45,45,45,1)",
              width: "1px",
              height: "7rem",
              marginRight: "2rem",
              borderTop: "none",
            }}
          />
          <div className="flex ">
            <p className="line-clamp-3 text-[1.25rem] leading-9">
              {service.description}
            </p>
            <button>
              <a
                href="#"
                className="flex flex-row w-[10rem] ml-6 justify-center relative top-[50px] text-white hover:text-[rgba(35,42,52,1)] text-[1.5rem] py-1 px-2 rounded-[4px] bg-[rgba(35,42,52,1)] hover:bg-[rgba(157,196,255,1)]"
              >
                More Info
                <FaArrowRightLong className="ml-[5px] mt-2 p-1" />
              </a>
            </button>
          </div>
        </motion.div>
      )}
    </motion.li>
  );
};

export default ExpandableServiceItem;
