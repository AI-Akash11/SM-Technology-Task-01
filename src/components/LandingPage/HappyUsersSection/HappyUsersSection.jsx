import React from 'react';
import SectionContainer from "../../ui/SectionContainer";

const clients = [
  { id: 1, logo: '/logoipsum-icon3.svg' },
  { id: 2, logo: '/logoipsum-icon4.svg' },
  { id: 3, logo: '/logoipsum-icon5.svg' },
  { id: 4, logo: '/logoipsum-icon6.svg' },
  { id: 5, logo: '/logoipsum-icon7.svg' },
  { id: 6, logo: '/logoipsum-icon8.svg' },
  { id: 7, logo: '/logoipsum-icon9.svg' },
  { id: 8, logo: '/logoipsum-icon10.svg' },
];

const HappyUsersSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <SectionContainer>

        {/* Section label */}
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-black/40 mb-10 md:mb-14">Happy Users</p>

        {/* Logo grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {clients.map((client) => (
            <div key={client.id} className="bg-[#f5f5f5] rounded-[20px] flex items-center justify-center p-6 md:p-8 aspect-square hover:bg-[#eeeeee] transition-colors">
              <img
                src={client.logo}
                alt="client logo"
                className="w-full h-auto max-h-10 object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}

          {/* CTA tile */}
          <div className="bg-black rounded-[20px] flex flex-col items-center justify-center p-6 md:p-8 aspect-square cursor-pointer group hover:bg-zinc-900 transition-colors">
            <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14"/><path d="M5 12h14"/>
              </svg>
            </div>
            <p className="text-white text-center text-[10px] font-bold tracking-[0.12em] uppercase leading-snug">Next can be you. Let's Talk</p>
          </div>
        </div>

      </SectionContainer>
    </section>
  );
};

export default HappyUsersSection;
