import type { Metadata } from "next";
import { Orbitron, Rajdhani, Michroma } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const michroma = Michroma({
  variable: "--font-michroma",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hi-Tech Animation | Premiere Animation Institute",
  description: "Experience the future of animation with Hi-Tech Animation Studio.",
};

import MainLayout from "@/components/layout/MainLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${rajdhani.variable} ${michroma.variable} antialiased`}
      suppressHydrationWarning
    >
      <body
        className="bg-white text-black font-rajdhani selection:bg-brand-red selection:text-white"
        suppressHydrationWarning
      >
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}

