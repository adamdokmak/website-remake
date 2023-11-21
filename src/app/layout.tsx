import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ReactNode } from "react";

const NeueMontreal = localFont({
  src: "./NeueMontreal-Regular.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Awwwards Rec",
  description: "Skill Test",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${NeueMontreal.className} relative bg-white scrollbar-hide antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
