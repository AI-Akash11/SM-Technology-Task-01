import React from 'react';

const LeftImage = () => {
  return (
    <div className="relative h-full flex flex-col justify-between">
      <div className="max-w-[500px]">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F5F5] border border-black/10 rounded-full mb-8">
          <span className="w-1.5 h-1.5 bg-black rounded-full shadow-[0_0_8px_rgba(0,0,0,1)] animate-pulse"></span>
          <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] font-heading uppercase text-black">
            FAQS
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-[72px] leading-[1.1] font-heading font-semibold text-black tracking-[-0.02em] mb-12">
          Have more questions? <br className="hidden md:block" /> We've answers.
        </h2>
        
        <div className="relative w-full aspect-square md:aspect-4/3 rounded-[40px] overflow-hidden group shadow-2xl">
          <img
            src="/faq-img2.webp"
            alt="FAQ Visual"
            className="w-full h-full object-cover grayscale brightness-110 contrast-125 transform group-hover:scale-110 group-hover:grayscale-0 transition-all duration-1000 ease-out"
          />
          {/* Circular badge on top of image as per live site */}
          <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-full flex items-center justify-center p-4 shadow-xl animate-bounce">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftImage;
