import { motion } from "framer-motion";
import {pathVariantsX} from "@/utils/variants";

export default function Grid() {
  return (
    <div className="absolute top-0 w-screen min-h-screen grid grid-rows-3 grid-cols-5 gap-x-4 px-2 -z-10">
      <motion.div
        className="border-[#838181] border-[0.5px] h-0 col-span-3 row-end-3 self-stretch"
        variants={pathVariantsX}
        initial={"initial"}
        animate={"animate"}
      />
      <motion.div
        className="border-[#838181] border-[0.5px] h-0 col-span-2 row-end-3 self-stretch"
        variants={pathVariantsX}
        initial={"initial"}
        animate={"animate"}
      />
      <motion.div
        className="border-[#838181] border-[0.5px] h-0 col-span-2 row-end-4 self-stretch"
        variants={pathVariantsX}
        initial={"initial"}
        animate={"animate"}
      />
      <motion.div
        className="border-[#838181] border-[0.5px] h-0 row-end-4 self-stretch"
        variants={pathVariantsX}
        initial={"initial"}
        animate={"animate"}
      />
      <motion.div
        className="border-[#838181] border-[0.5px] h-0 row-end-4 self-stretch"
        variants={pathVariantsX}
        initial={"initial"}
        animate={"animate"}
      />
      <motion.div
        className="border-[#838181] border-[0.5px] h-0 row-end-4 self-stretch"
        variants={pathVariantsX}
        initial={"initial"}
        animate={"animate"}
      />
    </div>
  );
}
