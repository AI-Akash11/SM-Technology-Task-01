import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeedbacksHeading = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Label fade down
      gsap.from(".label-text", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });

      // 2. Line sweep animation
      gsap.from(".divider-line", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.4,
        ease: 'power3.inOut',
      });

      // 3. Subtitle text slide sequence from the right
      gsap.from(".subtitle-text", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        x: 80,
        opacity: 0,
        duration: 1.4,
        ease: 'power3.out',
        delay: 0.2
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col mb-10 overflow-hidden py-2">
      {/* Top Title Label */}
      <div className="mb-2">
        <p className="label-text text-[10px] md:text-[11px] font-semibold tracking-widest uppercase text-[#555]">
          User Feedbacks
        </p>
      </div>

      {/* Horizontal Divider */}
      <div className="divider-line w-full h-px bg-[#e0e0e0] mb-6 md:mb-8"></div>

      {/* Main Text Content - Right Aligned container */}
      <div className="flex justify-end">
        {/* Adjusted scaling: now forces exactly 60% of the parent width on large breakpoints */}
        <h2 className="subtitle-text text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] leading-[1.25] font-heading font-medium text-[#111] tracking-tight w-full max-w-[600px] lg:max-w-none lg:w-[60%]">
          Accelerating growth, and unlocking new potential.
          <span className="inline-flex items-center mx-3 align-middle relative -top-0.5">
            {/* Inline Avatars */}
            <img
              src="/feedbacks1.jpg"
              className="w-[32px] h-[32px] rounded-full border-2 border-[#f5f5f5] object-cover relative z-30"
              alt="User"
            />
            <img
              src="/feedbacks2.jpg"
              className="w-[32px] h-[32px] rounded-full border-2 border-[#f5f5f5] object-cover -ml-2.5 relative z-20"
              alt="User"
            />
            <img
              src="/feedbacks3.jpg"
              className="w-[32px] h-[32px] rounded-full border-2 border-[#f5f5f5] object-cover -ml-2.5 relative z-10"
              alt="User"
            />
          </span>
          Let's build your brand—together.
        </h2>
      </div>
    </div>
  );
};

export default FeedbacksHeading;
