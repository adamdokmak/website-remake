import Image from "next/image";
import image from "/img1.png";

export default function ImageSection() {
  return (
        <Image src={image} className="sticky top-[100%] w-[1440px] h-[100vh] object-cover -translate-y-[100%]" alt="" />
  );
}
