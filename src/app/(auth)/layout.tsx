import type { ReactNode } from "react";
import "../globals.css";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        {children}
      </div>
    </div>
  );
}

