import React, { useState } from 'react';

const items = [
  {
    id: 1,
    title: 'User Interface & Experience Design',
    description: 'From brand strategy to immersive digital experiences, we offer end-to-end creative solutions.',
    tags: ['BRANDING', 'MAGAZINE', 'PRODUCT'],
    image: '/faq-img3.webp',
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'From brand strategy to immersive digital experiences, we offer end-to-end creative solutions.',
    tags: ['BRANDING', 'MODULE', 'PRODUCT', 'UX'],
    image: '/portfolio-img1.webp',
  },
  {
    id: 3,
    title: 'Search Engine Optimization',
    description: 'From brand strategy to immersive digital experiences, we offer end-to-end creative solutions.',
    tags: ['BRANDING', 'PRODUCT', 'UX'],
    image: '/portfolio-img4.webp',
  },
  {
    id: 4,
    title: 'Low-Code Development',
    description: 'From brand strategy to immersive digital experiences, we offer end-to-end creative solutions.',
    tags: ['BRANDING', 'UX'],
    image: '/portfolio-img3.webp',
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
              className="w-full flex items-center py-6 text-left group"
            >
              {/* Plus/Minus Icon */}
              <span className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 mr-5 transition-colors duration-200 group-hover:border-white/60">
                {isOpen ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14" />
                  </svg>
                ) : (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 5v14" /><path d="M5 12h14" />
                  </svg>
                )}
              </span>

              <span className={`flex-1 text-[16px] md:text-[20px] lg:text-[22px] font-medium tracking-tight transition-colors duration-200 ${isOpen ? 'text-white' : 'text-white/60 group-hover:text-white/90'}`}>
                {item.title}
              </span>
            </button>

            {/* Expandable Content */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
              <div className="flex flex-col md:flex-row justify-between gap-6 pb-4 pl-[52px] md:pl-[56px]">

                {/* Left: description + tags */}
                <div className="flex flex-col justify-between max-w-md">
                  <p className="text-white/60 text-[14px] md:text-[15px] leading-[1.6] mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="border border-white/20 px-3 py-1.5 rounded-full text-white/80 text-[9px] font-bold tracking-widest uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: image */}
                <div className="rounded-[16px] overflow-hidden aspect-4/3 w-full md:w-[280px] lg:w-[320px] shrink-0">
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
