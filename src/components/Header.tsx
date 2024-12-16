import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { useState } from "react";
import DexScreener from "../assets/dex-screener.svg";
import Telegram from "../assets/telegram.svg";
import Twitter from "../assets/twitter.svg";
import { Icon } from "./ui/Icon";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  const links = [
    { name: "Home", link: "#home" },
    { name: "Tokenomics", link: "#tokenomics" },
    { name: "Roadmap", link: "#roadmap" },
  ];

  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
    closed: {
      x: "100%",
      opacity: 0,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
  };

  const itemsContainerVariants = {
    open: {
      transition: {
        staggerChildren: 0.2, // Add stagger effect
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1, // Reverse stagger on close
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3 },
    },
  };

  return (
    <nav className="bg-white mt-4 mx-4 sm:mx-16 p-3 rounded-full border-2 border-black relative">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl uppercase font-fredoka ">$Prophets</div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex items-center gap-2 font-bold uppercase text-sm">
          {links.map(({ link, name }, i) => (
            <li
              onClick={() =>
                lenis?.scrollTo(link, {
                  lerp: 0.3,
                })
              }
              key={i}
              className="py-1 px-2 rounded-full transition-all hover:bg-primary hover:scale-105 hover:-translate-y-1"
            >
              <a href={link}>{name}</a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden sm:flex gap-2">
          <Icon icon={Telegram} link="#" />
          <Icon icon={Twitter} link="#" />
          <Icon icon={DexScreener} link="#" />
        </div>

        {/* Burger Menu Button */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-1 bg-black mb-1"></div>
          <div className="w-6 h-1 bg-black mb-1"></div>
          <div className="w-6 h-1 bg-black"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-2 p-4 sm:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <motion.ul
          className="flex flex-col items-start gap-4 font-bold uppercase text-sm"
          variants={itemsContainerVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        >
          {links.map(({ link, name }, i) => (
            <motion.li
              key={i}
              className="py-1 px-2 transition-all rounded-full hover:bg-primary"
              variants={itemVariants}
            >
              <a href={link}>{name}</a>
            </motion.li>
          ))}
        </motion.ul>
        <motion.div
          className="flex justify-start gap-4 mt-4"
          variants={itemsContainerVariants}
        >
          <motion.div variants={itemVariants}>
            <Icon icon={Telegram} link="#" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Icon icon={Twitter} link="#" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Icon icon={DexScreener} link="#" />
          </motion.div>
        </motion.div>
      </motion.div>
    </nav>
  );
}
