import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

export function shuffleLetter({ time }: { time: number }) {
  const letters: string = "abcdefghijklmnopqrstuvwxyz";
  const ShuffleElements: NodeListOf<HTMLElement> =
    document.querySelectorAll(".shuffle");

  ShuffleElements.forEach((ShuffleElements) => {
    let currentLetterIndex = 0;
    let shuffleCounter = 0;
    let interval: NodeJS.Timeout;
    let originalText: string;

    ShuffleElements.onmouseover = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const dataValue = target.dataset.value;

      if (dataValue) {
        clearInterval(interval);
        originalText = dataValue;
        interval = setInterval(() => {
          const shuffledText = originalText.split("");

          if (shuffleCounter < 4) {
            shuffledText[currentLetterIndex] =
              letters[Math.floor(Math.random() * 26)];
            target.innerText = shuffledText.join("");
            shuffleCounter++;
          } else {
            shuffleCounter = 0;
            currentLetterIndex++;
          }

          if (currentLetterIndex >= originalText.length) {
            target.innerText = originalText;
            clearInterval(interval);
          }
        }, time);
      }
    };
  });
}

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

export const variants = {
  open: {
    height: "510px",
    width: "270px",
    marginTop: "8px",
    marginBottom: "12px",
    marginLeft: "8px",
    marginRight: "12px",
    borderRadius: "10px",
    opacity: 1,
  },
  closed: {
    opacity: 1,
    transition: {
      delay: 2.5,
    },
  },
};

export const textVariants = {
  open: { opacity: 0, transition: { delay: 0.5 } },
  closed: { opacity: 1 },
};

export const burgerVariants = {
  topOpen: { rotate: 45, y: 4, transition: { duration: 0.5 } },
  middleOpen: { x: -20, width: 0, transition: { duration: 0.5 } },
  bottomOpen: { rotate: -45, y: -4, transition: { duration: 0.5 } },
};

export const pathVariantsX = {
  initial: {
    width: 0,
  },
  animate: {
    width: "100%",
    transition: {
      delay: 2.5,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const pathVariantsY = {
  initial: {
    height: 0,
  },
  animate: {
    height: "100%",
    transition: {
      delay: 2.5,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const pathVariantsXD = {
  initial: {
    width: 0,
  },
  animate: {
    width: "100%",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const pathVariantsYD = {
  initial: {
    height: 0,
  },
  animate: {
    height: "100%",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
