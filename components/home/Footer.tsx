"use client";

import React from "react";
import { Mail, Globe, MessageSquare } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="horizontal-section shrink-0 w-full lg:w-[35vw] lg:min-w-[500px] h-auto lg:h-screen relative flex items-center justify-center bg-black overflow-visible lg:overflow-hidden py-10 lg:py-0">

      <div className="w-full max-w-md lg:max-w-[85%] px-4 py-4 sm:px-6 font-michroma flex flex-col justify-center h-auto lg:h-full lg:max-h-screen lg:overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

        {/* 1. Header Info */}
        <div className="mb-6">
          <h2 className="text-white text-xl lg:text-3xl font-bold mb-3 tracking-tight">
            Who We Are
          </h2>
          <p className="text-white text-xs lg:text-base leading-relaxed opacity-90 font-medium uppercase">
            Hi-Tech Animation Is An India-Based Animation Production Studio With A State-Of-The-Art Production Facility With Offices Located In Kolkata And Mumbai.
          </p>
        </div>

        {/* 2. Form Section */}
        <div className="mb-6">
          <h3 className="text-white text-[10px] lg:text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Keep Up To Date
          </h3>

          {/* Gradient Border Card Wrapper */}
          <div className="animate-border-beam p-[1px] rounded-xl shadow-2xl">
            <div className="bg-[#1A1A1A] rounded-xl p-4 sm:p-6 md:p-8">
              <form className="space-y-8 lg:space-y-10">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/80 focus:border-white outline-none transition-all text-base lg:text-lg"
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/80 focus:border-white outline-none transition-all text-base lg:text-lg"
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Phone No."
                    className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/80 focus:border-white outline-none transition-all text-base lg:text-lg"
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Course"
                    className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/80 focus:border-white outline-none transition-all text-base lg:text-lg"
                  />
                </div>

                <button className="text-white text-base lg:text-xl font-bold uppercase tracking-[0.2em] hover:text-cyan-400 transition-all pt-1">
                  Apply Now
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* 3. Social Links List */}
        <div className="w-full max-w-md lg:max-w-none space-y-0">
          {[
            { Icon: MessageSquare, label: "Twitter" },
            { Icon: Globe, label: "Youtube" },
            { Icon: Mail, label: "Facebook" },
          ].map(({ Icon, label }) => (
            <div key={label} className="border-t border-white/10 py-2.5 flex items-center gap-4 group cursor-pointer">
              {Icon && <Icon className="w-5 h-5 text-white" />}
              <span className="text-white text-xs lg:text-sm font-bold tracking-widest uppercase group-hover:translate-x-2 transition-transform">
                {label}
              </span>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>

      </div>

    </section>
  );
};

export default ContactSection;


