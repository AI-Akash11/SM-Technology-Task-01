import React from 'react';

const PortfolioHeader = () => {
  return (
    <div className="mb-10 md:mb-16 xl:mb-20">
      
      {/* Section label — top left, small caps */}
      <p className="text-black text-[11px] font-semibold tracking-[0.2em] uppercase mb-2">
        Portfolio
      </p>

      {/* Full-width horizontal divider */}
      <div className="h-px w-full bg-gray-200 mb-6 md:mb-10"></div>

      {/* Two-column layout: left empty | right heading */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left col — empty on desktop (spacer), used on mobile to avoid extra padding */}
        <div className="hidden md:block" />

        {/* Right col — the actual heading text */}
        <h2 className="col-span-2 text-[36px] lg:text-[48px] xl:text-[56px] font-heading font-medium leading-[1.08] tracking-tight text-black">
          Strategy to build powerful digital solutions.
        </h2>
      </div>

    </div>
  );
};

export default PortfolioHeader;
