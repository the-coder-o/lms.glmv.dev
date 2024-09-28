export const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.15,
    },
  },
}

export const iconVariants = {
  hidden: { opacity: 0, y: 0, x: 10 },
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.1 } },
}

export const titleVariants = {
  hidden: { opacity: 0, y: 0, x: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
}

export const contentVariants = {
  hidden: { opacity: 0, y: 0, x: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
}

export const videoVariants = {
  hidden: { opacity: 0, y: 0, x: 0 },
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.4 } },
}
