"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Play, Cpu, Box, Layers, Zap, Star, Trophy, Users, Globe } from "lucide-react";

import Animation3dProjectsSection from "@/components/3danimation/Animation3dProjectsSection";
import Animation3dHero from "@/components/3danimation/Animation3dHero";


const AnimationPage = () => {
  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 1: HERO BANNER COMPONENT
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <Animation3dHero />
      <Animation3dProjectsSection />
    </>
  );
};

export default AnimationPage;