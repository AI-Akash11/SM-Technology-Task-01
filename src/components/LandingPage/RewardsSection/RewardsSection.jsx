import React from 'react';
import SectionContainer from "../../ui/SectionContainer";

const awards = [
  { title: 'PEAKY UI DESIGNER', company: 'GOOGLE',    year: '2024' },
  { title: 'GREAT IN UX',       company: 'APPLE',     year: '2023' },
  { title: 'BEST WEBSITE PICK', company: 'MICROSOFT', year: '2022' },
  { title: 'NELSON UI & UX DESIGNER', company: 'SAMSUNG', year: '2021' },
];

const RewardsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#f3f3f3]">
      <SectionContainer>

        {/* Header */}
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-black/40 mb-6">Get Rewards</p>
        <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-heading font-medium leading-[1.08] tracking-tight text-black mb-16 md:mb-20">
          Best designer awards
        </h2>

        {/* Awards list */}
        <div className="flex flex-col divide-y divide-black/10">
          {/* Column headers */}
          <div className="grid grid-cols-3 pb-4">
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-black/40">Title</span>
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-black/40">Company</span>
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-black/40 text-right">Year</span>
          </div>

          {awards.map((award, i) => (
            <div key={i} className="grid grid-cols-3 py-6 md:py-8 group cursor-pointer hover:opacity-70 transition-opacity">
              <h3 className="text-[18px] md:text-[22px] lg:text-[26px] font-medium tracking-tight text-black">{award.title}</h3>
              <span className="text-[18px] md:text-[22px] lg:text-[26px] font-medium text-black/50 self-center">{award.company}</span>
              <span className="text-[18px] md:text-[22px] lg:text-[26px] font-medium text-black/50 self-center text-right">{award.year}</span>
            </div>
          ))}
        </div>

      </SectionContainer>
    </section>
  );
};

export default RewardsSection;
