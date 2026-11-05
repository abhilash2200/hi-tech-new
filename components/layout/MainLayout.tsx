"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import HorizontalWrapper from "@/components/home/HorizontalWrapper";
import ContactSection from "@/components/home/Footer";
import PageTransition from "./PageTransition";

interface MainLayoutProps {
  children: React.ReactNode;
}

// Pages that use the standalone (non-horizontal-scroll) layout
const STANDALONE_PAGES = new Set(["/testimonials", "/career"]);

const MainLayout = ({ children }: MainLayoutProps) => {
  const pathname = usePathname();
  const isTestimonials = pathname === "/testimonials";
  const isCareer = pathname === "/career";
  const isStandalone = STANDALONE_PAGES.has(pathname);

  return (
    <>
      {/* Singleton transition overlay — reads pathname internally */}
      <PageTransition />
      <Navbar />
      {isStandalone ? (
        <main
          className={`min-h-screen ${
            isTestimonials ? "bg-black text-white" : "bg-[#FAF9F6] text-black"
          }`}
        >
          {children}
          {!isCareer && <ContactSection />}
        </main>
      ) : (
        // key={pathname} forces HorizontalWrapper to fully remount on each route change,
        // which destroys stale GSAP ScrollTrigger instances cleanly.
        <HorizontalWrapper key={pathname}>
          {children}
          <ContactSection />
        </HorizontalWrapper>
      )}
    </>
  );
};

export default MainLayout;
