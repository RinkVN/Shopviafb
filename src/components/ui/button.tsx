import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "destructive";
  size?: "sm" | "md" | "lg" | "icon";
}

const base =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default:
    "bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-500/30",
  outline:
    "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50",
  secondary:
    "bg-slate-900 text-white hover:bg-black shadow-sm shadow-slate-900/40",
  ghost: "text-slate-700 hover:bg-slate-100",
  destructive:
    "bg-red-500 text-white hover:bg-red-600 shadow-sm shadow-red-400/40",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-8 px-3",
  md: "h-9 px-4",
  lg: "h-10 px-5 text-sm",
  icon: "h-8 w-8 rounded-full",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

