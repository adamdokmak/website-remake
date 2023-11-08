import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ReactNode } from "react";


const NeueMontreal = localFont({
  src: "./NeueMontreal-Regular.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
      <html lang="en">
        <body
          className={`${NeueMontreal.className} relative bg-[#E0DCDC] scrollbar-hide`}
        >
          {children}
        </body>
      </html>
  );
}
