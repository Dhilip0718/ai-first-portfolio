import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { MotionConfig } from "framer-motion";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhilip — Senior Full Stack Engineer",
  description:
    "Portfolio and recruiter assistant for Dhilip: React, TypeScript, Next.js, and Azure/DevOps experience.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f1117",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <MotionConfig reducedMotion="user">
          <a
            href="#main-content"
            className="fixed left-3 top-3 z-[100] -translate-y-[140%] rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-md transition-transform focus-visible:translate-y-0 focus-visible:outline-none"
          >
            Skip to main content
          </a>
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}
