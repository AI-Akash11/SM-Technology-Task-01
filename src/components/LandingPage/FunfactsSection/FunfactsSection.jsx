import React from 'react';
import SectionContainer from "../../ui/SectionContainer";

const FunfactsSection = () => {
  return (
    <section className="py-24 md:py-32 xl:py-40 bg-[#f3f3f3]">
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">

          {/* LEFT — Portrait image */}
          <div className="w-full rounded-[28px] overflow-hidden aspect-3/4 lg:aspect-auto lg:h-full min-h-[420px]">
            <img
              src="/funfacts-img6.webp"
              alt="Agency team"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT — 2x2 stats bento */}
          <div className="flex flex-col gap-5">

            {/* Top label + heading */}
            <p className="text-[12px] font-semibold tracking-[0.18em] uppercase text-black/40 mb-2">Fun Facts</p>
            <h3 className="text-[24px] md:text-[30px] lg:text-[34px] font-heading font-medium leading-[1.2] tracking-tight text-black mb-6">
              Consistently delivering impactful results through a perfect blend of design and functionality.
            </h3>

            {/* 2x2 stats grid */}
            <div className="grid grid-cols-2 gap-5">

              {/* Card 1 — Successful Projects */}
              <div className="bg-[#ebebeb] rounded-[24px] p-7 flex flex-col justify-between aspect-square">
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-black/50">Successful projects completed</p>
                <span className="text-[56px] md:text-[64px] font-heading font-medium leading-none tracking-tighter text-black">2k+</span>
              </div>

              {/* Card 2 — Rating */}
              <div className="bg-white rounded-[24px] p-7 flex flex-col justify-between aspect-square shadow-sm">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" className="flex-shrink-0">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <div>
                  <span className="text-[48px] md:text-[56px] font-heading font-medium leading-none tracking-tighter text-black block">4.9/5</span>
                  <p className="text-[12px] text-black/50 mt-2 leading-snug">We offer end-to-end creative solutions unforgettable.</p>
                </div>
                <button className="self-start flex items-center gap-3 mt-4 group">
                  <span className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14"/><path d="M5 12h14"/>
                    </svg>
                  </span>
                  <span className="text-[11px] font-bold tracking-[0.15em] uppercase">Hire us now</span>
                </button>
              </div>

              {/* Card 3 — Dark, overlapping logos */}
              <div className="bg-[#0a0a0a] rounded-[24px] p-7 flex flex-col justify-between aspect-square col-span-2 sm:col-span-1 relative overflow-hidden">
                <div className="flex -space-x-3 mb-4">
                  {['/funfacts-img8.webp', '/funfacts-img9.webp', '/funfacts-img10.webp'].map((src, i) => (
                    <img key={i} src={src} alt="client" className="w-10 h-10 rounded-full border-2 border-[#1a1a1a] object-cover bg-zinc-700" />
                  ))}
                </div>
                <p className="text-white/60 text-[14px] leading-[1.65]">
                  More than 2k+ projects completed—each crafted to deliver real-world results for
                  <a href="#" className="text-white underline ml-1">Continue to Read.</a>
                </p>
              </div>

              {/* Card 4 — Worldwide base image bg */}
              <div className="rounded-[24px] overflow-hidden relative aspect-square col-span-2 sm:col-span-1">
                <img src="/funfacts-bg-img7.webp" alt="worldwide" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 p-7 flex flex-col justify-end h-full">
                  <p className="text-white/70 text-[12px] font-semibold tracking-widest uppercase mb-2">Worldwide base</p>
                  <span className="text-white text-[56px] font-heading font-medium leading-none tracking-tighter">5+</span>
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
