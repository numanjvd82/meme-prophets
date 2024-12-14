import { motion } from "framer-motion";
import React, { useState } from "react";

export const TokenInfoCard: React.FC<{
  title: string;
  value: string;
  bgColor?: string;
  isCopyable?: boolean;
  truncate?: boolean;
}> = ({
  title,
  value,
  bgColor = "bg-yellow-400",
  isCopyable = false,
  truncate = false,
}) => {
  const [copied, setCopied] = useState(false);

  // Copy text to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const truncatedValue =
    truncate && value.length > 15
      ? `${value.slice(0, 7)}...${value.slice(-8)}`
      : value;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="flex flex-col items-center text-center font-poppins"
    >
      <h3 className="text-sm font-bold uppercase mb-2 text-black tracking-wider">
        {title}
      </h3>

      <motion.div
        className={`relative w-[300px] md:w-[350px] h-[100px] ${bgColor} flex justify-center items-center rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)]`}
      >
        <span className="text-2xl md:text-3xl font-bold text-black break-words">
          {truncatedValue}
        </span>

        {isCopyable && (
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded hover:bg-gray-800 transition"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        )}
      </motion.div>
    </motion.div>
  );
};
