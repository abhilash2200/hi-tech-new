"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import HorizontalWrapper from "@/components/home/HorizontalWrapper";
// import ContactSection from "@/components/home/Footer"; // ← uncomment when needed
import PageTransition from "./PageTransition";
import MasterFooter from "./MasterFooter";

interface MainLayoutProps {
  children: React.ReactNode;
}

// Pages that use the standalone (non-horizontal-scroll) layout
const STANDALONE_PAGES = new Set(["/testimonials", "/career", "/blog"]);

const MainLayout = ({ children }: MainLayoutProps) => {
  const pathname = usePathname();
  const isStandalone =
  STANDALONE_PAGES.has(pathname) ||
  pathname.startsWith("/blog/");
  const isTestimonials = pathname === "/testimonials";
  const isCareer = pathname === "/career";
  isStandalone

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
          {/* {!isCareer && !isTestimonials && <ContactSection />} */}
        </main>
      ) : (
        // key={pathname} forces HorizontalWrapper to fully remount on each route change,
        // which destroys stale GSAP ScrollTrigger instances cleanly.
        <HorizontalWrapper key={pathname}>
          {children}
          {/* <ContactSection /> */}
        </HorizontalWrapper>
      )}

      {/* Master footer for mobile view only */}
      <MasterFooter />
    </>
  );
};

export default MainLayout;
