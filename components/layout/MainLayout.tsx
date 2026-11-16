
"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import HorizontalWrapper from "@/components/home/HorizontalWrapper";
import PageTransition from "./PageTransition";
import MasterFooter from "./MasterFooter";

interface MainLayoutProps {
  children: React.ReactNode;
}

const STANDALONE_PAGES = new Set([
  "/testimonials",
  "/career",
  "/blog",
  "/animation",
]);

const MainLayout = ({ children }: MainLayoutProps) => {
  const pathname = usePathname();

  const isStandalone =
    STANDALONE_PAGES.has(pathname) ||
    pathname.startsWith("/blog/");

  const isTestimonials = pathname === "/testimonials";

  return (
    <>
      <PageTransition />
      <Navbar />

      {isStandalone ? (
        <main
          className={`relative w-full min-h-screen overflow-x-clip ${
            isTestimonials
              ? "bg-black text-white"
              : "bg-[#060B09] text-white"
          }`}
        >
          {children}
        </main>
      ) : (
        <HorizontalWrapper key={pathname}>
          {children}
        </HorizontalWrapper>
      )}

      <MasterFooter />
    </>
  );
};

export default MainLayout;
