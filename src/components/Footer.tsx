import { motion } from "motion/react";
import DexScreener from "../assets/dex-screener.svg";
import Telegram from "../assets/telegram.svg";
import Twitter from "../assets/twitter.svg";
import { Icon } from "./Icon";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative bg-transparent text-white text-center py-8"
    >
      {/* Glass-Like Background Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md border-t border-white/20"></div>

      {/* Footer Content */}
      <div className="relative z-10">
        <div className="mb-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-2xl font-bold mb-4"
          >
            Join the Revolution of Meme Culture with $PROPHETS!
          </motion.h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-primary text-black font-semibold py-2 px-4 rounded hover:brightness-110 transition"
          >
            Get Started
          </motion.button>
        </div>

        {/* Links and Icons */}
        <div className="flex flex-col md:flex-row justify-center items-center mb-6">
          <nav className="flex space-x-6 mb-4 md:mb-0">
            {["Home", "Tokenomics", "Roadmap", "Community"].map(
              (link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="hover:text-primary transition"
                >
                  {link}
                </motion.a>
              )
            )}
          </nav>

          <div className="flex space-x-6 ml-0 md:ml-12">
            {[Telegram, Twitter, DexScreener].map((icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon icon={icon} link="#" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="pt-4"
        >
          <p className="text-sm">
            © 2024{" "}
            <motion.span
              className="text-primary"
              initial={{ rotate: -10, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.6, duration: 1, type: "spring" }}
            >
              $PROPHETS
            </motion.span>
            . All Rights Reserved. Created by{" "}
            <motion.a
              target="_blank"
              className="hover:text-primary transition text-lg"
              href="https://github.com/numanjvd82"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              numanjvd82
            </motion.a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
