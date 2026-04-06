import React from "react";
import SectionContainer from "../../ui/SectionContainer";
import ExpertiseHeader from "./ExpertiseHeader";
import ExpertiseAccordion from "./ExpertiseAccordion";
import ExpertiseTicker from "./ExpertiseTicker";

const ExpertiseSection = () => {
  return (
    <section className="pt-20 md:pt-[100px] xl:pt-[120px] pb-10">
      <div className="bg-[#050505] rounded-[32px] md:rounded-[40px] overflow-hidden w-full">
        <SectionContainer>
          <div className="pt-20 md:pt-28">
            {/* Big two-line heading: "Company" + "expertise" (ghost) */}
            <ExpertiseHeader />

            {/* Accordion list */}
            <ExpertiseAccordion />

            {/* HIRE US TODAY button */}
            <div className="flex justify-start mt-10 md:mt-12 mb-8 md:mb-10 pl-2">
              <button className="group flex border-none items-center gap-4 text-white font-semibold text-[11px] md:text-[12px] tracking-[0.2em] uppercase hover:opacity-70 transition-opacity duration-300">
                <span className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14" />
                    <path d="M5 12h14" />
                  </svg>
                </span>
                HIRE US TODAY
              </button>
            </div>
          </div>
        </SectionContainer>

        {/* Full-bleed scrolling quote ticker at bottom of dark section */}
        <ExpertiseTicker />
      </div>
    </section>
  );
};

export default ExpertiseSection;
