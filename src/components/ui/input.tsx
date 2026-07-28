import * as React from "react"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon
  rightElement?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon: Icon, rightElement, ...props }, ref) => {
    const internalRef = React.useRef<HTMLInputElement>(null);
    React.useImperativeHandle(ref, () => internalRef.current!);

    return (
      <div
        className="relative w-full cursor-text"
        onClick={(e) => {
          // Only focus input if user didn't click an interactive button inside rightElement
          if ((e.target as HTMLElement).tagName !== "BUTTON" && !(e.target as HTMLElement).closest("button")) {
            internalRef.current?.focus();
          }
        }}
      >
        {Icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none text-slate-400">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <input
          type={type}
          ref={internalRef}
          className={cn(
            "flex w-full rounded-xl border border-[#E2E6EC] bg-[#F8FAFC] py-3 text-sm text-[#0F172A] placeholder:text-slate-400 outline-none transition-all hover:border-[#1D4ED8]/30 hover:bg-white focus:bg-white focus:ring-4 focus:ring-[#1D4ED8]/12 focus:border-[#1D4ED8] disabled:cursor-not-allowed disabled:opacity-50 font-medium shadow-xs",
            Icon ? "pl-10" : "pl-3.5",
            rightElement ? "pr-10" : "pr-3.5",
            className
          )}
          {...props}
        />
        {rightElement && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-auto">
            {rightElement}
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }


