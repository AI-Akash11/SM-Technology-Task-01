import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionContainer from "../../ui/SectionContainer";

gsap.registerPlugin(ScrollTrigger);

const clients = [
  { id: 1, logo: '/logoipsum-icon8.svg' },
  { id: 2, logo: '/logoipsum-icon9.svg' },
  { id: 3, logo: '/logoipsum-icon10.svg' },
  { id: 4, logo: '/logoipsum-icon11.svg' },
  { id: 5, logo: '/logoipsum-icon12.svg' },
  { id: 6, logo: '/logoipsum-icon13.svg' },
  { id: 7, logo: '/logoipsum-icon14.svg' },
];

const HappyUsersSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Reveal the top section label
      gsap.from(sectionRef.current.querySelectorAll('.section-label'), {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 1.4,
        ease: 'power3.out',
      });

      // Staggered reveal for the logo cards
      gsap.from(sectionRef.current.querySelectorAll('.logo-card'), {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 80,
        opacity: 0,
        duration: 1.4,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.15
      });
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-[#f5f5f5]">
      <SectionContainer>

        {/* Section label Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12 px-2 md:px-4 section-label">
          <p className="text-[10px] md:text-[11px] font-semibold tracking-widest uppercase text-[#555]">Happy Users</p>
          <p className="text-[10px] md:text-[11px] font-medium tracking-widest text-[#888] uppercase hidden sm:block">
            ©2025 <span className="font-bold text-[#555]">CASE-THEMES™</span> STUDIO
          </p>
        </div>

        {/* Unified Logo Grid Wrapper */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          {/* Inner grid using 1px gap on a gray background to create perfect internal divider lines */}
          <div className="grid grid-cols-2 md:grid-cols-4 bg-gray-100 gap-px">
            {clients.map((client) => (
              <div key={client.id} className="logo-card bg-white flex items-center justify-center p-8 md:p-12 lg:p-16 h-full aspect-4/3 md:aspect-auto hover:bg-[#fafafa] transition-colors duration-300">
                <img
                  src={client.logo}
                  alt="client logo"
                  className="w-full h-auto max-w-[100px] lg:max-w-[120px] max-h-12 object-contain opacity-90 grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}

            {/* CTA tile (8th spot) */}
            <div className="logo-card bg-white flex flex-col items-center justify-center p-8 md:p-12 h-full aspect-4/3 md:aspect-auto cursor-pointer group hover:bg-[#fafafa] transition-colors duration-300">
              <p className="text-black/40 text-[9px] xl:text-[10px] font-bold tracking-[0.15em] uppercase mb-2 leading-snug text-center">Next can be you.</p>
              <p className="text-black text-[11px] xl:text-[12px] font-bold tracking-widest uppercase text-center group-hover:text-black/60 transition-colors">Let's talk</p>
            </div>
          </div>
        </div>

        {/* Big Interactive Banner Area */}
        <div className="mt-8 md:mt-10 group relative w-full h-[400px] md:h-[500px] lg:h-[650px] xl:h-[750px] rounded-2xl overflow-hidden cursor-pointer bg-black shadow-lg">
          
          {/* Base Image with Blur Animation */}
          <img 
            src="/faq-img14.jpg" 
            alt="Play Reel Preview" 
            className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:blur-[6px] group-hover:opacity-70 group-hover:scale-105"
          />
          
          {/* Floating animated Play Button */}
          {/* Starts at bottom-left, translates and animates to absolute center smoothly on hover */}
          <div className="absolute left-6 bottom-6 md:left-10 md:bottom-10 translate-x-0 translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:left-1/2 group-hover:bottom-1/2 group-hover:-translate-x-1/2 group-hover:translate-y-1/2 z-10 flex items-center gap-3 md:gap-4 bg-white rounded-full p-2 pr-6 md:pr-8 shadow-xl">
            {/* Dark Play Circle */}
            <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white" className="ml-1">
                <path d="M5 3l14 9-14 9V3z"/>
              </svg>
            </div>
            <span className="text-black text-[10px] md:text-[11px] font-bold tracking-widest uppercase">Play Reel</span>
          </div>

        </div>

      </SectionContainer>
    </section>
  );
};

export default HappyUsersSection;
