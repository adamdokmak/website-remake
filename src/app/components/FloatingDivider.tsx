import {motion} from "framer-motion";
import {pathVariantsXD, pathVariantsYD} from "@/utils/variants";
import Edge from "@/app/svgcomponents/Edge";

export default function FloatingDivider({isOpen}: {isOpen: boolean}) {
    return (
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
    )
}