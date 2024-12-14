import { motion } from "framer-motion";
import Divider from "./Divider";
import Header from "./Header";

export default function Hero() {
  return (
    <div id="hero" className="h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center">
        <motion.div
          className="w-[400px] flex flex-col justify-center items-center text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.6, staggerChildren: 0.5 },
            },
          }}
        >
          <motion.h1
            className="text-2xl mb-4 md:text-3xl font-bold font-fredoka leading-tight"
            whileHover={{ scale: 1.1, rotate: 3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Meme Prophets
          </motion.h1>

          <motion.h1
            className="text-6xl mb-4 md:text-7xl font-light font-fredoka leading-tight"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
          >
            $PROPHETS
          </motion.h1>

          <motion.p
            className="leading-relaxed font-poppins text-center text-sm"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            Meme Prophets aims to revolutionize the meme coin ecosystem by
            creating a decentralized, community-driven platform that merges
            humor, creativity, and blockchain technology. Built on the Solana
            blockchain, Meme Prophets seeks to redefine how meme culture
            interacts with Web3 technologies, fostering inclusivity and
            innovation in the crypto space.
          </motion.p>
        </motion.div>
      </div>
      <Divider />
    </div>
  );
}
