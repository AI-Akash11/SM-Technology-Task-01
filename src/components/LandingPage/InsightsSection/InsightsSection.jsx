import React from 'react';
import SectionContainer from "../../ui/SectionContainer";
import { BsArrowDownRight } from "react-icons/bs";

const InsightsSection = () => {
  const posts = [
    {
      id: 1,
      image: '/insights-img1.webp',
      category: 'WEB3',
      date: 'NOV 07, 2025',
      title: 'Seamless user interfaces, crafted with intent.',
      layout: 'text-top'
    },
    {
      id: 2,
      image: '/insights-img2.webp',
      category: 'WEB3',
      date: 'NOV 07, 2025',
      title: 'Creative web platforms, designed for growth.',
      layout: 'image-top'
    },
    {
      id: 3,
      image: '/insights-img3.webp',
      category: 'WEB3',
      date: 'NOV 07, 2025',
      title: 'Immersive virtual journeys, built with precision',
      layout: 'text-top'
    }
  ];

  return (
    <section className="py-24 md:py-32 xl:py-40 bg-[#f8f8f8]">
      <SectionContainer>
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 lg:mb-20">
          <p className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] font-heading uppercase text-black/40 mb-4">
            INSIGHTS
          </p>
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] leading-[1.1] font-heading font-medium text-[#111] tracking-tight">
            Company blog & updates
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col gap-4">
              
              {post.layout === 'text-top' ? (
                <>
                  {/* Black Text Box on Top */}
                  <div className="bg-[#0f0f0f] rounded-[24px] p-6 lg:p-8 flex flex-col justify-between min-h-[160px] lg:min-h-[180px] group cursor-pointer">
                     <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase text-white/40 mb-4">
                        <span className="text-white">{post.category}</span>
                        <span>{post.date}</span>
                     </div>
                     <h3 className="text-[18px] lg:text-[20px] font-semibold text-white leading-[1.3] group-hover:text-white/70 transition-colors">
                        {post.title}
                     </h3>
                  </div>
                  {/* Image on Bottom */}
                  <div className="w-full rounded-[24px] overflow-hidden aspect-4/5 bg-gray-200">
                     <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                </>
              ) : (
                <>
                  {/* Image on Top */}
                  <div className="w-full rounded-[24px] overflow-hidden aspect-4/5 bg-gray-200">
                     <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  {/* White Text Box on Bottom */}
                  <div className="bg-white rounded-[24px] p-6 lg:p-8 flex flex-col justify-between min-h-[160px] lg:min-h-[180px] relative group cursor-pointer shadow-sm">
                     {/* Overlay Arrow Icon - Half overlapping */}
                     <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border border-black/10 bg-white flex items-center justify-center shadow-sm group-hover:bg-black group-hover:text-white transition-colors duration-300">
                        <BsArrowDownRight className="text-[16px]" />
                     </div>
                     
                     <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase text-black/40 mb-4 mt-2">
                        <span className="text-black">{post.category}</span>
                        <span>{post.date}</span>
                     </div>
                     <h3 className="text-[18px] lg:text-[20px] font-semibold text-[#111] leading-[1.3] group-hover:text-black/70 transition-colors">
                        {post.title}
                     </h3>
                  </div>
                </>
              )}
              
            </div>
          ))}
        </div>

      </SectionContainer>
    </section>
  );
};

export default InsightsSection;
