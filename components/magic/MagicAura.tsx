"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"

export function MagicAura() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-hob-gold/12 blur-3xl"
        animate={reduceMotion ? { opacity: 0.7 } : { y: [0, 22, 0], x: [0, 14, 0] }}
        transition={reduceMotion ? { duration: 0.25 } : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -right-24 bottom-8 h-80 w-80 rounded-full bg-hob-gold/10 blur-3xl"
        animate={reduceMotion ? { opacity: 0.65 } : { y: [0, -20, 0], x: [0, -12, 0] }}
        transition={reduceMotion ? { duration: 0.25 } : { duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}

