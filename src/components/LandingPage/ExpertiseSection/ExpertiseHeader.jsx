import React from 'react';

const ExpertiseHeader = () => {
  return (
    <div className="mb-12 md:mb-16 text-center">
      {/*
        "Company" in large white text
        "expertise" in ghost/outline style below
      */}
      <h2 className="font-heading font-medium leading-[0.95] tracking-tight flex flex-col items-center">
        <span className="block text-[45px] md:text-[70px] lg:text-[90px] xl:text-[110px] text-white">
          Company
        </span>
        <span
          className="block text-[45px] md:text-[70px] lg:text-[90px] xl:text-[110px] mt-1"
          style={{
            WebkitTextStroke: '1.5px rgba(255,255,255,0.25)',
            color: 'transparent',
          }}
        >
          expertise
        </span>
      </h2>
    </div>
  );
};

export default ExpertiseHeader;
