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
  console.log(isHovered);

  return (
    <motion.li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setShowMobileMoreInfo(false);
        setIsHovered(false);
      }}
      className="service-gradient-bg aspect-square cursor-pointer font-raleway hover:bg-[#232A34] hover:shadow-[0_0_30px_0_rgba(157,196,255,0.30)]"
      style={
        expanded
          ? {
              aspectRatio: 1,
              position: "absolute",
              width: "96%",
              height: "200px",
              display: "flex",
              flexDirection: "row",
              borderColor: "rgba(45,45,45,1)",
              background: "#13171C",
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
              maxHeight: `${isMobile ? "150px" : "200px"}`,
              height: "100%",
              width: `${isMobile ? "150px" : "100%"}`,
              borderColor: "rgba(45,45,45,1)",
              backgroundColor: isHovered ? "#232A34" : "service-gradient-bg",
              boxShadow: isHovered
                ? "0px 0px 30px 0px rgba(157,196,255,0.30)"
                : "none",
            }
      }
      onClick={() => {
        if (!isMobile) {
          onClick(section, index);
          setIsHovered(false);
        } else {
          setShowMobileMoreInfo(true);
        }
      }}
      initial={{ width: "100%" }}
      animate={{
        width: expanded ? "99%" : `${isMobile ? "150px" : "200px"}`,
      }}
      transition={{ duration: 0 }}
      layout
    >
      {/*mobile blurred background*/}
      {showMobileMoreInfo && (
        <div className="absolute rounded-2xl text-white backdrop-blur">
          <a
            onClick={() => {
              onClick(section, index, `#${section}`);
            }}
            className="flex h-[200px] w-[200px] items-center justify-center gap-[0.5rem]"
          >
            More Info
            <Image
              width={75}
              height={75}
              src={"RightArrow.svg"}
              className="w-[8%]"
              alt={"RightArrow"}
            />
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
          style={{
            height: isMobile ? "2rem" : "3rem",
            width: isMobile ? "2rem" : "3rem",
          }}
        />
        <motion.h2
          className="px-[1rem]"
          style={{
            fontSize: isMobile ? "1rem" : "1.3rem",
            lineHeight: "2rem",
            marginTop: isMobile ? "0rem" : ".5rem",
            marginBottom: isMobile ? "0rem" : ".5rem",
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
          <div className="flex">
            <p className="line-clamp-3 text-[1.25rem] leading-12">
              {service.description}
            </p>
            <button className="self-end">
              <a
                onClick={() => {
                  window.location.href = `/services#${section}`;
                }}
                className="relative ml-6 flex w-[10rem] flex-row justify-center rounded-[4px] bg-[rgba(35,42,52,1)] px-2 py-1 text-[1.5rem] text-white hover:bg-[rgba(157,196,255,1)] hover:text-[rgba(35,42,52,1)]"
              >
                More Info
                <FaArrowRightLong className="ml-[5px] mt-2 p-1" />
              </a>
            </button>
          </div>
          <a className="absolute right-[3rem] top-[1rem] text-2xl hover:text-[rgba(157,196,255,1)]">
            &#10005;
          </a>
        </motion.div>
      )}
    </motion.li>
  );
};

export default ExpandableServiceItem;
