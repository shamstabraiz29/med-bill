import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: "translate" | "scale" | "both" | "none"
  glass?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = "both", glass = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-3xl transition-all duration-500 overflow-hidden relative group",
          glass && "bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-white/50 dark:border-white/5 shadow-[0_8px_30px_rgba(30,27,75,0.03)]",
          !glass && "bg-card text-card-foreground border border-border shadow-sm",
          hoverEffect === "translate" && "hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(30,27,75,0.06)] cursor-pointer",
          hoverEffect === "scale" && "hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(30,27,75,0.06)] cursor-pointer",
          hoverEffect === "both" && "hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(30,27,75,0.06)] cursor-pointer",
          className
        )}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  )
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-xl font-bold leading-tight tracking-tight text-[#1c1a45] dark:text-white", className)} {...props} />
  )
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-slate-500 dark:text-slate-400", className)} {...props} />
  )
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  )
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
