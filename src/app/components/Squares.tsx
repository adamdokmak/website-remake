"use client";
import { motion } from "framer-motion";
import Logo from "@/app/svgcomponents/Logo";
import { useState } from "react";
import {pathVariantsY, shuffleLetter} from "@/app/utils";
import HeroContact from "@/app/components/HeroContact";
import HeroText from "@/app/components/HeroText";

export default function Squares() {
  const [isHovered, setIsHovered] = useState(false);

  const squareVariants = {
    hidden: {
      backgroundColor: "#FFFFFF",
    },
    visible: {
      backgroundColor: "#00249C",
      transition: {
        delay: 2.5,
        duration: 0.75,
      },
    },
  };

  const textVariants = {
    initial: {
      bottom: '-100%',
      fontSize: '11vw',
      width: 900,
    },
    loaded: {
      bottom: '3.5%',
      fontSize: '5vw',
      transition: {
        delay: 2,
        duration: 0.5,
      },
    },
  };

  const arrowVariants = {
    initial: {
      rotate: 0,
    },
    animate: {
      rotate: 180,
    },
  };

  return (
    <div
      className="fixed w-screen  min-h-screen grid grid-rows-3 grid-cols-5 gap-4 p-2"
      onMouseMove={() => shuffleLetter({ time: 10 })}
    >
      <div className="col-span-2 self-stretch rounded-[10px]"></div>
      <motion.div
        className="relative self-stretch rounded-[10px] overflow-hidden"
        variants={squareVariants}
        initial={"hidden"}
        animate={"visible"}
      >
        <Logo />
      </motion.div>
      <div className="relative col-span-2 self-stretch rounded-[10px]">
        <motion.div
          className="absolute -left-2 border-[#838181] border-[0.5px] h-full self-stretch"
          variants={pathVariantsY}
          initial={"initial"}
          animate={"animate"}
        ></motion.div>
      </div>

      <HeroText textVariants={textVariants} />
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
