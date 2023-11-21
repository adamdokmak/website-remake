import {stagger, useAnimate} from "framer-motion";
import {useEffect} from "react";

export const staggerMenuItems = stagger(0.09, { startDelay: 0 });

export function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "li",
      isOpen ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 15, x: 5 },
      {
        duration: 0.5,
        delay: isOpen ? staggerMenuItems : 0,
      },
    );
  });

  return scope;
}