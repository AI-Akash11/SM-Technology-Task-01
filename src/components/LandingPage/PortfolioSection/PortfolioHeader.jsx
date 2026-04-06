import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PortfolioHeader = () => {
  const containerRef = useRef(null);
  const leftLabelRef = useRef(null);
  const rightHeadingRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal line draws itself
      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.4,
        ease: 'power3.inOut'
      });

      // Left label slides from left
      gsap.from(leftLabelRef.current, {
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
        x: -150, 
        opacity: 0, 
        duration: 1.4, 
        ease: 'power3.out', 
      });

      // Right heading block slides from right
      gsap.from(rightHeadingRef.current, {
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
        x: 150, 
        opacity: 0, 
        duration: 1.4, 
        ease: 'power3.out', 
        delay: 0.15
      });
      
      // Inner heading texts stagger from right natively
      gsap.from(containerRef.current.querySelectorAll('h2'), {
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
        x: 80, 
        opacity: 0, 
        duration: 1.4, 
        ease: 'power3.out', 
        stagger: 0.1,
        delay: 0.25
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="mb-10 md:mb-16 xl:mb-20 overflow-hidden">
      
      <p ref={leftLabelRef} className="text-black text-[11px] font-semibold tracking-[0.2em] uppercase mb-2 w-max">
        Portfolio
      </p>

      <div ref={lineRef} className="h-px w-full bg-gray-200 mb-6 md:mb-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="hidden md:block" />

        <h2 ref={rightHeadingRef} className="col-span-2 text-[36px] lg:text-[48px] xl:text-[56px] font-heading font-medium leading-[1.08] tracking-tight text-black">
          Strategy to build powerful digital solutions.
        </h2>
      </div>

    </div>
  );
};

export default PortfolioHeader;
