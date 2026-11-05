"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

// Actual 76 team member filenames from public/assets/team/
const FILE_NAMES = [
  "abhaykant-jha", "abhijeet-chakraborty", "aloke-naskar", "amit-kumar", "amit-pal",
  "anisha-roy", "ankush-sadhukan", "anurag-chirimar", "anutosh-dutta", "arnab-chatterjee",
  "arun-thander", "arup-chakraborty", "asish-thappar", "bidisha-karmakar", "biplab-banerjee",
  "chandan-jana", "chandan-maity", "chinmoy-swarnakar", "deep-kundu", "dip-halder",
  "golam-mortaja", "gourab-kundu", "gourav-dey", "indrajeet-de", "joydeep-sarkar",
  "koushik-goswami", "koushik-pramanik", "krisanu-samanta", "mahesh-sanpui", "manas-kumar",
  "manish-das", "manoj-kumar", "mita-paul", "mriganka-das", "neha-saraf",
  "nilabjo-biswas", "pikaso-bhattacharya", "pramiti-porel", "prashant-chopra", "pratik-das",
  "pritam-sardabhikari", "priyanka-mahal", "raju-karmakar", "rakesh-tiwari", "ranajit-mondal",
  "ranit-bar", "ranjit-mandal", "reshmi-chowdhary", "ria-sinha", "ridhdhiprasanna-hal",
  "rohit-mukherjee", "rupa-kumari", "saikat-malick", "sajal-barai", "sajal-dasgupta",
  "sanjay-mandal", "sanjib-ganguly", "saptarshi-chatterjee", "sarat-saha", "shayani-thakuta",
  "soikat-parui", "soubhik-sasmal", "soumyakanti-adhikar", "sounava-jana", "subhajit-das",
  "subhro-chakraborty", "sudipta-bhakta", "sudipto-saha", "sujoy-adhikary", "suman-purkait",
  "suparna-banerjee", "supravat-guha", "swagata-kushary", "tanmoy-dalui", "tushar-pal",
  "viswajeet-shinde"
];

