import * as React from "react"
import { cn } from "@/lib/utils"

const Select = React.forwardRef<
  HTMLSelectElement,
  React.ComponentProps<"select">
>(({ className, children, ...props }, ref) => {
  return (
    <select
      ref={ref}
      className={cn(
        "h-11 w-full rounded-xl border border-hob-charcoal bg-hob-black/35 px-3 text-sm text-hob-white outline-none transition-all duration-250 focus:border-hob-gold/60 focus:ring-2 focus:ring-hob-gold/35 focus:shadow-[0_0_0_4px_rgba(201,168,76,0.12)]",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  )
})

Select.displayName = "Select"

export { Select }

