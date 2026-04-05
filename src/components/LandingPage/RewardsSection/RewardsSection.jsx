import React, { useEffect, useRef } from 'react';
import SectionContainer from "../../ui/SectionContainer";

const awards = [
  { title: 'BEST DESIGNER AWARDS', company: 'AWWWARDS', year: '2025' },
  { title: 'PEAKY UI DESIGNER', company: 'GOOGLE',    year: '2024' },
  { title: 'GREAT IN UX',       company: 'APPLE',     year: '2023' },
  { title: 'BEST WEBSITE PICK', company: 'MICROSOFT', year: '2022' },
  { title: 'NELSON UI & UX DESIGNER', company: 'SAMSUNG', year: '2021' },
];

const RewardsSection = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (circleRef.current) {
        circleRef.current.style.transform = `rotate(${window.scrollY * 0.15}deg)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-16 w-full bg-[#f4f4f5]">
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          
          {/* Left Column */}
          <div className="md:col-span-3 flex flex-col pt-0 md:pt-32">
             <div className="rounded-[20px] overflow-hidden w-full aspect-square max-w-[280px] xl:max-w-[320px] mb-6 shadow-sm">
                 <img src="/rewards-img12.jpg" alt="Get Rewards" className="w-full h-full object-cover" />
             </div>
             <p className="text-[12px] font-semibold tracking-wide uppercase text-[#111]">GET REWARDS</p>
          </div>

          {/* Right Column */}
          <div className="md:col-span-8 md:col-start-5 flex flex-col">
             
             {/* Circular SVG Badge Container */}
             <div className="relative w-[80px] h-[80px] mb-8">
                {/* The SVG has white fills — invert makes them dark on light bg */}
                <img 
                  ref={circleRef}
                  src="/Get-in-touch-Circle.svg" 
                  alt="Rotating text" 
                  className="absolute inset-0 w-full h-full select-none pointer-events-none" 
                  style={{ willChange: 'transform', filter: 'invert(0.65)' }}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <svg className="w-6 h-6 text-black/40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0011 15.9V19H7v2h10v-2h-4v-3.1a5.01 5.01 0 003.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM7 10.82C5.84 10.4 5 9.3 5 8V7h2v3.82zM19 8c0 1.3-.84 2.4-2 2.82V7h2v1z" />
                   </svg>
                </div>
             </div>

             <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-heading font-medium leading-[1.2] tracking-tight text-[#111] mb-12 lg:mb-20 pr-4">
               Driven by passion and grounded in expertise, our team turns bold ideas into reality, leading the way in creative innovation.
             </h2>

             {/* Awards List */}
             <div className="flex flex-col border-t border-black/10">
                {awards.map((award, i) => (
                   <div key={i} className="grid grid-cols-[1.5fr_1fr_auto] md:grid-cols-[2fr_1fr_1fr] gap-4 py-6 border-b border-black/10 items-center group cursor-pointer hover:bg-black/5 transition-colors px-2">
                      <h3 className="text-[11px] md:text-[12px] font-semibold tracking-wide text-[#111] uppercase w-max pr-4">{award.title}</h3>
                      <span className="text-[11px] md:text-[12px] font-medium text-black/50 uppercase md:text-left text-right">{award.company}</span>
                      <span className="text-[11px] md:text-[12px] font-medium text-black/40 text-right">{award.year}</span>
                   </div>
                ))}
             </div>
          </div>
          
        </div>
      </SectionContainer>
    </section>
  );
};

export default RewardsSection;
