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
  closed: {},
};

export const burgerTextVariants = {
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

export const squareVariants = {
  hidden: {
    backgroundColor: "#FFFFFF",
  },
  visible: {
    backgroundColor: "#00249C",
    transition: {
      delay: 2.5,
      duration: 0.75,
    },
  },
};

export const heroTextVariants = {
  initial: {
    bottom: "-100%",
    fontSize: "11vw",
    width: 900,
  },
  loaded: {
    bottom: "3.5%",
    fontSize: "5vw",
    transition: {
      delay: 2,
      duration: 0.5,
    },
  },
};

export const arrowVariants = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: 180,
  },
};

export const sectionVariants = {
  visible: {
    maxWidth: "100vw",
    transition: {
      duration: 0.4,
    },
  },
  hidden: {
    maxWidth: "95vw",
    transition: {
      duration: 0.4,
    },
  },
};

export const colorVariants = {
  initial: {
    backgroundColor: "#222222",
  },
  animate: {
    backgroundColor: "#E0DCDC",
  },
};
