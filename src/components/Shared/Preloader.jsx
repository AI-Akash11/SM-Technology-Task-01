import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Preloader = () => {
  const containerRef = useRef(null);
  const wrapperRef   = useRef(null);
  const logoRef      = useRef(null);
  const textRef      = useRef(null);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    /* Lock scrolling while preloader runs */
    document.body.style.overflow = 'hidden';

    // The master timeline
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = 'auto';
        setComplete(true);
      }
    });

    /* 1. Fade the logo in smoothly */
    tl.fromTo(
      wrapperRef.current,
      { opacity: 0, scale: 0.9, y: 15 },
      { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    )
    /* 2. Hold for a moment, then fade logo out as it lifts further */
    .to(
      wrapperRef.current,
      { opacity: 0, y: -20, duration: 0.6, ease: 'power2.in', delay: 0.3 }
    )
    /* 3. The grand reveal: slide the black curtain up quickly with an Expo curve */
    .to(
      containerRef.current,
      { yPercent: -100, duration: 1.2, ease: 'expo.inOut' },
      "-=0.2"
    );

    return () => {
      document.body.style.overflow = 'auto';
      tl.kill();
    };
  }, []);

  if (complete) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-99999 flex items-center justify-center bg-[#0d0d0d] select-none"
    >
      <div ref={wrapperRef} className="flex items-center gap-3">
        {/* We use the white icon from public/ */}
        <img 
          ref={logoRef} 
          src="/logo-icon-white.png" 
          alt="Floka Icon" 
          className="w-9 h-9 md:w-12 md:h-12 object-contain" 
        />
        <h1 
          ref={textRef} 
          className="text-white text-3xl md:text-5xl font-bold tracking-tight font-heading"
        >
          Floka
        </h1>
      </div>
    </div>
  );
};

export default Preloader;
