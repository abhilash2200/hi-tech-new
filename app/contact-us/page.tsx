"use client";

import React, { useState, useRef } from "react";

/* ========================= SVG ICONS ========================= */

const IconMapPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .93h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.74a16 16 0 006.17 6.17l1.17-1.17a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 7l10 7 10-7" />
  </svg>
);

const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const IconArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const IconSend = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconTwitterX = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const IconYouTube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.333.014 8.741 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

/* ========================= DATA ========================= */

const contactInfo = [
  {
    icon: <IconMapPin />,
    label: "Head Office",
    lines: ["2nd Floor, Moople Institute,", "Salt Lake Sector V, Kolkata 700091"],
    link: "https://maps.google.com",
    linkLabel: "Get Directions",
  },
  {
    icon: <IconPhone />,
    label: "Call Us",
    lines: ["+91 98765 43210", "+91 33 2456 7890"],
    link: "tel:+919876543210",
    linkLabel: "Call Now",
  },
  {
    icon: <IconMail />,
    label: "Email Us",
    lines: ["info@hitechanimation.com", "admissions@hitech.com"],
    link: "mailto:info@hitechanimation.com",
    linkLabel: "Send Email",
  },
  {
    icon: <IconClock />,
    label: "Working Hours",
    lines: ["Mon – Sat: 9:00 AM – 7:00 PM", "Sunday: Closed"],
    link: null,
    linkLabel: null,
  },
];

const socialLinks = [
  { icon: <IconTwitterX />, label: "Twitter / X", href: "https://twitter.com" },
  { icon: <IconYouTube />, label: "YouTube", href: "https://youtube.com" },
  { icon: <IconFacebook />, label: "Facebook", href: "https://facebook.com" },
  { icon: <IconInstagram />, label: "Instagram", href: "https://instagram.com" },
];

const courses = [
  "3D Animation",
  "Visual Effects (VFX)",
  "Graphic & Web Design",
  "UI / UX Design",
  "Motion Graphics",
  "Game Design",
];

/* ========================= BACKGROUND ORBS ========================= */

const BgOrbs = () => (
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
    <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="cg" width="52" height="52" patternUnits="userSpaceOnUse">
          <path d="M 52 0 L 0 0 0 52" fill="none" stroke="#a61d20" strokeWidth="0.7" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#cg)" />
    </svg>

    <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-brand-red/[0.07] blur-[80px]" />
    <div className="absolute -bottom-32 right-0 w-[400px] h-[400px] rounded-full bg-brand-red/[0.06] blur-[90px]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-brand-red/[0.04] blur-[60px]" />

    <svg className="absolute left-0 top-0 w-[600px] h-full opacity-[0.03]" viewBox="0 0 600 900" preserveAspectRatio="none">
      <line x1="0" y1="900" x2="600" y2="0" stroke="#a61d20" strokeWidth="90" />
    </svg>

   
  </div>
);

/* ========================= SUBMIT BUTTON ========================= */




const SubmitButton = ({ loading }: { loading: boolean }) => (
  <div className="relative w-full mt-3">
    <button
      type="submit"
      disabled={loading}
      className="contact-submit-btn relative w-full bg-brand-red text-white font-michroma font-bold py-4 sm:py-5 px-5 rounded-2xl text-[11px] sm:text-xs tracking-[0.15em] sm:tracking-[0.25em] uppercase shadow-lg shadow-brand-red/30 disabled:opacity-70 flex items-center justify-center gap-3 cursor-pointer"
    >
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 rounded-full bg-white/20 blur-sm pointer-events-none" />

      {loading ? (
        <span className="flex items-center justify-center gap-3 w-full">
          <svg className="animate-spin w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3" />
            <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
          SENDING…
        </span>
      ) : (
        <>
          <IconSend />

          <span className="whitespace-nowrap">
            SUBMIT APPLICATION
          </span>

          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </>
      )}
    </button>
  </div>
);




/* ========================= FORM CARD ========================= */

const FormCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          message: "",
        });
        formRef.current?.reset();
      }, 4500);
    }, 1600);
  };

  return (
    <div className="contact-form-card group relative w-full max-w-[520px] bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-gray-200/80 p-7 sm:p-10 overflow-hidden">

      {/* Static red circle + animated hover spread */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none z-0">
        <div className="contact-card-glow" />
      </div>

      {/* Form heading */}
      <div className="relative z-10 mb-7">
        <span
          className="contact-form-label inline-flex items-center gap-2 text-[9px] font-michroma tracking-[0.3em] uppercase text-brand-red mb-3 opacity-0"
          style={{ animationDelay: "1.65s" }}
        >
          <span className="w-4 h-px bg-brand-red inline-block" />
          Online Admission
        </span>

        <h2
          className="contact-form-heading font-orbitron text-2xl sm:text-3xl font-black tracking-tight text-black leading-tight opacity-0"
          style={{ animationDelay: "1.8s" }}
        >
          START YOUR <br />
          <span className="text-brand-red">CREATIVE JOURNEY</span>
        </h2>

        <p
          className="contact-form-sub font-rajdhani text-gray-400 text-sm mt-2 opacity-0"
          style={{ animationDelay: "1.95s" }}
        >
          Fill in the details below — we&apos;ll get back to you within 24 hours.
        </p>
      </div>

      {/* Success state */}
      {submitted ? (
        <div className="relative z-10 py-10 flex flex-col items-center text-center animate-[contactReveal_0.5s_ease_forwards]">
          <div className="w-16 h-16 rounded-full bg-green-500/10 border-2 border-green-500 flex items-center justify-center text-green-500 mb-5">
            <IconCheck />
          </div>

          <h3 className="font-orbitron text-lg font-bold text-black mb-2 tracking-tight">
            Application Received!
          </h3>

          <p className="font-rajdhani text-gray-500 text-sm max-w-xs">
            Thank you! Our admissions team will contact you shortly with enrollment details.
          </p>
        </div>
      ) : (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="relative z-10 space-y-5"
        >

          {/* Name + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            <div
              className="contact-form-field relative"
              style={{ animationDelay: "2.1s" }}
            >
              <label className={`absolute left-0 transition-all duration-200 pointer-events-none font-michroma text-[9px] tracking-[0.2em] uppercase ${
                focused === "name" || formData.name
                  ? "-top-4 text-brand-red"
                  : "top-3 text-gray-400 text-xs"
              }`}>
                Full Name
              </label>

              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                className="w-full border-b-2 border-gray-100 pt-5 pb-2 text-sm font-rajdhani text-black bg-transparent outline-none focus:border-brand-red transition-colors placeholder:text-transparent"
                placeholder="Full Name"
              />

              <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-red transition-all duration-300 ${
                focused === "name" ? "w-full" : "w-0"
              }`} />
            </div>

            <div
              className="contact-form-field relative"
              style={{ animationDelay: "2.2s" }}
            >
              <label className={`absolute left-0 transition-all duration-200 pointer-events-none font-michroma text-[9px] tracking-[0.2em] uppercase ${
                focused === "phone" || formData.phone
                  ? "-top-4 text-brand-red"
                  : "top-3 text-gray-400 text-xs"
              }`}>
                Phone No.
              </label>

              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocused("phone")}
                onBlur={() => setFocused(null)}
                className="w-full border-b-2 border-gray-100 pt-5 pb-2 text-sm font-rajdhani text-black bg-transparent outline-none focus:border-brand-red transition-colors placeholder:text-transparent"
                placeholder="+91 00000 00000"
              />

              <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-red transition-all duration-300 ${
                focused === "phone" ? "w-full" : "w-0"
              }`} />
            </div>
          </div>

          {/* Email */}
          <div
            className="contact-form-field relative"
            style={{ animationDelay: "2.3s" }}
          >
            <label className={`absolute left-0 transition-all duration-200 pointer-events-none font-michroma text-[9px] tracking-[0.2em] uppercase ${
              focused === "email" || formData.email
                ? "-top-4 text-brand-red"
                : "top-3 text-gray-400 text-xs"
            }`}>
              Email Address
            </label>

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
              className="w-full border-b-2 border-gray-100 pt-5 pb-2 text-sm font-rajdhani text-black bg-transparent outline-none focus:border-brand-red transition-colors placeholder:text-transparent"
              placeholder="john@example.com"
            />

            <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-red transition-all duration-300 ${
              focused === "email" ? "w-full" : "w-0"
            }`} />
          </div>

          {/* Course */}
          <div
            className="contact-form-field relative"
            style={{ animationDelay: "2.4s" }}
          >
            <label className="absolute -top-4 left-0 font-michroma text-[9px] tracking-[0.2em] uppercase text-brand-red pointer-events-none">
              Select Course
            </label>

            <div className="relative">
              <select
                name="course"
                required
                value={formData.course}
                onChange={handleChange}
                onFocus={() => setFocused("course")}
                onBlur={() => setFocused(null)}
                className="w-full border-b-2 border-gray-100 pt-5 pb-2 text-sm font-rajdhani text-black bg-transparent outline-none focus:border-brand-red transition-colors appearance-none cursor-pointer pr-8"
              >
                <option value="" disabled>Choose a programme…</option>
                {courses.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>

              <svg
                className="absolute right-1 top-6 w-3.5 h-3.5 text-gray-400 pointer-events-none"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-red transition-all duration-300 ${
              focused === "course" ? "w-full" : "w-0"
            }`} />
          </div>

          {/* Message */}
          <div
            className="contact-form-field relative"
            style={{ animationDelay: "2.5s" }}
          >
            <label className={`absolute left-0 transition-all duration-200 pointer-events-none font-michroma text-[9px] tracking-[0.2em] uppercase ${
              focused === "message" || formData.message
                ? "-top-4 text-brand-red"
                : "top-3 text-gray-400 text-xs"
            }`}>
              Message (optional)
            </label>

            <textarea
              name="message"
              rows={2}
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              className="w-full border-b-2 border-gray-100 pt-5 pb-2 text-sm font-rajdhani text-black bg-transparent outline-none focus:border-brand-red transition-colors resize-none placeholder:text-transparent"
              placeholder="Your message…"
            />

            <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-red transition-all duration-300 ${
              focused === "message" ? "w-full" : "w-0"
            }`} />
          </div>

          {/* Submit button */}
          <div
            className="contact-form-field"
            style={{ animationDelay: "2.6s" }}
          >
            <SubmitButton loading={loading} />
          </div>

          <p
            className="text-center font-rajdhani text-[11px] text-gray-400 leading-relaxed contact-form-field"
            style={{ animationDelay: "2.7s" }}
          >
            By submitting, you agree to our{" "}
            <a href="#" className="text-brand-red hover:underline">Privacy Policy</a>.
            We&apos;ll never share your data.
          </p>
        </form>
      )}
    </div>
  );
};

/* ========================= MAIN CONTACT PAGE ========================= */

const ContactPage = () => {
  return (
    <section className="horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen relative bg-[#FAFAF9] flex overflow-hidden">

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes contactReveal {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes contactRevealLeft {
          from {
            opacity: 0;
            transform: translateX(-35px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes contactRevealRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .contact-reveal-left {
          opacity: 0;
          animation: contactRevealLeft 0.8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .contact-reveal-right {
          opacity: 0;
          animation: contactRevealRight 0.9s cubic-bezier(.22,1,.36,1) forwards;
        }

        .contact-stagger {
          opacity: 0;
          animation: contactReveal 0.7s cubic-bezier(.22,1,.36,1) forwards;
        }

        .contact-form-label,
        .contact-form-heading,
        .contact-form-sub,
        .contact-form-field {
          animation: contactReveal 0.7s cubic-bezier(.22,1,.36,1) forwards;
        }

        .contact-card-glow {
          position: absolute;
          width: 170px;
          height: 170px;
          top: -65px;
          right: -65px;
          border-radius: 50%;
          background: rgba(166,29,32,0.07);
          transform: scale(1);
          transform-origin: top right;
          transition:
            transform 1.1s cubic-bezier(.22,1,.36,1),
            background 0.8s ease;
        }

        .contact-form-card:hover .contact-card-glow {
          transform: scale(5.5);
          background: rgba(166,29,32,0.045);
        }

        .contact-submit-btn {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .contact-submit-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            transparent 20%,
            rgba(255,255,255,0.3) 45%,
            transparent 70%
          );
          transform: translateX(-120%);
          transition: transform 0.75s ease;
          z-index: -1;
        }

        .contact-submit-btn:hover:not(:disabled)::before {
          transform: translateX(120%);
        }

        .contact-submit-btn:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 14px 30px rgba(166,29,32,0.28);
        }

        .contact-submit-btn:active:not(:disabled) {
          transform: translateY(1px) scale(0.98);
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-reveal-left,
          .contact-reveal-right,
          .contact-stagger,
          .contact-form-label,
          .contact-form-heading,
          .contact-form-sub,
          .contact-form-field {
            animation: none !important;
            opacity: 1 !important;
          }

          .contact-card-glow,
          .contact-submit-btn,
          .contact-submit-btn::before {
            transition: none !important;
          }
        }
      `}</style>

      {/* Background */}
      <BgOrbs />

      {/* Main Grid */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 xl:px-16 flex flex-col lg:flex-row h-full">

        {/* LEFT PANEL */}
        <div className="w-full lg:w-[42%] xl:w-[40%] flex flex-col justify-between py-10 lg:py-14 lg:pr-10 xl:pr-14">

          <div>
            {/* Eyebrow */}
            <span
              className="contact-eyebrow contact-reveal-left inline-flex items-center gap-2 text-[10px] font-michroma tracking-[0.3em] uppercase text-brand-red mb-5"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="w-6 h-px bg-brand-red inline-block" />
              Contact Us
            </span>

            {/* Heading */}
            <h1
              className="contact-headline contact-reveal-left font-orbitron text-4xl sm:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] font-black leading-[1.05] tracking-tighter text-black mb-4"
              style={{ animationDelay: "0.25s" }}
            >
              GET IN{" "}
              <span className="relative inline-block text-brand-red">
                TOUCH
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 120 8"
                  preserveAspectRatio="none"
                  style={{ strokeDasharray: 200 }}
                >
                  <path
                    d="M0 4 Q30 0 60 4 Q90 8 120 4"
                    stroke="#a61d20"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.5"
                    strokeDasharray="200"
                    className="contact-underline"
                  />
                </svg>
              </span>
            </h1>

            <p
              className="contact-subtext contact-reveal-left font-rajdhani text-gray-500 text-base sm:text-lg leading-relaxed max-w-sm mt-6"
              style={{ animationDelay: "0.4s" }}
            >
              Whether you&apos;re a prospective student, creative partner, or industry expert — we&apos;d love to hear from you.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-10 lg:mt-0 space-y-3">
            {contactInfo.map((item, index) => (
              <div
                key={item.label}
                className="contact-stagger group flex gap-4 items-start p-4 rounded-2xl border border-transparent hover:border-brand-red/15 hover:bg-white hover:shadow-lg hover:shadow-brand-red/8 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${0.65 + index * 0.15}s` }}
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-brand-red/8 border border-brand-red/20 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red group-hover:scale-105 transition-all duration-300">
                  {item.icon}
                </div>

                <div className="min-w-0">
                  <p className="font-michroma text-[10px] tracking-[0.25em] uppercase text-brand-red mb-1">
                    {item.label}
                  </p>

                  {item.lines.map((line) => (
                    <p key={line} className="font-rajdhani text-gray-700 text-sm sm:text-base leading-snug">
                      {line}
                    </p>
                  ))}

                  {item.link && (
                    <a
                      href={item.link}
                      target={item.link.startsWith("tel:") || item.link.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-1 text-[10px] font-michroma tracking-widest uppercase text-brand-red/60 hover:text-brand-red group/lk transition-colors"
                    >
                      {item.linkLabel}
                      <span className="group-hover/lk:translate-x-1 transition-transform">
                        <IconArrowRight />
                      </span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div
            className="mt-8 lg:mt-0 contact-reveal"
            style={{ animationDelay: "1.35s" }}
          >
            <p className="font-michroma text-[9px] tracking-[0.3em] uppercase text-gray-400 mb-3">
              Follow Us
            </p>

            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((s, index) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  style={{ animationDelay: `${1.45 + index * 0.1}s` }}
                  className="contact-stagger group w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:border-brand-red hover:bg-brand-red hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-brand-red/30"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:flex items-center justify-center w-px">
          <div className="h-[70%] w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
        </div>

        <div className="lg:hidden h-px mx-6 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        {/* RIGHT PANEL */}
        <div className="flex-1 flex items-center justify-center py-10 lg:py-14 lg:pl-10 xl:pl-14">

          <div
            className="w-full max-w-[520px] contact-reveal-right"
            style={{ animationDelay: "1.5s" }}
          >
            <FormCard />

            {/* Badge Strip */}
            <div
              className="flex items-center justify-center gap-4 sm:gap-6 mt-5 flex-wrap contact-reveal"
              style={{ animationDelay: "2.8s" }}
            >
              {["100% Secure", "No Spam", "Quick Reply"].map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 font-rajdhani text-[11px] text-gray-400 uppercase tracking-widest"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="w-3 h-3 text-brand-red shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Location Pill */}
      <div className="absolute bottom-6 left-6 hidden xl:flex items-center gap-2 bg-white border border-gray-100 shadow-lg rounded-full px-4 py-2 text-xs font-michroma tracking-widest uppercase text-gray-500 hover:border-brand-red/30 hover:text-brand-red transition-colors">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
        Kolkata &amp; Mumbai
      </div>
    </section>
  );
};

export default ContactPage;