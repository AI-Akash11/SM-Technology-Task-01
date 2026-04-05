import React from 'react';

const FeedbacksHeading = () => {
  return (
    <div className="flex flex-col mb-10">
      
      {/* Top Title Label */}
      <div className="mb-2">
        <p className="text-[10px] md:text-[11px] font-semibold tracking-widest uppercase text-[#555]">
          User Feedbacks
        </p>
      </div>
      
      {/* Horizontal Divider */}
      <div className="w-full h-px bg-[#e0e0e0] mb-6 md:mb-8"></div>

      {/* Main Text Content - Right Aligned container */}
      <div className="flex justify-end">
        <h2 className="text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] leading-[1.25] font-heading font-medium text-[#111] tracking-tight max-w-[600px] xl:max-w-[650px]">
          Accelerating growth, and unlocking new potential. 
          <span className="inline-flex items-center mx-3 align-middle relative -top-0.5">
            {/* Inline Avatars */}
            <img src="/feedbacks1.jpg" className="w-[32px] h-[32px] rounded-full border-2 border-[#f5f5f5] object-cover relative z-30" alt="User" />
            <img src="/feedbacks2.jpg" className="w-[32px] h-[32px] rounded-full border-2 border-[#f5f5f5] object-cover -ml-2.5 relative z-20" alt="User" />
            <img src="/feedbacks3.jpg" className="w-[32px] h-[32px] rounded-full border-2 border-[#f5f5f5] object-cover -ml-2.5 relative z-10" alt="User" />
          </span>
          Let's build your brand—together.
        </h2>
      </div>

    </div>
  );
};

export default FeedbacksHeading;
