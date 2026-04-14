"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  stagger?: number;
  delay?: number;
}

export default function AnimatedHeading({
  text,
  className = "",
  as: Tag = "h1",
  stagger = 0.05,
  delay = 0,
}: AnimatedHeadingProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: stagger, 
        delayChildren: delay * i,
        ease: [0.2, 0.65, 0.3, 0.9] as const
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: -90,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Tag ref={ref} className={`${className} perspective-1000`}>
      <motion.span
        style={{ display: "flex", flexWrap: "wrap", rowGap: "0.2em" }}
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {words.map((word, index) => (
          <span key={index} style={{ display: "inline-block", overflow: "hidden", marginRight: "0.25em" }}>
            <motion.span
              variants={child}
              style={{ display: "inline-block", transformOrigin: "bottom" }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
