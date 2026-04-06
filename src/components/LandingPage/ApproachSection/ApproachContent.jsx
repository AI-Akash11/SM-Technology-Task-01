import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ApproachContent = () => {
  const containerRef = useRef(null);
  const leftCardRef = useRef(null);
  const centerCardRef = useRef(null);
  const rightColumnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left card enters from the left
      gsap.from(leftCardRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        x: -150,
        opacity: 0,
        duration: 1.4,
        ease: 'power3.out',
      });

      // Center massive card enters deeply from the bottom
      gsap.from(centerCardRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 150,
        opacity: 0,
        duration: 1.4,
        ease: 'power3.out',
        delay: 0.15
      });

      // Right stacked column enters from the right
      gsap.from(rightColumnRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        x: 150,
        opacity: 0,
        duration: 1.4,
        ease: 'power3.out',
        delay: 0.3
      });

      // All texts across the section also appear from the right staggered
      gsap.from(containerRef.current.querySelectorAll('span, p'), {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        x: 50,
        opacity: 0,
        duration: 1.4,
        ease: 'power3.out',
        stagger: 0.05,
        delay: 0.4
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-6 lg:gap-7 items-stretch">
      
      {/*LEFT CARD */}
      <div ref={leftCardRef} className="order-1 md:order-1 lg:order-1 lg:col-span-3 bg-white rounded-[32px] p-7 xl:p-9 flex flex-col shadow-[0_4px_30px_rgba(0,0,0,0.03)] w-full h-full">
        <div>
          <div className="flex items-start mt-2">
            <span className="text-[70px] xl:text-[85px] leading-[0.85] font-heading font-medium tracking-tight text-black">
              25
            </span>
            <span className="text-[45px] xl:text-[55px] leading-[0.85] font-medium text-gray-300 ml-1">
              +
            </span>
          </div>
          <p className="text-[#a0a0a0] text-[12px] xl:text-[13px] mt-3 font-medium pb-6 xl:pb-8">Years of experience</p>
          
          <div className="h-px bg-gray-100 w-full mb-6 xl:mb-8"></div>
          
          <p className="text-[#666666] text-[14px] xl:text-[15px] leading-[1.6] mb-8 xl:mb-10 font-medium pr-2">
            Explore how we transform ideas into extraordinary digital experiences.
          </p>
        </div>

        <div className="mt-auto">
          <div className="flex -space-x-3 mb-4 xl:mb-5">
            <img src="/approach-person-img1.webp" alt="Reviewer" className="w-10 h-10 xl:w-11 xl:h-11 rounded-full border-2 border-white object-cover shadow-sm bg-gray-100" />
            <img src="/approach-person-img2.webp" alt="Reviewer" className="w-10 h-10 xl:w-11 xl:h-11 rounded-full border-2 border-white object-cover shadow-sm bg-gray-100" />
            <img src="/approach-person-img3.webp" alt="Reviewer" className="w-10 h-10 xl:w-11 xl:h-11 rounded-full border-2 border-white object-cover shadow-sm bg-gray-100" />
            <img src="/approach-person-img4.webp" alt="Reviewer" className="w-10 h-10 xl:w-11 xl:h-11 rounded-full border-2 border-white object-cover shadow-sm bg-gray-100" />
          </div>
          <p className="text-black font-semibold text-[14px]">1200+ happy users review</p>
        </div>
      </div>

      {/* CENTER CARD  */}
      <div ref={centerCardRef} className="order-3 md:order-3 lg:order-2 md:col-span-2 lg:col-span-6 flex flex-col relative pt-6 md:pt-10 min-h-[440px] lg:min-h-0 w-full h-full">
        <div className="absolute inset-x-0 bottom-0 top-6 md:top-10 bg-[#0a0a0a] rounded-[32px] z-0"></div>
        
        <div className="relative z-10 flex-1 flex flex-col h-full w-full pb-10">
          
          {/* Top Right Badges */}
          <div className="absolute top-2 right-6 md:top-6 md:right-10 z-30 flex flex-col gap-3">
             <img src="/UltraPrestifious-icon.svg" className="w-[85px] md:w-[100px] h-auto object-contain" alt="Ultra Prestigious" />
             <img src="/HyperBest-icon.svg" className="w-[85px] md:w-[100px] h-auto object-contain" alt="Hyper Best" />
          </div>

          {/* Floating Image */}
          <img 
            src="/approach-img1.webp" 
            alt="At Floka CEO" 
            className="absolute bottom-0 left-0 md:left-4 w-[90%] md:w-[75%] lg:w-[85%] xl:w-[75%] h-[115%] lg:h-[110%] object-contain object-bottom-left pointer-events-none z-10"
          />

          {/* Bottom Overlaid Text */}
          <div className="relative z-30 mt-auto px-8 md:px-10 xl:px-12 flex flex-col justify-end pt-32 xl:pt-48">
            <p className="text-white font-medium text-[19px] md:text-[23px] lg:text-[25px] leading-[1.3] mb-4 max-w-sm xl:max-w-md">
              “ At Floka, we merge strategy, creativity, and technology to shape brands that people love. ”
            </p>
            <p className="text-white text-sm md:text-[14px] font-semibold tracking-wide">
              Merizo H. Yelso <span className="text-[#888888] font-medium tracking-normal text-[12px] ml-1">/CEO</span>
            </p>
          </div>

        </div>
      </div>

      {/* RIGHT COLUMN (STACKED CARDS) */}
      <div ref={rightColumnRef} className="order-2 md:order-2 lg:order-3 md:col-span-1 lg:col-span-3 flex flex-col gap-5 md:gap-6 w-full h-full">
        
        {/* Right Top Card */}
        <div className="bg-white rounded-[32px] p-7 xl:p-9 shadow-[0_4px_30px_rgba(0,0,0,0.03)] flex-1 flex flex-col justify-between h-full">
          <div>
            <p className="text-[#a0a0a0] text-[9.5px] sm:text-[10px] mb-1.5 uppercase font-semibold tracking-widest">Follow us</p>
            <p className="text-black text-[16px] sm:text-[18px] font-medium mb-5">For check updates</p>
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-2 mt-auto">
            {['DRIBBBLE', 'BEHANCE', 'LINKEDIN', 'X', 'XING'].map(social => (
              <div key={social} className="border border-gray-200 rounded-full py-[7px] px-[14px] text-[9.5px] font-bold text-[#111111] cursor-pointer hover:bg-gray-50 transition-colors uppercase whitespace-nowrap">
                {social}
              </div>
            ))}
          </div>
        </div>

        {/* Right Bottom Card */}
        <div className="bg-white rounded-[32px] p-7 xl:p-9 shadow-[0_4px_30px_rgba(0,0,0,0.03)] flex-1 flex flex-col justify-between h-full">
          <p className="text-[#a0a0a0] text-[9.5px] sm:text-[10px] mb-4 uppercase font-semibold tracking-widest">Impressions</p>
          
          <div className="flex flex-col gap-2.5 mt-auto">
            {/* Pill 1 */}
            <div className="bg-[#f5f5f5] rounded-xl flex justify-between items-center px-4 py-[10px] w-full">
              <span className="text-[#111111] font-medium text-[12px]">Solutions</span>
              <span className="text-[#666666] text-[12px] font-medium leading-none">100%</span>
            </div>
            {/* Pill 2 */}
            <div className="bg-[#0e0e0e] rounded-xl flex justify-between items-center px-4 py-[10px] shadow-lg w-[90%]">
               <span className="text-white font-medium text-[12px]">UI/UX</span>
               <span className="text-white font-medium text-[12px] leading-none">90%</span>
            </div>
            {/* Pill 3 */}
            <div className="border border-[#eaeaea] rounded-xl flex justify-between items-center px-4 py-[10px] w-[72%]">
               <span className="text-[#111111] font-medium text-[12px]">Explore</span>
               <span className="text-[#888888] text-[12px] font-medium leading-none">72%</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ApproachContent;