import { motion } from "framer-motion";

export default function Divider() {
  return (
    <div className="w-full overflow-hidden bg-black">
      <motion.div
        className="whitespace-nowrap text-2xl font-bold text-white tracking-widest py-2"
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        {Array(20)
          .fill("$PROPHET")
          .map((text, index) => (
            <span key={index} className="mx-4">
              {text}
            </span>
          ))}
      </motion.div>
    </div>
  );
}
