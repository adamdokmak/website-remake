import { motion } from "framer-motion";

export default function GridSVGDark({ isOpen }: { isOpen: boolean }) {
  const pathVariants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
    },
  };
  return (
    <svg
      className="w-screen h-screen"
      viewBox="0 0 1914 1037"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M773.5 9 L773.5 259"
        stroke="#434343"
        variants={pathVariants}
        initial={"hidden"}
        animate={isOpen ? "visible" : "hidden"}
      />
      <motion.path
        d="M765 269.5 L8 270.5"
        stroke="#434343"
        variants={pathVariants}
        initial={"hidden"}
        animate={isOpen ? "visible" : "hidden"}
      />
      <motion.path
        d="M773.5 281 L773.5 920"
        stroke="#434343"
        variants={pathVariants}
        initial={"hidden"}
        animate={isOpen ? "visible" : "hidden"}
      />
      <motion.path
        d="M783 269.5 L1905 269.5"
        stroke="#434343"
        variants={pathVariants}
        initial={"hidden"}
        animate={isOpen ? "visible" : "hidden"}
      />
      <motion.path
        d="M785 930.5 L1914 930.5"
        stroke="#434343"
        variants={pathVariants}
        initial={"hidden"}
        animate={isOpen ? "visible" : "hidden"}
      />
      <motion.path
        d="M762 930.5 L8 930.5"
        stroke="#434343"
        variants={pathVariants}
        initial={"hidden"}
        animate={isOpen ? "visible" : "hidden"}
      />
      <motion.path
        d="M773.5 941 L773.5 1032"
        stroke="#434343"
        variants={pathVariants}
        initial={"hidden"}
        animate={isOpen ? "visible" : "hidden"}
      />
    </svg>
  );
}
