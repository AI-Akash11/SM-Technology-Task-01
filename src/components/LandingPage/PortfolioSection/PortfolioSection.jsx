import React from 'react';
import SectionContainer from "../../ui/SectionContainer";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioGrid from "./PortfolioGrid";

const PortfolioSection = () => {
  return (
    // Background matches live site: #F3F3F3
    <section className="pt-24 md:pt-32 xl:pt-40 pb-20 md:pb-28 xl:pb-36" style={{ backgroundColor: '#f3f3f3' }}>
      <SectionContainer>

        <PortfolioHeader />

        <PortfolioGrid />

        {/* MORE WORKS button — centered at bottom */}
        <div className="flex justify-center mt-16 md:mt-20">
          <button className="group flex border-none items-center gap-4 text-black font-semibold text-[11px] md:text-[12px] tracking-[0.2em] uppercase hover:opacity-70 transition-opacity duration-300">
            <span className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14"/>
                <path d="M5 12h14"/>
              </svg>
            </span>
            MORE WORKS
          </button>
        </div>

      </SectionContainer>
    </section>
  );
};

export default PortfolioSection;
