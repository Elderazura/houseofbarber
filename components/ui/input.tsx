import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-xl border border-hob-charcoal bg-hob-black/35 px-3 py-2 text-base text-hob-white shadow-sm transition-all duration-250 placeholder:text-hob-cream/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hob-gold/35 focus-visible:border-hob-gold/60 focus-visible:shadow-[0_0_0_4px_rgba(201,168,76,0.12)] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
