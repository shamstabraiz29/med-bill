import * as React from "react"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon: Icon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {Icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none text-slate-400">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex w-full rounded-xl border border-slate-200/80 bg-slate-50/50 py-3.5 text-sm outline-none transition-all focus:bg-white focus:ring-4 focus:ring-indigo-100/30 focus:border-indigo-500 disabled:cursor-not-allowed disabled:opacity-50",
            Icon ? "pl-10 pr-3.5" : "px-3.5",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
