import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: string;
}

// Simple effect-style card lấy cảm hứng từ Aceternity UI:
export function GlassCard({
  className,
  glowColor = "rgba(59,130,246,0.4)",
  children,
  ...props
}: GlassCardProps) {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-1 rounded-[1.4rem] opacity-60 blur-xl"
        style={{ background: `radial-gradient(circle at top, ${glowColor}, transparent 60%)` }}
      />
      <div
        className={cn(
          "relative rounded-[1.3rem] border border-white/10 bg-gradient-to-br from-white/70 via-white/40 to-white/20 px-4 py-3 shadow-[0_18px_45px_rgba(15,23,42,0.18)] backdrop-blur-xl",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

