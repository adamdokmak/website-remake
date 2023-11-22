import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { halfWayState } from "@/atoms/burgerAtom";
import {
  pathVariantsXD,
  pathVariantsYD,
  sectionVariants,
} from "@/utils/variants";
import PlayButton from "@/svgcomponents/PlayButton";
import useCustomCursorVideo from "@/utils/useCustomCursorVideo";

export default function FloatingSection() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [, setIsHalfWay] = useRecoilState<boolean>(halfWayState);
  const [videoClicked, setVideoClicked] = useState<boolean>(true);
  const [videoHovered, setVideoHovered] = useState<boolean>(false);

  const videoRef = useRef<HTMLDivElement>(null);
  const vTimeRef = useRef<HTMLVideoElement>(null);
  const { mouseX, mouseY } = useCustomCursorVideo(videoRef);
  const videoDuration = () => {
    let time: any = vTimeRef.current?.duration;
    let roundedTime = Math.floor(time);
    let finalTime;
    if (roundedTime.toString().length < 3) {
      finalTime = `0:${roundedTime}`;
    }
    return finalTime;
  };
  const { scrollYProgress } = useScroll();

  function halfWay() {
    if (scrollYProgress.get() > 0.1) {
      setIsOpen(true);
    } else if (scrollYProgress.get() < 0.5 && !isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    const handleHalfWay = () => {
      if (scrollYProgress.get() > 0.15) {
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
      className="flex flex-col justify-center items-center translate-y-[100px]"
      onViewportEnter={() => {
        setIsOpen(true)
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
              <div className="flex items-end w-full -mb-3 justify-between">
                <h1 className="text-white text-[2vw] whitespace-nowrap">
                  DEPO SHOWREEL
                </h1>
                <h1 className="text-[#00249C] text-[2vw] whitespace-nowrap">
                  {videoDuration()}
                </h1>
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
                  ref={vTimeRef}
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

      </motion.div>
    </motion.section>
  );
}
