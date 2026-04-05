import React, { useState } from 'react';

const items = [
  {
    id: 1,
    title: 'User Interface & Experience Design',
    description: 'From brand strategy to immersive digital experiences, we offer end-to-end creative solutions.',
    tags: ['BRANDING', 'MAGAZINE', 'PRODUCT'],
    image: '/expertise-img1.webp',
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'From brand strategy to immersive digital experiences, we offer end-to-end creative solutions.',
    tags: ['BRANDING', 'MODULE', 'PRODUCT', 'UX'],
    image: '/expertise-img2.webp',
  },
  {
    id: 3,
    title: 'Search Engine Optimization',
    description: 'From brand strategy to immersive digital experiences, we offer end-to-end creative solutions.',
    tags: ['BRANDING', 'PRODUCT', 'UX'],
    image: '/expertise-img3.webp',
  },
  {
    id: 4,
    title: 'Low-Code Development',
    description: 'From brand strategy to immersive digital experiences, we offer end-to-end creative solutions.',
    tags: ['BRANDING', 'UX'],
    image: '/expertise-img4.webp',
  },
];

const ExpertiseAccordion = () => {
  const [openId, setOpenId] = useState(2); // "Web Development" open by default like the site

  return (
    <div className="flex flex-col divide-y divide-white/10">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            {/* Row header */}
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full flex items-center justify-between py-6 md:py-8 text-left group"
            >
              {/* Plus/Minus Icon */}
              <span className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0 mr-6 md:mr-10 transition-colors duration-200 group-hover:border-white/60">
                {isOpen ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 5v14" /><path d="M5 12h14" />
                  </svg>
                )}
              </span>

              <span className={`flex-1 text-[18px] md:text-[22px] lg:text-[26px] font-medium tracking-tight transition-colors duration-200 ${isOpen ? 'text-white' : 'text-white/50 group-hover:text-white/80'}`}>
                {item.title}
              </span>
            </button>

            {/* Expandable Content */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100 mb-8' : 'max-h-0 opacity-0'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pb-2 pl-[60px] md:pl-20">

                {/* Left: description + tags */}
                <div className="flex flex-col justify-between">
                  <p className="text-white/50 text-[15px] md:text-[16px] leading-[1.75] mb-8">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="border border-white/20 rounded-full px-4 py-1.5 text-white/70 text-[10px] font-semibold tracking-[0.15em] uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: image */}
                <div className="rounded-[20px] overflow-hidden aspect-4/3 md:aspect-video">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>

              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExpertiseAccordion;
