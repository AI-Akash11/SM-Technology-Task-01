import React, { useState } from 'react';
import SectionContainer from "../../ui/SectionContainer";
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { BsPlus } from "react-icons/bs";

const designTeam = [
  { name: 'Nicolas K. Ellington', role: 'FOUNDER', image: '/avengers-img1.png' },
  { name: 'Carlos E. Ashcroft', role: 'CEO', image: '/avengers-img2.png' },
  { name: 'Leonardo F. Ashton', role: 'UX Designer', image: '/avengers-img3.png' },
  { name: 'Ricardo P. Winslow', role: 'UI Designer', image: '/avengers-img4.png' }
];

const developmentTeam = [
  { name: 'Marcus J. Remington', role: 'CEO', image: '/avengers-img-6.png' },
  { name: 'Victor L. Harrington', role: 'UX Designer', image: '/avengers-img-7.png' },
  { name: 'Leonardo F. Ashton', role: 'UX Designer', image: '/avengers-img3.png' },
  { name: 'Adrian T. Carrington', role: 'FOUNDER', image: '/avengers-img-5.png' },
];

const AvengersSection = () => {
  const [activeTab, setActiveTab] = useState('DESIGN TEAM');
  const currentTeam = activeTab === 'DESIGN TEAM' ? designTeam : developmentTeam;

  return (
    <section className="py-6 md:py-8 w-full bg-[#f4f4f5]">
      <SectionContainer>
        {/* Rounded white card container — matches the reference */}
        <div className="bg-white rounded-[28px] p-6 md:p-10 lg:p-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6">
            
            {/* Left Column */}
            <div className="md:col-span-5 flex flex-col pr-0 md:pr-6">
              <h4 className="text-[10px] font-bold tracking-widest uppercase text-black/50 mb-4">OUR AVENGERS</h4>
              
              <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-heading font-medium text-[#111] leading-[1.15] tracking-tight mb-6">
                Meet with our team member
              </h2>

              {/* Tabs */}
              <div className="flex items-center gap-6 mb-5 border-b border-black/10 pb-3 w-full">
                {['DESIGN TEAM', 'DEVELOPMENT TEAM'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-[11px] border-none font-bold tracking-widest transition-colors relative pb-3 -mb-3 ${
                      activeTab === tab
                        ? 'text-black border-b-2 border-black'
                        : 'text-black/30 hover:text-black/60'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <p className="text-[12px] md:text-[13px] leading-[1.7] text-black/50 font-medium mb-7 max-w-[380px]">
                What began over coffee-fueled brainstorming sessions has grown into a thriving digital agency dedicated to helping brands stand out.
              </p>

              {/* Join Us Button */}
              <div className="flex items-center gap-4 mb-8 cursor-pointer group w-max">
                <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BsPlus className="text-white text-xl" />
                </div>
                <span className="text-[10px] font-bold tracking-widest text-black uppercase">JOIN WITH US</span>
              </div>

              {/* Bottom Group Photo */}
              <div className="w-full rounded-[16px] overflow-hidden aspect-16/10">
                <img src="/faq-img14.jpg" alt="Team" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Right Column - 2×2 Team Grid */}
            <div className="md:col-span-7 md:col-start-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {currentTeam.map((member, i) => (
                  <div key={i} className="bg-[#f6f6f6] rounded-[16px] overflow-hidden flex flex-col p-2 group">

                    {/* Member Image */}
                    <div className="w-full aspect-square bg-[#cbb99f] rounded-[12px] overflow-hidden mb-3">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>

                    {/* Member Info */}
                    <div className="flex flex-col px-1 pb-1.5">
                      <h3 className="text-[13px] md:text-[14px] font-heading font-semibold text-[#111] tracking-tight leading-tight mb-0.5">
                        {member.name}
                      </h3>
                      <p className="text-[8px] uppercase tracking-widest font-bold text-black/30 mb-3">
                        {member.role}
                      </p>

                      {/* Social Icons */}
                      <div className="flex items-center gap-1.5">
                        {[FaFacebookF, FaXTwitter, FaLinkedinIn].map((Icon, idx) => (
                          <a
                            key={idx}
                            href="#"
                            className="w-7 h-7 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:border-black group/icon transition-all duration-200"
                          >
                            <Icon className="text-black/50 text-[10px] group-hover/icon:text-white transition-colors" />
                          </a>
                        ))}
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default AvengersSection;
