"use client";

import React from "react";
import { ArrowUpRight, Calendar, User } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of 3D Animation in India",
    excerpt: "Exploring how AI and real-time rendering are changing the landscape of Indian animation studios.",
    date: "May 12, 2024",
    author: "Arjun Sharma",
    category: "INDUSTRY"
  },
  {
    title: "Mastering the Art of Architectural Walkthroughs",
    excerpt: "A deep dive into the lighting and texturing techniques that create photorealistic virtual tours.",
    date: "April 28, 2024",
    author: "Rohan Gupta",
    category: "TUTORIAL"
  },
  {
    title: "Why Explainer Videos are Essential for Startups",
    excerpt: "How a simple 60-second video can increase your landing page conversion rate by 80%.",
    date: "March 15, 2024",
    author: "Priya Das",
    category: "MARKETING"
  }
];

const BlogPage = () => {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="horizontal-section shrink-0 w-screen h-screen relative flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,_#a61d2008_0%,_transparent_40%)]" />
        <div className="relative z-10 text-center px-20">
          <span className="inline-block px-4 py-1 bg-brand-red/10 text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase rounded-full mb-6">LATEST INSIGHTS</span>
          <h1 className="font-orbitron text-[9vw] font-black tracking-tighter leading-none mb-6 text-black">
            CREATIVE <br /> <span className="text-brand-red">JOURNAL</span>
          </h1>
          <p className="font-rajdhani text-2xl tracking-[0.4em] text-gray-400 uppercase max-w-4xl mx-auto">
            Insights, tutorials, and news from the frontlines of digital production.
          </p>
        </div>

        <div className="absolute bottom-10 right-10 flex items-center gap-4 text-gray-200">
          <span className="text-[10px] font-bold tracking-widest uppercase text-gray-300">Scroll to Read</span>
          <div className="w-12 h-px bg-gray-100" />
        </div>
      </section>

      {/* Section 2: Blog Feed */}
      <section className="horizontal-section shrink-0 w-screen h-screen bg-white text-black p-20 flex items-center border-l border-gray-100">
        <div className="container mx-auto">
           <div className="grid grid-cols-3 gap-8">
              {blogPosts.map((post, i) => (
                <div key={i} className="group cursor-pointer">
                   <div className="aspect-video bg-gray-50 rounded-3xl overflow-hidden mb-8 border border-gray-100 relative shadow-sm group-hover:shadow-2xl transition-all duration-500">
                      <div className="absolute inset-0 bg-brand-red/5 group-hover:opacity-0 transition-opacity" />
                      <div className="absolute top-6 left-6 px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg text-[10px] font-bold tracking-widest text-brand-red shadow-sm">{post.category}</div>
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                            <ArrowUpRight className="text-brand-red" />
                         </div>
                      </div>
                   </div>
                   <div className="flex gap-6 mb-4">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                         <Calendar size={12} className="text-brand-red" /> {post.date}
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                         <User size={12} className="text-brand-red" /> {post.author}
                      </div>
                   </div>
                   <h3 className="font-orbitron text-2xl font-black mb-4 group-hover:text-brand-red transition-colors leading-tight">{post.title}</h3>
                   <p className="text-gray-500 font-rajdhani text-lg line-clamp-2">{post.excerpt}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Section 3: Subscription */}
      <section className="horizontal-section shrink-0 w-screen h-screen bg-gray-50 text-black p-20 flex items-center border-l border-gray-100">
        <div className="container mx-auto max-w-4xl text-center">
           <span className="text-brand-red font-bold text-[10px] tracking-widest uppercase mb-4 block">STAY UPDATED</span>
           <h2 className="font-orbitron text-6xl font-black mb-12 tracking-tight uppercase">Join our <br /> <span className="text-brand-red">Newsletter</span></h2>
           <form className="relative max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full px-10 py-8 rounded-full bg-white border border-gray-100 shadow-sm focus:border-brand-red outline-none font-rajdhani text-xl"
              />
              <button className="absolute right-4 top-4 bottom-4 px-10 bg-brand-red text-white font-orbitron font-bold text-xs tracking-widest uppercase rounded-full hover:bg-black transition-all">
                SUBSCRIBE
              </button>
           </form>
           <p className="mt-8 text-gray-400 font-rajdhani">We respect your privacy. No spam, ever.</p>
        </div>
      </section>

      {/* Section 4: Featured Video Section */}
      <section className="horizontal-section shrink-0 w-screen h-screen bg-white p-20 flex items-center border-l border-gray-100 relative overflow-hidden">
        <div className="container mx-auto flex gap-24 items-center">
           <div className="w-1/2">
              <div className="aspect-video bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl relative group">
                 <div className="absolute inset-0 bg-brand-red/10 animate-pulse" />
                 <div className="w-full h-full flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-brand-red">
                       <ArrowUpRight size={32} />
                    </div>
                 </div>
              </div>
           </div>
           <div className="w-1/2">
              <span className="text-brand-red font-bold text-[10px] tracking-widest uppercase mb-4 block">FEATURED VIDEO</span>
              <h3 className="font-orbitron text-5xl font-black mb-8 tracking-tight uppercase">Inside the <br /> <span className="text-brand-red">Studio</span></h3>
              <p className="text-gray-500 text-2xl leading-relaxed font-rajdhani mb-10">
                 Watch our latest studio tour and see how we bring magic to life every single day.
              </p>
              <button className="px-12 py-5 border-2 border-brand-red text-brand-red font-orbitron font-bold text-xs tracking-widest uppercase rounded-full hover:bg-brand-red hover:text-white transition-all">
                WATCH NOW
              </button>
           </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
