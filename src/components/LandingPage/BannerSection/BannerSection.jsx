import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const BannerSection = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardRef = useRef(null);
  const subtextRef = useRef(null);

  useEffect(() => {
    /* 
      We use gsap.context to manage cleanup automatically. 
      The initial delay of ~2.2s ensures the animation waits until the black Preloader curtain starts sliding up to reveal the hero section.
    */
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2.2 });

      // Major typography sliding up from bottom
      tl.from([titleRef.current, subtitleRef.current], {
        y: 120,
        opacity: 0,
        duration: 1.4,
        stagger: 0.15,
        ease: 'power4.out',
      })
      // Card and small texts entering aggressively overlapping the end of the text
      .from([cardRef.current, subtextRef.current], {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
      }, "-=1.1"); 
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full h-[90vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh] xl:max-h-[900px] overflow-hidden rounded-t-2xl">
      
      {/* Background Video */}
       <div className="absolute inset-0 w-full h-full">
         <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
         >
            <source src="/banner-background-video.mp4" type="video/mp4" />
         </video>
         
         {/* Gradient Overlay for Text Readability */}
         <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
       </div>

      {/* Main Title */}
      <div className="absolute left-6 top-auto bottom-[240px] sm:bottom-[260px] md:bottom-10 lg:bottom-16 lg:left-12 xl:left-[6%] xl:bottom-16 z-10 flex flex-col pointer-events-none">
        <h1 
          ref={titleRef} 
          className="text-white text-[80px] sm:text-[90px] md:text-[110px] lg:text-[160px] xl:text-[220px] font-heading font-medium leading-[0.85] tracking-[-0.04em]"
        >
          Floka
        </h1>
        <span 
          ref={subtitleRef} 
          className="text-white/40 text-[56px] sm:text-[64px] md:text-[80px] lg:text-[100px] xl:text-[150px] font-heading font-medium mt-1 md:mt-2 xl:ml-40 leading-[0.85] tracking-[-0.04em]"
        >
          Studio
        </span>
      </div>

      {/* Right Floating Content */}
      <div className="absolute left-6 bottom-8 md:left-auto md:right-8 lg:right-12 xl:right-[8%] xl:bottom-[15%] flex flex-col items-start gap-4 md:gap-5 z-20">
        
        {/* White Card */}
        <div ref={cardRef} className="bg-white rounded-[24px] p-3.5 pr-8 flex items-center gap-4 md:gap-5 shadow-2xl w-max">
          <img 
            src="/image-men-behind-leafs.jpg" 
            alt="Almond D. Nelsi" 
            className="w-[74px] h-[74px] md:w-[94px] md:h-[94px] rounded-[16px] object-cover" 
          />
          <div className="flex flex-col space-y-1">
            <span className="text-[9px] md:text-[10px] font-bold text-gray-400 tracking-[0.15em] uppercase">
              Head of Idea
            </span>
            <span className="text-[17px] md:text-[20px] font-semibold text-black leading-none tracking-tight">
              Almond D. Nelsi
            </span>
            <button className="flex items-center gap-3 mt-2 group w-max border-none">
              <span className="w-6 h-6 md:w-7 md:h-7 bg-[#0a0a0a] rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </span>
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-black uppercase">
                Let's talk
              </span>
            </button>
          </div>
        </div>

        {/* Subtext */}
        <div ref={subtextRef} className="max-w-[260px] md:max-w-[300px]">
          <p className="text-white font-semibold text-[13px] md:text-[15px] leading-snug">
            No cookie-cutter websites. No fluff.
          </p>
          <p className="text-white/70 text-[12px] md:text-[14px] mt-1.5 leading-[1.6]">
            Just real tools and smart strategies to grow your business and elevate your brand.
          </p>
        </div>

      </div>

      {/* Center Bottom Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[34px] h-[34px] rounded-full border border-black/50 hidden xl:flex items-center justify-center z-20">
        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
      </div>

    </section>
  );
};

export default BannerSection;
