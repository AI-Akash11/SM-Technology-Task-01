import React from 'react';

const PortfolioCard = ({ title, year, tags, image, logo, isLarge }) => {
  return (
    <div className="flex flex-col group cursor-pointer w-full overflow-hidden rounded-[20px] md:rounded-[24px] bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]">

      {/* Image Container */}
      <div className={`relative w-full overflow-hidden ${isLarge ? 'aspect-[16/7]' : 'aspect-4/3'}`}>

        {/* Image with zoom on hover */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* Logo — top left, always visible */}
        {logo && (
          <div className="absolute top-5 left-5 md:top-7 md:left-7 z-20 pointer-events-none">
            <img src={logo} alt="brand logo" className="h-6 md:h-7 w-auto object-contain filter brightness-0 invert" />
          </div>
        )}

        {/* Hover arrow — top right, slides in */}
        <div className="absolute top-5 right-5 w-11 h-11 bg-white rounded-full flex items-center justify-center opacity-0 -translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out z-20 pointer-events-none shadow-md">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </div>

        {/* Dark scrim — only on hover, for tag readability */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>

        {/* Tags overlay — bottom left, visible ONLY on hover */}
        <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7 z-20 pointer-events-none opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
          <span className="text-white text-[9px] md:text-[10px] font-semibold tracking-[0.18em] uppercase">
            {tags}
          </span>
        </div>

      </div>

      {/* Info Bar — white, below image */}
      <div className="flex justify-between items-center px-5 md:px-7 py-4 md:py-5 bg-white">
        <h3 className="text-[#111111] font-semibold uppercase text-[11px] md:text-[12px] xl:text-[13px] tracking-[0.13em]">{title}</h3>
        <span className="text-[#aaaaaa] text-[11px] md:text-[12px] xl:text-[13px] font-normal">{year}</span>
      </div>

    </div>
  );
};

export default PortfolioCard;
