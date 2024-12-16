import { motion } from "motion/react";

export default function PartnershipGrid() {
  const cards = new Array(8).fill(0);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="flex flex-col items-center p-8 font-poppins my-10">
      <h1 className="text-6xl font-bold text-black mb-8 pb-4">PARTNERSHIP</h1>
      <div className="border-2 border-black  grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-lg shadow-[8px_8px_0px_rgba(0,0,0,1)]">
        {cards.map((_, index) => (
          <motion.div
            key={index}
            className="rounded-lg p-4 flex flex-col items-center border-2 border-black justify-center shadow-[8px_8px_0px_rgba(0,0,0,1)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            variants={cardVariants}
          >
            <div className="flex flex-col items-center justify-center">
              <div className=" text-black rounded-full p-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V7.125a4.125 4.125 0 10-8.25 0V10.5m-3 0a2.25 2.25 0 012.25-2.25h9a2.25 2.25 0 012.25 2.25v6.75a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-6.75z"
                  />
                </svg>
              </div>
              <p className="text-black text-lg font-bold">COMING SOON</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
