// import { useScroll } from "framer-motion";
import { useRef } from "react";

export default function CircleSection() {
  const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  // });

  // const scale = useTransform(scrollYProgress, [0, 1], ["0.89rem", "110rem"]);

  return (
      <>
    <div className="relative flex justify-center bg-[#E0DCDC] items-center h-full w-screen z-50 ">
      <div
        ref={ref}
        className="h-screen w-screen grid grid-rows-2 grid-cols-2 p-2 gap-4"
      >
        <div className="group cursor-pointer flex flex-col justify-center items-center text-center border-[#222222] translate-x-[8.5px] translate-y-[50px] border-r-[1px] h-[300px] self-stretch gap-7">
          <h1 className="text-3xl text-[#222222] leading-[0.9] group-hover:text-[#00249C] transition-all">
            COMPLETE <br /> WEBSITE
          </h1>
          <p className="text-md text-[#222222] leading-[0.95]">
            MOODBOARD / WIREFRAMING / <br /> CONCEPTS IN ANIMATION / DESIGN /
            <br /> DEVELOPMENT
          </p>
        </div>
        <div className="group cursor-pointer flex flex-col justify-center items-center text-center border-[#222222] translate-y-[8.5px] translate-x-[30px] border-b-[1px] w-[670px] self-stretch gap-7">
          <h1 className="text-3xl text-[#222222] leading-[0.9] group-hover:text-[#00249C] transition-all">
            UI <br /> DESIGN
          </h1>
          <p className="text-md text-[#222222] leading-[0.95]">
            MOODBOARD / DESIGN CONCEPTS / <br /> ANIMATION / WEBDESIGN
          </p>
        </div>
        <div className="group cursor-pointer flex flex-col justify-center items-center text-center border-[#222222] -translate-y-[8.5px]  border-t-[1px] w-[670px] self-stretch gap-7">
          <h1 className="text-3xl text-[#222222] leading-[0.9] group-hover:text-[#00249C] transition-all">
            UX <br /> DESIGN
          </h1>
          <p className="text-md text-[#222222] leading-[0.95]">
            WIREFRAMING / UX RESEARCH / <br /> WEBSITE AUDIT
          </p>
        </div>
        <div className="group cursor-pointer flex flex-col justify-center items-center text-center border-[#222222] -translate-x-[8.5px] translate-y-[40px] border-l-[1px] h-[300px] self-stretch gap-7">
          <h1 className="text-3xl text-[#222222] leading-[0.9] group-hover:text-[#00249C] transition-all">
            WEB <br /> DEVELOPMENT
          </h1>
          <p className="text-md text-[#222222] leading-[0.95]">
            DEVELOPMENT / WEBFLOW / <br /> E-COMMERCE
          </p>
        </div>
        {/*<div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center bg-[#E0DCDC] h-[5.99rem] rounded-[100vw]">*/}
        {/*  <motion.div*/}
        {/*    style={{ width: scale, height: scale }}*/}
        {/*    className="relative z-50 bg-[#00249C] rounded-[100vw]"*/}
        {/*  ></motion.div>*/}
        {/*</div>*/}
      </div>
    </div>
        {/*<div className='w-screen h-screen bg-white'>*/}

        {/*</div>*/}
      </>

  );
}
