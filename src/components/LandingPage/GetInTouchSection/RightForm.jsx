import React from 'react';

const RightForm = () => {
  return (
    <div className="relative w-full aspect-21/9 md:aspect-3/1 rounded-[40px] md:rounded-[60px] overflow-hidden group shadow-2xl cursor-pointer">
      <img
        src="/get-in-touch-bg-img13.jpg"
        alt="Get In Touch Background"
        className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
      />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/20 hover:bg-transparent transition-colors duration-700">
        <h2 className="text-4xl md:text-6xl lg:text-[120px] font-heading font-black text-white tracking-[-0.05em] uppercase leading-none mb-8 group-hover:scale-105 transition-transform duration-700">
          LET'S TALK NOW
        </h2>
        
        <div className="relative">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-700 shadow-2xl">
             <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
               <path d="M7 17L17 7"/>
               <path d="M7 7h10v10"/>
             </svg>
          </div>
          <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-pulse scale-125"></div>
        </div>
      </div>

      {/* Circle Icon from live site */}
      <div className="absolute bottom-12 right-12 hidden md:block group-hover:rotate-45 transition-transform duration-1000">
         <img src="/Get-in-touch-Circle.svg" alt="Circle" className="w-32 h-32 opacity-20 group-hover:opacity-100 invert" />
      </div>
    </div>
  );
};

export default RightForm;
