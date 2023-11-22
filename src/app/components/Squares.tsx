import { motion } from "framer-motion";
import Logo from "@/svgcomponents/Logo";
import { useState } from "react";
import { shuffleLetter } from "@/utils/useHoverEffect";
import HeroContact from "@/app/components/HeroContact";
import HeroText from "@/app/components/HeroText";
import {
  arrowVariants,
  heroTextVariants,
  pathVariantsY,
  squareVariants,
} from "@/utils/variants";

export default function Squares() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-screen min-h-screen grid grid-rows-3 grid-cols-5 gap-4 p-2"
      onMouseMove={() => shuffleLetter({ time: 10 })}
    >
      <div className="col-span-2 self-stretch rounded-[10px]"></div>
      <motion.div
        className="relative self-stretch rounded-[10px] overflow-hidden"
        variants={squareVariants}
        initial={"hidden"}
        animate={"visible"}
      >
        <div className="absolute  left-[10%] translate-x-[10%] top-[50%] translate-y-[-50%] transition-all">
          <Logo />
        </div>
      </motion.div>
      <div className="relative col-span-2 self-stretch rounded-[10px]">
        <motion.div
          className="absolute -left-2 border-[#838181] border-[0.5px] h-full self-stretch"
          variants={pathVariantsY}
          initial={"initial"}
          animate={"animate"}
        ></motion.div>
      </div>

      <HeroText textVariants={heroTextVariants} />
      <div className="relative self-stretch rounded-[10px]">
        <motion.div
          className="absolute -left-2 border-[#838181] border-[0.5px] h-full self-stretch"
          variants={pathVariantsY}
          initial={"initial"}
          animate={"animate"}
        ></motion.div>
      </div>
      <div className="self-stretch rounded-[10px]"></div>

      <div className="relative col-span-2 self-stretch rounded-[10px]">
        <motion.div
          className="absolute -right-2 border-[#838181] border-[0.5px] h-full self-stretch"
          variants={pathVariantsY}
          initial={"initial"}
          animate={"animate"}
        ></motion.div>
      </div>
      <div className="relative col-span-2 self-stretch rounded-[10px]">
        <motion.div
          className="absolute -right-2 border-[#838181] border-[0.5px] h-full self-stretch"
          variants={pathVariantsY}
          initial={"initial"}
          animate={"animate"}
        ></motion.div>
      </div>
      <HeroContact
        arrowVariants={arrowVariants}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
      />
    </div>
  );
}
