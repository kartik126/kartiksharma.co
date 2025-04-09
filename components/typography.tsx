import type React from "react"
import { cn } from "@/lib/utils"

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

export function H1({ children, className }: TypographyProps) {
  return <h1 className={cn("text-2xl font-light tracking-tighter sm:text-3xl", className)}>{children}</h1>
}

export function H2({ children, className }: TypographyProps) {
  return <h2 className={cn("text-xl font-light leading-[1.1] sm:text-2xl md:text-3xl", className)}>{children}</h2>
}

export function P({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-sm leading-normal text-muted-foreground sm:text-base sm:leading-6", className)}>
      {children}
    </p>
  )
}

export function Small({ children, className }: TypographyProps) {
  return <small className={cn("text-xs font-light text-muted-foreground", className)}>{children}</small>
}
