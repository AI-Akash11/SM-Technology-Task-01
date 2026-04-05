import React from 'react';
import SectionContainer from "../../ui/SectionContainer";

const FunfactsSection = () => {
  return (
    <section className="py-20 md:py-[120px] bg-[#f5f5f5] border-b border-[#e0e0e0]">
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-stretch">

          {/* LEFT — Portrait image */}
          <div className="lg:col-span-5 w-full h-full min-h-[300px] max-h-[500px] lg:sticky lg:top-4">
            <img
              src="/funfacts-img6.webp"
              alt="Agency team"
              className="w-full h-full object-cover rounded-[32px] md:rounded-[40px]"
            />
          </div>

          {/* RIGHT — Content */}
          <div className="lg:col-span-7 flex flex-col gap-10 md:gap-14 pt-4 lg:pt-8">

            {/* Top label + heading */}
            <div>
              <p className="text-[10px] md:text-[11px] font-semibold tracking-widest uppercase text-[#555] mb-5">Fun Facts</p>
              <h3 className="text-[32px] md:text-[42px] lg:text-[46px] xl:text-[52px] font-heading font-medium leading-[1.1] tracking-tight text-[#111]">
                Consistently delivering impactful results through a perfect blend of design and functionality.
              </h3>
            </div>

            {/* Stats Masonry Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              
              {/* Left Sub-Column */}
              <div className="flex flex-col gap-5 md:gap-6 h-full">
                
                {/* Card 1 — Successful Projects */}
                <div className="bg-[#f0f0f0] rounded-[24px] p-6 lg:p-8 flex items-center justify-between shrink-0">
                  <p className="text-[13px] lg:text-[14px] text-[#555] w-[140px] xl:w-[150px] leading-[1.4] font-medium">Successful projects completed</p>
                  <div className="flex items-start">
                    <span className="text-[48px] xl:text-[56px] font-heading font-medium leading-none tracking-tight text-black">2k</span>
                    <span className="text-[32px] xl:text-[40px] font-medium leading-none text-black/20 ml-0.5">+</span>
                  </div>
                </div>

                {/* Card 2 — Dark Card */}
                <div className="bg-[#0a0a0a] rounded-[24px] p-7 lg:p-9 flex flex-col justify-end flex-1 relative overflow-hidden">
                  
                  {/* Decorative Rotated Images */}
                  <div className="relative w-full h-[140px] mb-8 lg:mb-12">
                    <img src="/portfolio-img5.webp" alt="portfolio 1" className="absolute top-8 left-0 w-[95px] aspect-4/3 object-cover rounded-[10px] shadow-lg transform -rotate-12 z-10 border-4 border-[#0a0a0a]" />
                    <img src="/portfolio-img2.jpg" alt="portfolio 2" className="absolute top-0 left-[75px] w-[80px] aspect-3/4 object-cover rounded-[10px] shadow-lg transform rotate-3 z-20 border-4 border-[#0a0a0a]" />
                    <img src="/portfolio-img3.webp" alt="portfolio 3" className="absolute top-6 left-[140px] w-[100px] aspect-4/3 object-cover rounded-[10px] shadow-lg transform rotate-12 z-30 border-4 border-[#0a0a0a]" />
                  </div>

                  <p className="text-white/60 text-[14px] leading-[1.6]">
                    More than 2k+ projects completed—each crafted to deliver real-world results for ambitious brands.
                  </p>
                </div>

              </div>

              {/* Right Sub-Column */}
              <div className="flex flex-col gap-5 md:gap-6 h-full">
                
                {/* Card 3 — 4.9/5 Rating */}
                <div className="bg-white rounded-[24px] p-7 lg:p-9 flex flex-col flex-1">
                  <div className="flex gap-[5px] mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#FF8A00">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-[60px] xl:text-[76px] font-heading font-medium leading-none tracking-tight text-black mt-2">4.9/5</span>
                  
                  <div className="h-px bg-gray-200 w-full my-6 lg:my-8"></div>
                  
                  <p className="text-[14px] text-gray-500 leading-[1.6]">We offer end-to-end creative solutions that make brands unforgettable.</p>
                  
                  <button className="flex items-center gap-3 mt-6 lg:mt-auto group w-max">
                    <span className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14"/><path d="M5 12h14"/>
                      </svg>
                    </span>
                    <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-black">Hire us now</span>
                  </button>
                </div>

                {/* Card 4 — Worldwide Base */}
                <div className="rounded-[24px] overflow-hidden relative p-6 lg:p-7 h-[140px] md:h-[160px] shrink-0 flex flex-col justify-end">
                  <img src="/funfacts-bg-img7.webp" alt="worldwide" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="relative z-10 flex items-end justify-between w-full h-full">
                    <p className="text-white/80 text-[11px] font-medium tracking-widest uppercase mb-1 max-w-[120px] leading-[1.4]">Worldwide base around the world</p>
                    <span className="text-white text-[44px] lg:text-[50px] font-heading font-medium leading-[0.8] tracking-tight">5+</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </SectionContainer>
    </section>
  );
};

export default FunfactsSection;
