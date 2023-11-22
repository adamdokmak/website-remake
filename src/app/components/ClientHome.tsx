"use client";
import { useEffect, useRef } from "react";
import Burger from "@/app/components/Burger";
import Grid from "@/app/components/Grid";
import Squares from "@/app/components/Squares";
import FloatingSection from "@/app/components/FloatingSection";
import { RecoilRoot } from "recoil";
import ImageSection from "@/app/components/ImageSection";
import FloatingDivider from "@/app/components/FloatingDivider";
import { motion, useInView } from "framer-motion";
import { colorVariants } from "@/utils/variants";
import CircleSection from "@/app/components/CircleSection";
import Lenis from "@studio-freight/lenis";

export default function ClientHome() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-10px" });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <RecoilRoot>
      <main className="selection:bg-[#00249C] selection:text-white">
        <div className="relative z-[999]">
          <Burger />
        </div>

        <section className="relative h-[200vh] w-full bg-[#E0DCDC] z-50 ">
          <div className="sticky top-0">
            <Squares />
            <Grid />
          </div>
          <FloatingSection />
        </section>

        <FloatingDivider isOpen />
        <section className="sticky top-0 h-[300vh] w-full ">
          <motion.div
            className="absolute top-0 left-0 h-[300vh] w-[7px] z-50"
            variants={colorVariants}
            initial={"initial"}
            animate={inView ? "animate" : "ititial"}
          />
          <motion.div
            className="absolute top-0 right-0 h-[300vh] w-[7px] z-50"
            variants={colorVariants}
            initial={"initial"}
            animate={inView ? "animate" : "ititial"}
          />
          <ImageSection />
          <div
            ref={ref}
            className="relative flex justify-center items-start h-full w-full bg-[#E0DCDC] z-50"
          >
            <h1 className="text-center text-[#222222] text-[4.6rem] tracking-[-0.02em] leading-[0.9] pt-[187px]">
              Our mission is creating <br /> world-class websites where <br />{" "}
              beauty meets art of sales. Why <br /> not to have both?
            </h1>
          </div>
        </section>
        <CircleSection />
      </main>
    </RecoilRoot>
  );
}
