import React from 'react';

const ExpertiseHeader = () => {
  return (
    <div className="mb-10 md:mb-14">
      {/*
        "Company" in large white text
        "expertise" in ghost/outline style below
      */}
      <h2 className="font-heading font-medium leading-[0.95] tracking-tight">
        <span className="block text-[70px] md:text-[110px] lg:text-[140px] xl:text-[160px] text-white">
          Company
        </span>
        <span
          className="block text-[70px] md:text-[110px] lg:text-[140px] xl:text-[160px]"
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
