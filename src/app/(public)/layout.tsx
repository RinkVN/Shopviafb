import type { ReactNode } from "react";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-4">{children}</main>
      <Footer />
    </div>
  );
}