const formatName = (fileName: string) => {
  return fileName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const generateTeamMembers = () => {
  return FILE_NAMES.map((file, i) => {
    const name = formatName(file);
    const avatar = `/assets/team/${file}.webp`;
    
    // Categorize departments deterministically
    let dept = "Production";
    let role = "";
    
    if (i < 8) {
      dept = "Leadership";
      const leadershipRoles = [
        "Managing Director",
        "Executive Director",
        "Chief Operations Officer",
        "Head of Academics",
        "Creative Advisor",
        "Finance Director",
        "Director of Communications",
        "Head of Production"
      ];
      role = leadershipRoles[i % leadershipRoles.length];
    } else if (i % 3 === 0) {
      dept = "Faculty";
      const facultyRoles = [
        "Senior 3D Animation Mentor",
        "VFX Compositing Specialist",
        "Game Art & Design Instructor",
        "UI/UX Design Faculty",
        "Digital Painting Instructor",
        "Classical Animation Lecturer"
      ];
      role = facultyRoles[i % facultyRoles.length];
    } else if (i % 3 === 1) {
      dept = "Production";
      const productionRoles = [
        "Lead Animator",
        "Senior VFX Artist",
        "3D Generalist",
        "Lighting & Rendering Lead",
        "Rigging TD",
        "Texture & Asset Artist"
      ];
      role = productionRoles[i % productionRoles.length];
    } else {
      dept = "Operations";
      const operationsRoles = [
        "Senior Admissions Counsellor",
        "Placement Officer",
        "System & Network Administrator",
        "Center Admin Lead",
        "Student Relations Manager",
        "Operations Specialist"
      ];
      role = operationsRoles[i % operationsRoles.length];
    }

    return { name, role, dept, avatar };
  });
};

const TEAM_MEMBERS = generateTeamMembers();

const AboutUs = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Hook to capture vertical wheel events and scroll the grid vertically inside
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;

      // Stop propagation if we can actually scroll vertically in the scrolled direction
      if (
        (isScrollingDown && Math.ceil(scrollTop + clientHeight) < scrollHeight) ||
        (isScrollingUp && scrollTop > 0)
      ) {
        // Stop propagation to prevent HorizontalWrapper window wheel scroll from hijacking
        e.stopPropagation();
      }
    };

    const handleTouch = (e: TouchEvent) => {
      e.stopPropagation();
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouch, { passive: true });
    container.addEventListener("touchmove", handleTouch, { passive: true });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouch);
      container.removeEventListener("touchmove", handleTouch);
    };
  }, []);

  return (
    <>
      {/* Section 1: Hero */}
      <section className="horizontal-section shrink-0 w-full lg:w-screen h-screen relative flex items-center justify-center overflow-hidden bg-black text-white">
        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(198,99,43,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(198,99,43,0.03)_1px,transparent_1px)] bg-[size:60px_60px] z-0" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#C6632B]/15 via-transparent to-transparent z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_20%,rgba(0,0,0,0.9)_100%)] z-10" />
        
        <div className="relative z-20 px-6 lg:px-20 max-w-6xl text-center">
          <span className="text-[#C6632B] font-orbitron font-bold tracking-[0.45em] text-xs uppercase mb-6 block drop-shadow-[0_0_15px_rgba(198,99,43,0.4)]">
            Our Legacy
          </span>
          <h1 className="font-michroma text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-none tracking-tighter uppercase select-none">
            Nurturing <span className="text-[#C6632B] italic drop-shadow-[0_0_25px_rgba(198,99,43,0.2)]">Creativity</span>,<br />
            Defining the Future.
          </h1>
          <p className="font-rajdhani text-base lg:text-2xl tracking-[0.25em] text-gray-400 uppercase font-medium max-w-3xl mx-auto leading-relaxed">
            Bridging artistic passion and studio-ready professional excellence since inception.
          </p>
        </div>

        <div className="absolute bottom-12 right-12 flex items-center gap-4 text-gray-400 z-20 animate-pulse">
          <span className="text-[10px] font-orbitron font-bold tracking-widest uppercase">Scroll to Discover</span>
          <div className="w-16 h-px bg-gray-600" />
        </div>
      </section>

      {/* Section 2: Legacy Section */}
      <section className="horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen bg-[#FDFCFB] text-black p-6 sm:p-12 lg:p-20 flex items-center border-l border-gray-100 py-20 lg:py-0">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-1.5 rounded-none border border-[#C6632B]/30 text-[#C6632B] text-[10px] font-orbitron font-black tracking-widest uppercase mb-8">
              PIONEERING MEDIA EDUCATION
            </div>
            <h2 className="font-michroma text-3xl sm:text-4xl lg:text-5xl font-black mb-6 lg:mb-8 leading-tight tracking-tight uppercase">
              Moople Institute
            </h2>
            <div className="space-y-6 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed font-rajdhani font-medium">
              <p>
                Moople Institute of Animation and Design is a premiere educational initiative, committed to bridging the gap between artistic passion and professional expertise in high-end animation production.
              </p>
              <p>
                Our journey began with a single vision: to empower the next generation of digital artists. Today, with over 15+ centers of excellence, we stand as a beacon of quality education across India, backed by our state-of-the-art production facility.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 lg:gap-12 mt-8 lg:mt-12 pt-8 border-t border-gray-100">
              {[
                { label: "Centers", val: "15+" },
                { label: "Alumni", val: "10k+" },
                { label: "Placement", val: "95%" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl lg:text-5xl font-orbitron font-black text-[#C6632B]">{stat.val}</div>
                  <div className="text-[9px] font-bold tracking-widest text-gray-400 uppercase mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/2 relative">
            <div className="aspect-square bg-gray-50 rounded-none overflow-hidden border border-black/5 p-12 group hover:border-[#C6632B]/20 transition-all duration-700">
              <div className="w-full h-full bg-white border border-black/5 flex items-center justify-center relative shadow-[6px_6px_0px_0px_rgba(198,99,43,0.1)] group-hover:shadow-[10px_10px_0px_0px_rgba(198,99,43,0.2)] transition-all duration-500 overflow-hidden">
                {/* Embedded dynamic wireframe design */}
                <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity">
                  <svg className="w-[85%] h-[85%] text-[#C6632B]/20" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"/>
                    <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="1"/>
                    <line x1="50" y1="200" x2="350" y2="200" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
                    <line x1="200" y1="50" x2="200" y2="350" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
                    <rect x="120" y="120" width="160" height="160" stroke="currentColor" strokeWidth="1"/>
                    <path d="M120 200 L200 120 L280 200 L200 280 Z" stroke="#C6632B" strokeWidth="1.5" opacity="0.6"/>
                    <text x="210" y="70" fill="#C6632B" fontSize="8" fontFamily="monospace" letterSpacing="1" opacity="0.8">GRID: 3D_MODEL_ALIGN</text>
                    <text x="210" y="340" fill="#C6632B" fontSize="8" fontFamily="monospace" letterSpacing="1" opacity="0.8">LOC: 22.5726° N</text>
                  </svg>
                </div>
                <span className="font-orbitron font-black text-gray-100 text-[12vw] select-none z-10 transition-transform group-hover:scale-110 duration-700">M</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Director's Message */}
      <section className="horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen bg-black text-white p-6 sm:p-12 lg:p-20 flex items-center border-l border-white/5 py-20 lg:py-0">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          <div className="hidden lg:block lg:w-1/3">
            <div className="aspect-[3/4] bg-[#0A0A0B] rounded-none overflow-hidden border border-white/5 hover:border-[#C6632B]/40 transition-all duration-500 shadow-[0_15px_50px_rgba(0,0,0,0.8)] relative group">
              <Image 
                src="/assets/about/d-1.jpg" 
                alt="Director Subrata Roy" 
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-right filter grayscale group-hover:grayscale-0 transition-all duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-95 flex items-end p-8">
                 <div>
                    <h4 className="font-michroma text-lg font-bold uppercase text-white tracking-wider">Subrata Roy</h4>
                    <p className="text-[10px] font-orbitron font-bold text-[#C6632B] uppercase tracking-widest mt-1">Founder & Director</p>
                 </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3">
            <span className="text-[#C6632B] font-orbitron font-bold text-xs tracking-[0.3em] uppercase mb-4 block">LEADERSHIP</span>
            <h3 className="font-michroma text-3xl sm:text-4xl lg:text-5xl font-black mb-6 lg:mb-10 tracking-tight uppercase">
              Director&apos;s <span className="text-[#C6632B] italic">Message</span>
            </h3>
            <div className="space-y-6 lg:space-y-8 text-gray-300 text-base sm:text-xl lg:text-2xl leading-relaxed font-rajdhani italic font-medium">
              <p className="relative">
                <span className="absolute -left-6 lg:-left-10 -top-10 lg:-top-12 text-6xl lg:text-[10rem] text-[#C6632B]/10 font-serif select-none pointer-events-none">&quot;</span>
                At Hi-Tech Animation, we believe that education must evolve with the industry. Our goal is to nurture artists who think fearlessly, execute with discipline, and are ready from day one to join world-class animation studios.
              </p>
              <p className="not-italic text-xs sm:text-sm lg:text-base text-gray-500 leading-relaxed font-sans border-l-2 border-[#C6632B]/20 pl-4 lg:pl-6">
                Every classroom, production lab, and mentorship session is designed to mirror real production pipelines. Under my leadership, our academic and studio divisions are committed to giving students not just software skills, but a creative mindset that stays with them throughout their careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Mission & Vision */}
      <section className="horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen bg-[#FDFCFB] p-6 sm:p-12 lg:p-20 flex items-center border-l border-gray-100 relative overflow-hidden text-black py-20 lg:py-0">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none select-none hidden lg:block">
           <span className="font-orbitron text-[35vw] font-black text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">STUDIO</span>
        </div>
        
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-24 relative z-10">
          
          <div className="bg-white/80 backdrop-blur-md border border-black/5 p-8 lg:p-14 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.02)] hover:shadow-[10px_10px_0px_0px_rgba(198,99,43,0.1)] hover:border-[#C6632B]/30 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute right-6 top-6 text-5xl lg:text-7xl font-orbitron font-black text-black/5 group-hover:text-[#C6632B]/10 transition-colors pointer-events-none">01</div>
            <div className="w-12 h-[2px] bg-[#C6632B] mb-6 lg:mb-8 group-hover:w-20 transition-all duration-500" />
            <h3 className="font-michroma text-xl lg:text-3xl font-black tracking-tight uppercase mb-4 lg:mb-6">Our <span className="text-[#C6632B]">Vision</span></h3>
            <p className="text-gray-600 text-sm sm:text-lg lg:text-xl leading-relaxed font-rajdhani font-medium">
              To be the global leader in multimedia education, empowering artists to shape the future of visual storytelling through innovation, technology, and unyielding creativity.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-md border border-black/5 p-8 lg:p-14 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.02)] hover:shadow-[10px_10px_0px_0px_rgba(198,99,43,0.1)] hover:border-[#C6632B]/30 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute right-6 top-6 text-5xl lg:text-7xl font-orbitron font-black text-black/5 group-hover:text-[#C6632B]/10 transition-colors pointer-events-none">02</div>
            <div className="w-12 h-[2px] bg-[#C6632B] mb-6 lg:mb-8 group-hover:w-20 transition-all duration-500" />
            <h3 className="font-michroma text-xl lg:text-3xl font-black tracking-tight uppercase mb-4 lg:mb-6">Our <span className="text-[#C6632B]">Mission</span></h3>
            <p className="text-gray-600 text-sm sm:text-lg lg:text-xl leading-relaxed font-rajdhani font-medium">
              To provide world-class training that merges technical proficiency with artistic vision, ensuring our students are not just industry-ready, but industry-leading.
            </p>
          </div>

        </div>
      </section>

      {/* Section 5: Team Section */}
      <section className="horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen bg-black text-white p-6 sm:p-12 lg:p-20 flex items-center border-l border-white/5 relative py-20 lg:py-0">
        {/* Subtle grid backdrop for team */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.007)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.007)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
        
        <div className="container mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 w-full h-full justify-center relative z-10">
          
          {/* Left panel: Info Panel */}
          <div className="w-full lg:w-[22%] flex flex-col justify-between py-4 lg:py-6 border-b lg:border-b-0 lg:border-r border-white/5 pb-6 lg:pb-0 lg:pr-10">
            <div>
              <span className="text-[#C6632B] font-orbitron font-bold text-xs tracking-[0.3em] uppercase block mb-2 lg:mb-3">
                Crew & Faculty
              </span>
              <h2 className="font-michroma text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-none mb-4 lg:mb-6">
                Meet the<br />Minds
              </h2>
              <p className="font-rajdhani text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed tracking-wide font-medium mt-2">
                The full studio production team, directors, specialists, and academic instructors powering Hi-Tech Animation&apos;s legacy.
              </p>
            </div>

            {/* Counts & Details */}
            <div className="hidden lg:block pt-6 border-t border-white/5 text-gray-500 font-rajdhani text-sm">
              <p className="font-medium">
                Unified Crew roster containing <span className="text-[#C6632B] font-bold">{TEAM_MEMBERS.length}</span> active members.
              </p>
              <p className="mt-3 text-xs leading-relaxed text-gray-600">
                Use your mouse wheel or swipe up/down inside the grid to explore the full team vertically.
              </p>
            </div>
          </div>

          {/* Right panel: Vertical Grid Container */}
          <div className="w-full lg:w-[78%] flex flex-col justify-center mt-6 lg:mt-0">
            <div 
              ref={scrollRef}
              className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 overflow-y-auto max-h-[60vh] lg:max-h-[75vh] py-2 pr-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-thumb]:hover:bg-[#C6632B]/50"
            >
              {TEAM_MEMBERS.map((member, index) => (
                <div 
                  key={index}
                  className="bg-[#080809] border border-white/5 p-3 flex flex-col items-center justify-between text-center relative group hover:border-[#C6632B]/30 transition-all duration-300 shadow-xl overflow-hidden w-full h-[240px] sm:h-[300px] lg:h-[380px]"
                >
                  {/* Glowing Tech Corner Accent Brackets */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#C6632B] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#C6632B] opacity-0 group-hover:opacity-100 transition-all duration-300" />
 
                  {/* Portrait Avatar */}
                  <div className="relative w-full flex-1 min-h-0 overflow-hidden bg-[#111] border border-white/5 p-1 mb-2.5 lg:mb-4 transition-all duration-500 group-hover:scale-105">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  {/* Member Details */}
                  <div className="w-full mt-1 lg:mt-2 z-10">
                    <span className="inline-block text-[7px] lg:text-[8px] font-orbitron font-bold uppercase tracking-widest text-[#C6632B] bg-[#C6632B]/5 px-2 py-0.5 lg:px-2.5 lg:py-1 mb-1.5 lg:mb-2.5">
                      {member.dept}
                    </span>
                    <h4 className="font-orbitron font-bold text-xs lg:text-base text-white tracking-wide leading-tight group-hover:text-[#C6632B] transition-colors truncate">
                      {member.name}
                    </h4>
                    <p className="font-rajdhani text-[9px] lg:text-xs text-gray-500 font-semibold uppercase tracking-wider mt-0.5 lg:mt-1 truncate">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
        
        {/* Scroll footer tag */}
        <div className="absolute bottom-12 right-12 flex items-center gap-4 text-gray-600 z-10 animate-pulse pointer-events-none hidden sm:flex">
          <span className="text-[10px] font-orbitron font-bold tracking-widest uppercase">END OF PAGE</span>
          <div className="w-16 h-px bg-gray-800" />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
