import { motion } from "motion/react";

export const Card: React.FC<{
  imgPath: string;
  headingOne: string;
  headingTwo: string;
  headingThree: string;
}> = ({ headingOne, headingThree, headingTwo, imgPath }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className={`flex 
    md:flex-row items-center bg-white/70 rounded-3xl border-[4px] border-black w-full md:min-w-[400px] md:max-w-[600px] h-auto shadow-[8px_8px_0px_rgba(0,0,0,1)] mb-2`}
    >
      <div className="w-[100px] h-[100px] md:w-1/5 md:h-auto ">
        <img
          src={imgPath}
          alt="Character"
          className="w-full h-auto object-cover rounded-3xl"
        />
      </div>

      <div className="p-2 font-poppins">
        <h2 className="text-lg font-bold uppercase underline">{headingOne}</h2>
        <h2 className="text-lg font-bold uppercase mt-2">{headingTwo}</h2>
        <h2 className="text-lg font-bold uppercase mt-2">{headingThree}</h2>
      </div>
    </motion.div>
  );
};
