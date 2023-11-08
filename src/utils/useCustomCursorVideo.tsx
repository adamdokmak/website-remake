import { RefObject, useEffect, useState } from "react";

interface IMousePosition {
  mouseX: number;
  mouseY: number;
}

export default function useCustomCursorVideo(
  videoRef: RefObject<HTMLDivElement>,
) {
  const [mousePosition, setMousePosition] = useState<IMousePosition>({
    mouseX: 0,
    mouseY: 0,
  });
  // const updateMousePosition = (e: MouseEvent) => {
  //   setMousePosition({ mouseX: e.clientX, mouseY: e.clientY });
  // };
 const updateMousePosition = (e: MouseEvent) => {
    const rect = videoRef.current?.getBoundingClientRect();

    if (rect) {
      // Calculate the position relative to the video's parent container
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;

      setMousePosition({ mouseX: relativeX, mouseY: relativeY });
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [videoRef]);

  return mousePosition;
}
