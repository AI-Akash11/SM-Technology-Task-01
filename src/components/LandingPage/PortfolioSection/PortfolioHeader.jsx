import React from 'react';

const PortfolioHeader = () => {
  return (
    <div className="mb-16 md:mb-20 xl:mb-24">
      
      {/* Section label — top left, small caps */}
      <p className="text-black text-[11px] font-semibold tracking-[0.2em] uppercase mb-5 md:mb-6">
        Portfolio
      </p>

      {/* Full-width horizontal divider */}
      <div className="h-px w-full bg-gray-200 mb-10 md:mb-14 xl:mb-16"></div>

      {/* Two-column layout: left empty | right heading */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left col — empty on desktop (spacer), used on mobile to avoid extra padding */}
        <div className="hidden md:block" />

        {/* Right col — the actual heading text */}
        <h2 className="text-[38px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-heading font-medium leading-[1.08] tracking-tight text-black">
          Strategy to build powerful digital solutions.
        </h2>
      </div>

    </div>
  );
};

export default PortfolioHeader;
