"use client";

import { m, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Preset = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight";

const presets: Record<Preset, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0 },
  },
};

interface ScrollRevealProps {
  children: React.ReactNode;
  preset?: Preset;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  preset = "fadeUp",
  delay = 0,
  duration = 0.5,
  className,
  once = true,
}: ScrollRevealProps) {
  const { ref, inView } = useInView({ triggerOnce: once, threshold: 0.1 });
  const variant = presets[preset];

  return (
    <m.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variant}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </m.div>
  );
}
