import { motion } from "framer-motion";
import { useState } from "react";
import { shuffleLetter } from "@/utils/useHoverEffect";
import { useMenuAnimation } from "@/utils/useMenuAnimation";
import { burgerVariants, burgerTextVariants, variants } from "@/utils/variants";
import { useRecoilState } from "recoil";
import { halfWayState } from "@/atoms/burgerAtom";

export default function Burger() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const scope = useMenuAnimation(isOpen);
  const [isHalfWay] = useRecoilState<boolean>(halfWayState);

  return (
    <div className="fixed z-50 parent">
      <motion.div
        onMouseMove={() => shuffleLetter({ time: 30 })}
        ref={scope}
        className={`flex flex-col ${
          isHalfWay ? "bg-[#00249C]" : "bg-[#222222]"
        } hover:bg-[#00249C] ${!isOpen && "transition"}
        items-start text-white h-11 w-[8.5rem] mx-7 my-7 px-7 cursor-pointer rounded-[25px] overflow-hidden`}
        initial={"closed"}
        animate={isOpen ? "open" : "closed"}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        variants={variants}
        onClick={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="flex w-full items-center justify-between">
          <motion.div
            className="text-center my-2.5 space-x-8"
            animate={isOpen ? "open" : "closed"}
            variants={burgerTextVariants}
          >
            <h1 className="font-light text-[14px] pb-[2px]">menu</h1>
          </motion.div>
          <motion.div
            className="h-5 w-5 flex flex-col items-center justify-center space-y-[3px]"
            animate={{ marginTop: !isOpen ? "0px" : "15px" }}
            transition={
              isOpen
                ? { delay: 0.5, duration: 0.5 }
                : { delay: 0, duration: 0.5 }
            }
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="h-[1px] w-full bg-white"
              animate={isOpen ? "topOpen" : "topClosed"}
              variants={burgerVariants}
            ></motion.div>
            <motion.div
              className="h-[1px] w-full bg-white"
              animate={isOpen ? "middleOpen" : "middleClosed"}
              variants={burgerVariants}
            ></motion.div>
            <motion.div
              className="h-[1px] w-full bg-white"
              animate={isOpen ? "bottomOpen" : "bottomClosed"}
              variants={burgerVariants}
            ></motion.div>
          </motion.div>
        </div>
        <div className="text-2xl space-y-2 mt-5 ml-7 translate-x-1 translate-y-2 decoration-0 list-none">
          <li className="shuffle" data-value="home">
            home
          </li>
          <li className="shuffle" data-value="about">
            about
          </li>
          <li className="shuffle" data-value="services">
            services
          </li>
          <li className="shuffle" data-value="cases">
            cases
          </li>
          <li className="shuffle" data-value="contact">
            contact
          </li>
        </div>
      </motion.div>
    </div>
  );
}
