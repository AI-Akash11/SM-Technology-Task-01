import React from 'react';
import SectionContainer from "../../ui/SectionContainer";

const InsightsSection = () => {
  const posts = [
    {
      id: 1,
      image: '/insights-img1.webp',
      category: 'WEB3',
      date: 'April 05, 2025',
      title: 'The impact of AI on the future of design.'
    },
    {
      id: 2,
      image: '/insights-img2.webp',
      category: 'APP',
      date: 'March 28, 2025',
      title: 'How to build a powerful digital solution.'
    },
    {
      id: 3,
      image: '/insights-img3.webp',
      category: 'DESIGN',
      date: 'March 15, 2025',
      title: 'The importance of user experience in design.'
    }
  ];

  return (
    <section className="py-24 md:py-32 xl:py-40 bg-white">
      <SectionContainer>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-[600px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F5F5] border border-black/10 rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-black rounded-full shadow-[0_0_8px_rgba(0,0,0,1)] animate-pulse"></span>
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] font-heading uppercase text-black">
                INSIGHTS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[72px] leading-[1.1] font-heading font-semibold text-black tracking-[-0.02em]">
              Latest news and <br className="hidden md:block" /> case studies.
            </h2>
          </div>
          
          <button className="group flex items-center gap-4 text-black font-extrabold text-[11px] md:text-[12px] tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">
            VIEW ALL POSTS
            <span className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7"/>
                <path d="M7 7h10v10"/>
              </svg>
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="relative aspect-4/3 rounded-[40px] overflow-hidden mb-8 shadow-sm">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale brightness-110 contrast-125 transform group-hover:scale-110 group-hover:grayscale-0 transition-all duration-1000 ease-out"
                />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white backdrop-blur-md rounded-full border border-black/5 shadow-lg">
                   <span className="text-[10px] md:text-[11px] font-bold tracking-widest text-black uppercase font-heading">
                     {post.category}
                   </span>
                </div>
              </div>
              
              <div className="px-2">
                <p className="text-[12px] md:text-[13px] font-bold tracking-widest text-gray-400 mb-4 uppercase font-heading">
                  {post.date}
                </p>
                <h3 className="text-[22px] md:text-[28px] lg:text-[32px] leading-tight font-heading font-semibold text-black group-hover:text-neutral/60 transition-colors duration-500 tracking-[-0.02em]">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

export default InsightsSection;
