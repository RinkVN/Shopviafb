import * as React from "react";
import { cn } from "@/lib/utils";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn(
        "text-[12px] font-medium text-slate-700 leading-tight",
        className,
      )}
      {...props}
    />
  );
}

