import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "sale" | "hot";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const base =
    "inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide";
  const styles: Record<NonNullable<BadgeProps["variant"]>, string> = {
    default: "bg-slate-900 text-white",
    sale: "bg-red-500 text-white",
    hot: "bg-amber-500 text-white",
  };

  return (
    <span className={cn(base, styles[variant], className)} {...props} />
  );
}

