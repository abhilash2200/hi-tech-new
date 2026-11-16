"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Play, Cpu, Box, Layers, Zap, Star, Trophy, Users, Globe } from "lucide-react";
import AnimationHero from "@/components/animation/AnimationHero";
import GlobalImpactSection from "@/components/animation/GlobalImpactSection";
import EvolutionSection from "@/components/animation/EvolutionSection";
import OurOngoingWorkSection from "@/components/animation/OurOngoingWorkSection";

const AnimationPage = () => {
  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 1: HERO BANNER COMPONENT
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <AnimationHero />
      <GlobalImpactSection />
      <EvolutionSection />
      <OurOngoingWorkSection />

     
      
    </>
  );
};

export default AnimationPage;