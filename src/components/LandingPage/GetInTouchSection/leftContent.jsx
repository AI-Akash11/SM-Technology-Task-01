import React from 'react';

const LeftContent = () => {
  const logos = [
    '/logoipsum-icon3.svg',
    '/logoipsum-icon4.svg',
    '/logoipsum-icon5.svg',
    '/logoipsum-icon6.svg',
    '/logoipsum-icon7.svg',
    '/logoipsum-icon8.svg',
    '/logoipsum-icon9.svg'
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5 bg-black/5 p-0.5 rounded-[40px] overflow-hidden">
        {logos.map((logo, index) => (
          <div key={index} className="bg-white hover:bg-[#F9F9F9] p-10 md:p-12 lg:p-16 flex items-center justify-center group transition-colors duration-500">
             <img 
               src={logo} 
               alt={`Partner ${index + 1}`} 
               className="h-8 md:h-10 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
             />
          </div>
        ))}
        {/* The 8th box is the CTA text */}
        <div className="bg-white hover:bg-black group p-10 md:p-12 lg:p-16 flex flex-col items-center justify-center transition-all duration-700 cursor-pointer">
           <p className="text-[10px] md:text-[11px] font-bold tracking-widest text-gray-400 group-hover:text-white/40 mb-2 uppercase text-center">
             NEXT CAN BE YOU.
           </p>
           <p className="text-[12px] md:text-[14px] font-bold tracking-[0.2em] text-black group-hover:text-white uppercase text-center">
             LET'S TALK
           </p>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
