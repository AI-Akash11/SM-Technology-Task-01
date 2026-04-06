import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const PortfolioCard = ({ title, year, tags, image, logo, isLarge }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  
  // Fast GSAP setters for 60fps mouse tracking
  const xTo = useRef(null);
  const yTo = useRef(null);

  useEffect(() => {
    // Initialize quickTo for buttery smooth tracking with inertia
    xTo.current = gsap.quickTo(imageRef.current, "x", { duration: 0.5, ease: "power3.out" });
    yTo.current = gsap.quickTo(imageRef.current, "y", { duration: 0.5, ease: "power3.out" });
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current || !xTo.current || !yTo.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    // Normalize position from -1 to 1 based on mouse inside card
    const xNorm = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const yNorm = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    // Translate up to 18px in either direction
    xTo.current(xNorm * 18);
    yTo.current(yNorm * 18);
  };

  const handleMouseEnter = () => {
    // Scale up the image precisely when mouse enters to give room for parallax translation
    gsap.to(imageRef.current, {
      scale: 1.06,
      duration: 0.6,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    // Return image to origin and scale down smoothly
    if (xTo.current && yTo.current) {
        xTo.current(0);
        yTo.current(0);
        gsap.to(imageRef.current, {
            scale: 1,
            duration: 0.8,
            ease: "power3.out"
        });
    }
  };

  return (
    <div 
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col group cursor-pointer w-full overflow-hidden rounded-[20px] md:rounded-[24px] bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
    >

      {/* Image Container */}
      <div className={`relative w-full overflow-hidden ${isLarge ? 'aspect-[16/7]' : 'aspect-4/3'}`}>

        {/* The Image (Controlled exclusively by GSAP to prevent CSS transition conflict) */}
        <div className="absolute inset-0 w-full h-full will-change-transform">
          <img
            ref={imageRef}
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

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
      <div className="flex justify-between items-center px-5 md:px-7 py-4 md:py-5 bg-white relative z-30">
        <h3 className="text-[#111111] font-semibold uppercase text-[11px] md:text-[12px] xl:text-[13px] tracking-[0.13em]">{title}</h3>
        <span className="text-[#aaaaaa] text-[11px] md:text-[12px] xl:text-[13px] font-normal">{year}</span>
      </div>

    </div>
  );
};

export default PortfolioCard;
