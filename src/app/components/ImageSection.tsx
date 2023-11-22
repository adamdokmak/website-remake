import Image from "next/image";

export default function ImageSection() {
  return (
        <Image src='/img1.png' width={1440} height={790} className="sticky top-[100%] w-[1440px] h-[100vh] object-cover -translate-y-[100%]" alt="" />
  );
}
