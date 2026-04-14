import * as React from "react"
import { cn } from "@/lib/utils"

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "gold" | "outline"
}

export function Badge({ className, variant = "gold", ...props }: BadgeProps) {
  const variantClass =
    variant === "default"
      ? "bg-hob-gold/15 text-hob-gold border border-hob-gold/30"
      : variant === "outline"
        ? "bg-transparent text-hob-gold border border-hob-gold/40"
        : "bg-hob-gold/20 text-hob-gold border border-hob-gold/40"

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
        variantClass,
        className,
      )}
      {...props}
    />
  )
}

