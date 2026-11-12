"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of 3D Animation",
    date: "26 June 2023",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content.",
  },
  {
    title: "AI in Creative Content",
    date: "26 Mar 2023",
    description: "How artificial intelligence is reshaping the landscape of digital media.",
  },
];

const navLinks = [
  { label: "Animation", href: "/animation" },
  { label: "Walkthrough", href: "/walkthrough" },
  { label: "Educational Tech", href: "/educational-tech" },
  { label: "Explainer Video", href: "/explainer-video" },
  { label: "AI Content", href: "/ai-content" },
];

const secondaryLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact-us" },
];

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuOverlay = ({ isOpen, onClose }: MenuOverlayProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  const content = (
    <>
      {/* Backdrop overlay (dark blur background behind sheet) */}
      <div 
        onClick={onClose}
        className={`fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Top Sheet Panel (Slides down from top) */}
      <div 
        className={`fixed top-0 left-0 w-full z-[9999] bg-[#0B0A0F] border-b border-white/10 text-white p-8 md:p-16 transition-all duration-500 ease-out transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } overflow-y-auto max-h-[85vh] scrollbar-hide`}
      >
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 p-3 hover:rotate-90 transition-transform cursor-pointer bg-white/5 hover:bg-white/10 rounded-full"
        >
          <X className="w-5 h-5 text-[#51EDB2]" />
        </button>

        {/* Brand Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#51EDB2]/5 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-pink-500/5 blur-[80px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-7xl mx-auto relative z-10 pt-4">
          
          {/* COLUMN 1: Brand & Secondary Links */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="mb-6 lg:mb-0">
              <div className="flex items-center gap-1.5 font-orbitron font-black text-lg lg:text-xl tracking-[0.25em] text-white mb-4">
                <div className="relative h-12 lg:h-16 w-auto min-w-[150px] lg:min-w-[200px] transition-all duration-300">
            <img
              src="/assets/logo.png"
              alt="Hi-Tech Animation Logo"
              className="h-full w-auto object-contain"
            />
          </div>
              </div>
              <p className="font-rajdhani text-xs text-white/50 uppercase tracking-wider mb-8 max-w-xs leading-relaxed font-semibold">
                We strive to inspire the world to create and experience premium visual content on an unprecedented scale.
              </p>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-3.5">
                {secondaryLinks.map((link) => (
                  <a 
                    key={link.label} 
                    href={link.href} 
                    className="text-xs font-rajdhani font-bold uppercase tracking-wider text-white/60 hover:text-[#51EDB2] transition-colors"
                    onClick={onClose}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 2: Main Navigation Links */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-x border-white/10 pt-8 lg:pt-0 lg:px-12">
            <p className="text-[10px] font-orbitron font-bold tracking-[0.3em] text-[#51EDB2] uppercase mb-6">
              Main Programs
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
              {navLinks.map((link, idx) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="group flex items-center gap-4 cursor-pointer"
                  onClick={onClose}
                >
                  <span className="text-lg font-orbitron font-black text-white/20 group-hover:text-[#51EDB2] transition-colors">
                    0{idx + 1}
                  </span>
                  <span className="text-base font-orbitron font-black tracking-tight text-white group-hover:translate-x-2 transition-transform group-hover:text-[#51EDB2]">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 3: Latest Blogs */}
          <div className="lg:col-span-3 border-t lg:border-t-0 pt-8 lg:pt-0">
            <p className="text-[10px] font-orbitron font-bold tracking-[0.3em] text-pink-500 uppercase mb-6">
              Latest from Blog
            </p>
            <div className="space-y-6">
              {blogPosts.map((post) => (
                <div key={post.title} className="group cursor-pointer flex flex-col gap-1.5">
                  <span className="text-[9px] text-pink-500 font-rajdhani font-bold tracking-widest uppercase">
                    {post.date}
                  </span>
                  <h4 className="text-xs font-orbitron font-black tracking-tight text-white group-hover:text-pink-500 transition-colors leading-snug">
                    {post.title}
                  </h4>
                  <p className="text-white/40 text-[10px] font-rajdhani uppercase tracking-wider leading-relaxed truncate max-w-xs">
                    {post.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );

  return createPortal(content, document.body);
};

export default MenuOverlay;
