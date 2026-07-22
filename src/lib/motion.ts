export const easeOutQuint = [0.21, 0.47, 0.32, 0.98] as const;
export const easeInOutCubic = [0.65, 0, 0.35, 1] as const;

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: easeOutQuint,
    },
  },
};

export const fadeInVariants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: easeOutQuint,
    },
  },
};

export const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.92, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: easeOutQuint,
    },
  },
};

export const slideLeftVariants = {
  hidden: { opacity: 0, x: -40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: easeOutQuint,
    },
  },
};

export const slideRightVariants = {
  hidden: { opacity: 0, x: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: easeOutQuint,
    },
  },
};

export const blurRevealVariants = {
  hidden: { opacity: 0, filter: "blur(16px)", scale: 0.95 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.7,
      ease: easeOutQuint,
    },
  },
};

export const springPopVariants = {
  hidden: { opacity: 0, scale: 0.86, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 280,
      damping: 22,
    },
  },
};

export const staggerContainerVariants = (
  staggerChildren = 0.1,
  delayChildren = 0
) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: easeOutQuint,
    },
  },
};
