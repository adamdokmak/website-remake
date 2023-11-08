import { motion } from "framer-motion";

export default function HeroText({ textVariants }: any) {
  return (
    <motion.div className="relative bg-white col-span-3 self-stretch rounded-[10px]">
      <motion.h1
        className="absolute bottom-2 left-3 text-[5vw] tracking-[-0.01em] leading-[0.9]"
        variants={textVariants}
        initial={"initial"}
        animate={"loaded"}
      >
        We create <br /> <span className="text-[#00249C]">award</span> winning
        sites
      </motion.h1>
    </motion.div>
  );
}
