import { motion } from "framer-motion";
import Arrow from "@/app/svgcomponents/Arrow";

interface IHeroContact {
  isHovered: boolean;
  setIsHovered: (value: boolean) => void;
  arrowVariants: {};
}

export default function HeroContact({
  isHovered,
  setIsHovered,
  arrowVariants,
}: IHeroContact) {
  return (
    <motion.div
      className="parent relative bg-white self-stretch rounded-[10px] cursor-pointer overflow-hidden
                    before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#00249C]
                    before:origin-top before:transition-transform before:duration-300 before:ease-in-out before:scale-y-0
                    before:hover:origin-bottom before:hover:scale-y-100"
      initial={"initial"}
      animate={"initial"}
      onMouseOver={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={"animate"}
    >
      <motion.div
        className="absolute right-4 top-4 w-11 h-11"
        variants={arrowVariants}
      >
        <Arrow fill={isHovered ? "white" : "#00249C"} />
      </motion.div>
      <div className="relative flex justify-between items-end h-full px-[1vw] pb-[0.5vw]">
        <div className="flex flex-col">
          <h1
            className={`shuffle ${
              isHovered && "text-white"
            } text-[1.9vw] leading-[1.1] tracking-[-0.02em] whitespace-nowrap`}
            data-value="READY"
          >
            READY
          </h1>
          <h1
            className={`shuffle ${
              isHovered && "text-white"
            } text-[1.9vw] leading-[1.1] tracking-[-0.02em] whitespace-nowrap`}
            data-value="TO WORK"
          >
            TO WORK
          </h1>
        </div>
        <h1
          className={`shuffle ${
            isHovered && "text-white"
          } text-[#00249C] text-[1.9vw] leading-[1.1] tracking-[-0.02em] whitespace-nowrap`}
          data-value="WE TOO"
        >
          WE TOO
        </h1>
      </div>
    </motion.div>
  );
}
