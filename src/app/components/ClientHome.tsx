"use client";
import Image from "next/image";
import test from "@/content/img1.png";
import { useEffect, useRef, useState } from "react";
import Burger from "@/app/components/Burger";
import Grid from "@/app/components/Grid";
import Squares from "@/app/components/Squares";
import FloatingSection from "@/app/components/FloatingSection";
import LocomotiveScroll from "locomotive-scroll";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export default function ClientHome() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <RecoilRoot>
      <main>
        <div className="relative z-[999]">
          <Burger />
        </div>
        <section className="relative h-screen w-screen">
          <Squares />
          <Grid />
        </section>
        <FloatingSection />
        <section className="relative h-[999px] w-screen">
          {/*<Image*/}
          {/*  src={img1}*/}
          {/*  className=' relative min-w-fit min-h-fit -translate-y-24 z-0'*/}
          {/*  alt="" />*/}
        </section>
      </main>
    </RecoilRoot>
  );
}
