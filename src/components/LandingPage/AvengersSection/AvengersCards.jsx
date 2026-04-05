import React from 'react';

const AvengersCards = ({ activeTab }) => {
  const designTeam = [
    { name: 'Nicolas K. Ellington', role: 'FOUNDER', image: '/avengers-img1.png' },
    { name: 'Carlos E. Ashcroft', role: 'CEO', image: '/avengers-img2.png' },
    { name: 'Leonardo F. Ashton', role: 'UX Designer', image: '/avengers-img3.png' },
    { name: 'Ricardo P. Winslow', role: 'UI Designer', image: '/avengers-img4.png' }
  ];

  const developmentTeam = [
    { name: 'Adrian T. Carrington', role: 'FOUNDER', image: '/avengers-img-5.png' },
    { name: 'Marcus J. Remington', role: 'CEO', image: '/avengers-img-6.png' },
    { name: 'Victor L. Harrington', role: 'UX Designer', image: '/avengers-img-7.png' },
    { name: 'Samuel R. Worthington', role: 'UI Designer', image: '/avengers-img14.jpg' }
  ];

  const currentTeam = activeTab === 'DESIGN TEAM' ? designTeam : developmentTeam;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 animate-fadeIn">
      {currentTeam.map((member, index) => (
        <div key={index} className="group relative bg-[#EDEDED] rounded-[24px] overflow-hidden p-6 md:p-8 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 cursor-pointer">
          <div className="w-full aspect-4/5 bg-neutral/10 rounded-[20px] overflow-hidden mb-6 md:mb-8">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover grayscale brightness-110 contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
            />
          </div>
          <div className="w-full text-center">
            <h3 className="text-[20px] md:text-[24px] font-heading font-semibold text-black mb-1.5 transition-colors duration-500">
              {member.name}
            </h3>
            <p className="text-[11px] md:text-[12px] font-bold tracking-[0.2em] font-heading uppercase text-neutral/60 group-hover:text-black transition-colors duration-500">
              {member.role}
            </p>
          </div>
          
          {/* Social Icons Overlay - Matches live site */}
          <div className="absolute top-6 right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-[10px] hover:scale-110 transition-transform cursor-pointer">In</div>
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-[10px] hover:scale-110 transition-transform cursor-pointer">X</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvengersCards;
