"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <section className="horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen relative selection:bg-brand-red selection:text-white bg-white flex overflow-hidden py-16 lg:py-0">
      {/* Background with thematic contrast */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/2 h-full opacity-[0.03] pointer-events-none">
          <div className="w-full h-full bg-gradient-to-r from-brand-red/20 to-transparent blur-3xl rounded-full" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row w-full">
        {/* Left Side: Contact Info */}
        <div className="w-full lg:w-1/2 p-6 sm:p-12 lg:p-20 flex flex-col justify-center">
          <h1 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-black mb-4 tracking-tighter text-black">GET IN <span className="text-brand-red">TOUCH</span></h1>
          <p className="text-gray-400 text-base sm:text-lg mb-8 lg:mb-12 max-w-md font-rajdhani">
            Whether you&apos;re a prospective student, a creative partner, or an industry expert, we&apos;d love to hear from you.
          </p>

          <div className="space-y-6 sm:space-y-10">
            <div className="flex gap-4 sm:gap-6">
              <div className="w-12 h-12 shrink-0 rounded-full bg-brand-red/10 flex items-center justify-center border border-brand-red/30">
                <MapPin className="text-brand-red w-5 h-5" />
              </div>
              <div>
                <h4 className="font-orbitron font-bold text-xs sm:text-sm tracking-widest text-brand-red mb-1 sm:mb-2 uppercase">Head Office</h4>
                <p className="text-gray-500 leading-relaxed font-rajdhani text-base sm:text-lg">
                  2nd Floor, Moople Institute,<br />
                  Salt Lake Sector V, Kolkata 700091
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-6">
              <div className="w-12 h-12 shrink-0 rounded-full bg-brand-red/10 flex items-center justify-center border border-brand-red/30">
                <Phone className="text-brand-red w-5 h-5" />
              </div>
              <div>
                <h4 className="font-orbitron font-bold text-xs sm:text-sm tracking-widest text-brand-red mb-1 sm:mb-2 uppercase">Call Us</h4>
                <p className="text-gray-500 font-rajdhani text-base sm:text-lg">+91 98765 43210</p>
                <p className="text-gray-500 font-rajdhani text-base sm:text-lg">+91 33 2456 7890</p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-6">
              <div className="w-12 h-12 shrink-0 rounded-full bg-brand-red/10 flex items-center justify-center border border-brand-red/30">
                <Mail className="text-brand-red w-5 h-5" />
              </div>
              <div>
                <h4 className="font-orbitron font-bold text-xs sm:text-sm tracking-widest text-brand-red mb-1 sm:mb-2 uppercase">Email Us</h4>
                <p className="text-gray-500 font-rajdhani text-base sm:text-lg">info@hitech animation.com</p>
                <p className="text-gray-500 font-rajdhani text-base sm:text-lg">admissions@hitech.com</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-8 lg:mt-16">
            {['FB', 'IG', 'LI', 'YT'].map((label, i) => (
              <a key={i} href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all text-[10px] font-bold tracking-widest text-gray-400">
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Online Admission Form */}
        <div className="w-full lg:w-1/2 bg-gray-50 text-black p-6 sm:p-12 lg:p-20 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gray-100">
          <div className="max-w-md mx-auto w-full bg-white p-6 sm:p-10 lg:p-12 rounded-[1.5rem] sm:rounded-[2rem] shadow-xl sm:shadow-2xl border border-gray-100">
            <h2 className="font-orbitron text-3xl font-black mb-2 tracking-tight text-black">ONLINE ADMISSION</h2>
            <p className="text-gray-400 mb-8 font-medium font-rajdhani">Fill in the details below to start your creative journey.</p>

            <form className="space-y-6">
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full border-b border-gray-100 py-3 focus:border-brand-red outline-none transition-colors font-rajdhani text-lg text-black bg-transparent"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full border-b border-gray-100 py-3 focus:border-brand-red outline-none transition-colors font-rajdhani text-lg text-black bg-transparent"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+91 00000 00000" 
                  className="w-full border-b border-gray-100 py-3 focus:border-brand-red outline-none transition-colors font-rajdhani text-lg text-black bg-transparent"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Select Course</label>
                <select className="w-full border-b border-gray-100 py-3 focus:border-brand-red outline-none transition-colors font-rajdhani text-lg bg-transparent text-black">
                  <option>3D Animation</option>
                  <option>Visual Effects (VFX)</option>
                  <option>Graphic & Web Design</option>
                  <option>UI/UX Design</option>
                </select>
              </div>

              <button className="w-full bg-brand-red text-white font-orbitron font-bold py-5 tracking-[0.2em] text-xs uppercase hover:bg-black transition-all group rounded-full shadow-lg hover:shadow-brand-red/20 mt-8">
                SUBMIT APPLICATION
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
