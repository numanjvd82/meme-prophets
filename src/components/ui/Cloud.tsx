import { motion } from "framer-motion";

export const Cloud: React.FC<{
  text: string;
  direction?: "LEFT" | "MIDDLE" | "RIGHT";
}> = ({ text, direction = "LEFT" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className={`flex ${
        direction === "LEFT"
          ? "justify-start"
          : direction === "MIDDLE"
          ? "justify-center"
          : "justify-end"
      } items-center`}
    >
      <div className="relative inline-block">
        <img src="/img/cloud.svg" alt="" className="w-auto h-auto" />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl font-poppins">
          {text}
        </span>
      </div>
    </motion.div>
  );
};
