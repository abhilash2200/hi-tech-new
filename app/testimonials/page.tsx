"use client";

import React from "react";
import TestimonialsBentoGrid from "@/components/testimonials/TestimonialsBentoGrid";
import WhoWeAreContact from "@/components/testimonials/WhoWeAreContact";

const TestimonialsPage = () => {
  return (
    <div className="relative min-h-screen bg-[#0A0B0E] text-white overflow-hidden selection:bg-[#E05A20] selection:text-white pt-28 md:pt-36">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(224,90,32,0.08),transparent_50%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(224,90,32,0.05),transparent_70%)] pointer-events-none z-0" />

      {/* SECTION 1: Testimonials Bento Grid */}
      <TestimonialsBentoGrid />

      {/* SECTION 2: Who We Are & Keep Up To Date Contact Form */}
      <WhoWeAreContact />
    </div>
  );
};

export default TestimonialsPage;
