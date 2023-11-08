import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Edge from "@/app/svgcomponents/Edge";
import { useRecoilState } from "recoil";
import { halfWayState } from "@/atoms/burgerAtom";
import { pathVariantsXD, pathVariantsYD } from "@/app/utils";
import PlayButton from "@/app/svgcomponents/PlayButton";
import useCustomCursorVideo from "@/utils/useCustomCursorVideo";

export default function FloatingSection() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [, setIsHalfWay] = useRecoilState<boolean>(halfWayState);
  const [videoClicked, setVideoClicked] = useState<boolean>(true);
  const [videoHovered, setVideoHovered] = useState<boolean>(false);
  const videoRef = useRef<HTMLDivElement>(null);
  const { mouseX, mouseY } = useCustomCursorVideo(videoRef);

  const sectionVariants = {
    visible: {
      maxWidth: "100vw",
      transition: {
        duration: 0.4,
      },
    },
    hidden: {
      maxWidth: "95vw",
      transition: {
        duration: 0.4,
      },
    },
  };

  const { scrollYProgress } = useScroll();

  function halfWay() {
    if (scrollYProgress.get() > 0.5 && (isOpen || !isOpen)) {
      setIsOpen(true);
    } else if (scrollYProgress.get() < 0.5 && !isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    const handleHalfWay = () => {
      if (scrollYProgress.get() > 0.25) {
        setIsHalfWay(true);
      } else {
        setIsHalfWay(false);
      }
    };

    window.addEventListener("scroll", () => {
      handleHalfWay();
    });

    return () => {
      window.removeEventListener("scroll", () => {
        handleHalfWay();
      });
    };
  }, [scrollYProgress, setIsHalfWay]);

  return (
    <motion.section
      className="flex flex-col justify-center items-center"
      onViewportEnter={() => {
        halfWay();
      }}
      onViewportLeave={() => {
        halfWay();
      }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div
        className="w-full"
        variants={sectionVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
      >
        <div className="relative w-full h-[700px] flex justify-center items-center transition z-50 ">
          <div className="relative bg-[#222222] w-full h-full rounded-t-[8px] grid grid-cols-5 grid-rows-3 p-2 gap-4">
            <motion.div
              className="border-[#434343] translate-x-[8px] border-r-[1px] col-span-2 self-stretch"
              variants={pathVariantsYD}
              initial={"initial"}
              animate={isOpen ? "animate" : "initial"}
            />
            <motion.div
              className="border-[#434343] translate-y-[8.5px] border-b-[1px] col-span-3 self-stretch"
              variants={pathVariantsXD}
              initial={"initial"}
              animate={isOpen ? "animate" : "initial"}
            />
            <motion.div
              className="flex justify-center px-4 items-end border-[#434343] -translate-y-[8.5px] border-t-[1px] col-span-2 row-span-2 self-stretch"
              variants={pathVariantsXD}
              initial={"initial"}
              animate={isOpen ? "animate" : "initial"}
            >
              <div className='flex items-end w-full -mb-3 justify-between'>
                <h1 className="text-white text-[2vw] whitespace-nowrap">DEPO SHOWREEL</h1>
                <h1 className="text-[#00249C] text-[2vw] whitespace-nowrap">0:43</h1>
              </div>
            </motion.div>
            <motion.div
              className="border-[#434343] -translate-x-[9px] border-l-[1px] col-span-3 row-span-2 self-stretch"
              variants={pathVariantsYD}
              initial={"initial"}
              animate={isOpen ? "animate" : "initial"}
            >
              <div
                ref={videoRef}
                className="translate-x-[9px] w-full h-full overflow-hidden cursor-pointer"
                onClick={() => setVideoClicked(!videoClicked)}
                onMouseEnter={() => setVideoHovered(true)}
                onMouseLeave={() => setVideoHovered(false)}
              >
                <motion.div
                  className="absolute z-50"
                  initial={{ opacity: 0, x: 400, y: 200 }}
                  transition={{
                    type: "tween",
                    ease: "backOut",
                  }}
                  animate={
                    videoHovered
                      ? { opacity: 1, x: mouseX - 40, y: mouseY - 40 }
                      : { opacity: 0, x: 400, y: 200 }
                  }
                >
                  <motion.div className="flex items-center justify-center text-center text-white gap-2 text-3xl">
                    <h1 className="mix-blend-difference">
                      {videoClicked ? "PLAY" : "PAUSE"}
                    </h1>
                    <div className="w-7 h-7">
                      <PlayButton />
                    </div>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="absolute h-full w-full bg-[#111111] top-0 left-0 rounded-[10px] z-10"
                  initial={{ opacity: 0 }}
                  animate={videoClicked ? { opacity: 0.8 } : { opacity: 0 }}
                ></motion.div>
                <video
                  className={`w-full h-full object-cover ${
                    videoClicked && "grayscale"
                  } rounded-[10px] pointer-events-auto`}
                  loop
                  autoPlay
                  muted={videoClicked}
                  src={"/transform.mp4"}
                ></video>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="relative z-50">
          <div className="w-full h-[7.5px] bg-[#222222] grid grid-rows-1 grid-cols-5 p-2 gap-4">
            <motion.div
              className="border-[#434343] -translate-y-[8.5px] border-t-[1px] h-0 col-span-2 self-stretch"
              variants={pathVariantsXD}
              initial={"initial"}
              animate={isOpen ? "animate" : "initial"}
            />
            <motion.div
              className="border-[#434343] -translate-y-[8.5px] border-t-[1px] h-0 col-span-3 self-stretch"
              variants={pathVariantsXD}
              initial={"initial"}
              animate={isOpen ? "animate" : "initial"}
            />
          </div>
          <div className="flex h-full w-screen">
            <div className="w-[0.5vw] h-[82px] bg-[#222222]"></div>
            <Edge rotate="-90deg" />
            <div className="w-[38vw] h-[75px]"></div>
            <Edge rotate="0" />
            <div className="w-[61vw] h-[75px] bg-[#222222] rounded-bl-[10px] grid grid-rows-1 grid-cols-1 px-2 pb-2 gap-4">
              <motion.div
                className="border-[#434343] -translate-y-[6px] border-l-[1px] self-stretch"
                variants={pathVariantsYD}
                initial={"initial"}
                animate={isOpen ? "animate" : "initial"}
              />
            </div>
            <div className="relative w-[0.5vw] h-[82px] bg-[#222222]">
              <div className="absolute right-[0.5vw] top-[75px]">
                <Edge rotate="0" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
