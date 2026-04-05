import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const ApproachMarquee = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 25,
        ease: "none",
      });
    });
    
    return () => ctx.revert();
  }, []);

  const marqueeText = "See how our team combines creativity, technology, and strategy";

  return (
    <div 
      className="relative w-full flex items-center overflow-hidden"
      style={{
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)',
        maskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)'
      }}
    >
      <div 
        className="flex whitespace-nowrap will-change-transform"
        ref={containerRef}
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
             <span className="text-[55px] md:text-[65px] lg:text-[80px] xl:text-[96px] font-heading font-medium text-black/70 tracking-tight pr-8 md:pr-16">
               {marqueeText}
             </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApproachMarquee;
