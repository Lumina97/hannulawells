"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NavigationBar = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div>
      <HamburgerButton active={active} setActive={setActive} />
      <AnimatePresence>
        {active && <LinksOverlay setActive={setActive} />}
      </AnimatePresence>
    </div>
  );
};

export default NavigationBar;

interface LinksOverlayProps {
  setActive: (active: boolean) => void;
}

const LinksOverlay: React.FC<LinksOverlayProps> = ({ setActive }) => {
  return (
    <nav className="fixed right-4 top-4 z-40 h-[calc(100vh_-_32px)] w-[calc(100%_-_32px)] overflow-hidden">
      <LinksContainer setActive={setActive} />
    </nav>
  );
};

interface LinksContainerProps {
  setActive: (active: boolean) => void;
}

const LinksContainer: React.FC<LinksContainerProps> = ({ setActive }) => {
  const handleNavLinkClick = () => {
    setActive(false);
  };
  return (
    <motion.div className="font-raleway space-y-4 p-2 pt-14 flex flex-col items-center gap-5">
      {LINKS.map((l, idx) => {
        return (
          <NavLink
            key={l.title}
            href={l.href}
            idx={idx}
            onClick={handleNavLinkClick}
          >
            {l.title}
          </NavLink>
        );
      })}
    </motion.div>
  );
};

interface NavLinkProps {
  children: string;
  href: string;
  idx: number;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ children, href, idx, onClick }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <motion.a
      initial={{ opacity: 0, y: -8 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.75 + idx * 0.125,
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      exit={{ opacity: 0, y: -8 }}
      href={href}
      onClick={handleClick}
      className="block text-2xl font-normal text-white hover:underline md:text-3xl text-center"
    >
      {children}
    </motion.a>
  );
};

interface HamburgerButtonProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  active,
  setActive,
}) => {
  return (
    <>
      <motion.div
        initial={false}
        animate={active ? "open" : "closed"}
        variants={UNDERLAY_VARIANTS}
        style={{ top: 16, right: 16 }}
        className="fixed z-40 rounded-xl bg-gradient-to-br from-[rgba(35,42,52,0.8)] to-[rgba(3,3,3,0.8)] shadow-[2px_2px_30px_0px_rgba(0,0,0,0.25),_0px_0px_2px_2px_rgba(255,255,255,0.1)] backdrop-blur-[60px]"
      />

      <motion.button
        aria-label="Open navigation button"
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className={`group fixed right-4 top-4 z-50 h-20 w-20 bg-white/0 transition-all hover:bg-white/20 ${
          active ? "rounded-bl-xl rounded-tr-xl" : "rounded-xl"
        }`}
      >
        <motion.span
          variants={HAMBURGER_VARIANTS.top}
          className="absolute block h-1 w-10 bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.middle}
          className="absolute block h-1 w-10 bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.bottom}
          className="absolute block h-1 w-5 bg-white"
          style={{ x: "-50%", y: "50%" }}
        />
      </motion.button>
    </>
  );
};

const LINKS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Content",
    href: "/content",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
  {
    title: "GET A QUOTE",
    href: "/quote",
  },
];

const UNDERLAY_VARIANTS = {
  open: {
    width: "calc(100% - 32px)",
    height: "calc(100vh - 42px)",
    transition: { type: "spring", mass: 3, stiffness: 400, damping: 50 },
  },
  closed: {
    width: "80px",
    height: "80px",
    transition: {
      delay: 0.75,
      type: "spring",
      mass: 3,
      stiffness: 400,
      damping: 50,
    },
  },
};

const HAMBURGER_VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};
