import React from 'react';

const FeedbacksHeading = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-12">
      <div className="max-w-[750px]">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-black/10 rounded-full mb-8">
          <span className="w-1.5 h-1.5 bg-black rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)] animate-pulse"></span>
          <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] font-heading uppercase text-black">
            USER FEEDBACKS
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-[72px] leading-[1.05] font-heading font-semibold text-black tracking-[-0.03em]">
          Accelerating growth, and unlocking new potential. 
          <span className="inline-flex items-center mx-4 gap-[-10px]">
            <img src="/feedbacks1.jpg" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-lg" alt="User" />
            <img src="/feedbacks2.jpg" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-lg -ml-4" alt="User" />
            <img src="/feedbacks3.jpg" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-lg -ml-4" alt="User" />
          </span>
          Let's build your brand—together.
        </h2>
      </div>
      
      {/* Video Play Button Styling */}
      <div className="relative group cursor-pointer">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-black/10 flex items-center justify-center bg-white group-hover:bg-black group-hover:text-white transition-all duration-700">
           <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
             <path d="M8 5v14l11-7z"/>
           </svg>
        </div>
        <div className="absolute inset-0 rounded-full border border-black/10 animate-ping opacity-20"></div>
      </div>
    </div>
  );
};

export default FeedbacksHeading;
