"use client";

import React from "react";
import { usePathname } from "next/navigation";

const MasterFooter = () => {
  const pathname = usePathname();
  const isLightPage = pathname === "/career";

  return (
    <footer
      className={`block lg:hidden w-full py-5 px-4 text-center border-t transition-colors duration-300 z-40 relative ${
        isLightPage
          ? "bg-[#FAF9F6] text-gray-600 border-black/10"
          : "bg-[#0A0B0E] text-gray-400 border-white/10"
      }`}
    >
      <p className="font-rajdhani text-xs sm:text-sm font-medium tracking-wider">
        Copyright Ⓒ 2026 hitechanimation.com All rights reserved.
      </p>
    </footer>
  );
};

export default MasterFooter;
