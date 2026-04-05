import React from 'react';

const FeedbackCards = () => {
  const testimonials = [
    {
      name: 'Nicolas K. Ellington',
      role: 'IT Specialist',
      text: '" As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog. "',
      tag: '“ GREAT DESIGN SOLUTIONS ”'
    },
    {
      name: 'Julian T. Beaumont',
      role: 'IT Specialist',
      text: '" As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog. "',
      tag: '“ GREAT DESIGN SOLUTIONS ”'
    },
    {
      name: 'Felipe D. Hawthorne',
      role: 'IT Specialist',
      text: '" As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog. "',
      tag: '“ GREAT DESIGN SOLUTIONS ”'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
      {/* Column 1 */}
      <div className="flex flex-col gap-6">
        <div className="bg-white rounded-[40px] p-8 lg:p-10 shadow-sm border border-black/5 hover:shadow-2xl transition-all duration-700">
           <h3 className="text-[20px] md:text-[24px] font-heading font-semibold text-black mb-1">{testimonials[0].name}</h3>
           <p className="text-[12px] md:text-[14px] text-gray-500 font-medium mb-12 uppercase tracking-wide">{testimonials[0].role}</p>
        </div>
        <div className="bg-white rounded-[40px] p-8 lg:p-10 shadow-sm border border-black/5 hover:shadow-2xl transition-all duration-700">
           <div className="flex gap-1 mb-8 text-[#FF9900]">
             {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
             ))}
           </div>
           <p className="text-[16px] md:text-[18px] lg:text-[22px] leading-relaxed text-black mb-12 font-medium">
             {testimonials[0].text}
           </p>
           <p className="text-[11px] md:text-[12px] font-bold tracking-[0.2em] font-heading uppercase text-neutral/40">
             {testimonials[0].tag}
           </p>
        </div>
      </div>

      {/* Column 2 - Central Offset */}
      <div className="flex flex-col gap-6 md:mt-24">
        <div className="bg-white rounded-[40px] p-8 lg:p-10 shadow-sm border border-black/5 hover:shadow-2xl transition-all duration-700">
           <div className="flex gap-1 mb-8 text-[#FF9900]">
             {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
             ))}
           </div>
           <p className="text-[16px] md:text-[18px] lg:text-[22px] leading-relaxed text-black mb-12 font-medium">
             {testimonials[1].text}
           </p>
           <p className="text-[11px] md:text-[12px] font-bold tracking-[0.2em] font-heading uppercase text-neutral/40">
             {testimonials[1].tag}
           </p>
        </div>
        <div className="bg-white rounded-[40px] p-8 lg:p-10 shadow-sm border border-black/5 hover:shadow-2xl transition-all duration-700">
           <h3 className="text-[20px] md:text-[24px] font-heading font-semibold text-black mb-1">{testimonials[1].name}</h3>
           <p className="text-[12px] md:text-[14px] text-gray-500 font-medium uppercase tracking-wide">{testimonials[1].role}</p>
        </div>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col gap-6">
        <div className="bg-white rounded-[40px] p-8 lg:p-10 shadow-sm border border-black/5 hover:shadow-2xl transition-all duration-700">
           <h3 className="text-[20px] md:text-[24px] font-heading font-semibold text-black mb-1">{testimonials[2].name}</h3>
           <p className="text-[12px] md:text-[14px] text-gray-500 font-medium mb-12 uppercase tracking-wide">{testimonials[2].role}</p>
        </div>
        <div className="bg-white rounded-[40px] p-8 lg:p-10 shadow-sm border border-black/5 hover:shadow-2xl transition-all duration-700">
           <div className="flex gap-1 mb-8 text-[#FF9900]">
             {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
             ))}
           </div>
           <p className="text-[16px] md:text-[18px] lg:text-[22px] leading-relaxed text-black mb-12 font-medium">
             {testimonials[2].text}
           </p>
           <p className="text-[11px] md:text-[12px] font-bold tracking-[0.2em] font-heading uppercase text-neutral/40">
             {testimonials[2].tag}
           </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCards;
