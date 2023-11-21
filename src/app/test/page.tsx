"use client";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Image from "next/image";
import image from "@/assets/img1.png";

export default function Page() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);
  return (
    <>
      <section className="sticky top-0 flex justify-center items-center h-screen w-screen bg-violet-900 -z-50">
        <h1 className="text-white text-8xl">Hello</h1>
      </section>
      <section className="w-screen h-[200vh]">
        <Image src={image} className="sticky top-0" alt=""></Image>
        <div className="relative w-screen h-screen bg-white z-50"></div>
      </section>
        <section className='bg-amber-900 w-screen h-screen'> </section>
    </>
  );
}
