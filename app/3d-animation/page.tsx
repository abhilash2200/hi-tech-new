"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Play, Cpu, Box, Layers, Zap, Star, Trophy, Users, Globe } from "lucide-react";
import Animation2dHero from "@/components/2danimation/Animation2dHero";
import Animation2dProjectsSection from "@/components/2danimation/Animation2dProjectsSection";


const AnimationPage = () => {
  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 1: HERO BANNER COMPONENT
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <Animation2dHero />
      <Animation2dProjectsSection />
    </>
  );
};

export default AnimationPage;