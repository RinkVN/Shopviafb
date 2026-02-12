import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shop BNH - KhotaiKhoan clone",
  description: "Mua bán tài khoản số, phần mềm bản quyền, công cụ AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
        <body
        className={`${beVietnamPro.variable} antialiased bg-slate-100 font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
