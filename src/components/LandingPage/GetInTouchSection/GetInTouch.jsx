import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionContainer from "../../ui/SectionContainer";

gsap.registerPlugin(ScrollTrigger);

const GetInTouch = () => {
  const formCardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle float-in revealing animation for the right side white form card
      gsap.from(formCardRef.current, {
        scrollTrigger: {
          trigger: formCardRef.current,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 1.4,
        ease: 'power3.out',
        delay: 0.1
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="px-2 md:px-4 mb-10 w-full">
      <section className="relative w-full bg-[#111] bg-[url('/get-in-touch-bg-img13.jpg')] bg-cover bg-center bg-no-repeat py-20 md:py-32 rounded-[20px] overflow-hidden">
        <div className="relative z-10">
          <SectionContainer>
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 justify-between items-center lg:items-start">
              {/* Left Content */}
              <div className="flex-1 w-full max-w-xl">
                <div className="mb-10 md:mb-16">
                  <p className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-white/50 mb-6">
                    GET IN TOUCH
                  </p>
                  <h2 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-heading font-medium text-white tracking-tight">
                    Tell us about your project—whether it's a website, SEO, or
                    marketing.
                  </h2>
                </div>

                <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
                  {/* Talk to us */}
                  <div>
                    <p className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-white/90 mb-4">
                      <span className="w-1.5 h-1.5 bg-white/70 rounded-full inline-block"></span>
                      TALK TO US
                    </p>
                    <div className="text-[15px] lg:text-[16px] text-white/90 leading-relaxed font-medium">
                      <p className="text-white/70">
                        Work and general inquiries
                      </p>
                      <p className="text-white/70">+123 456 789 00</p>
                    </div>
                  </div>

                  {/* Post Address */}
                  <div>
                    <p className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-white/90 mb-4">
                      <span className="w-1.5 h-1.5 rounded-full border border-white/70 inline-block"></span>
                      POST ADDRESS
                    </p>
                    <div className="text-[15px] lg:text-[16px] text-white/90 leading-relaxed font-medium max-w-[220px]">
                      <p className="text-white/70">
                        541 Melville Ave, Palo Alto, CA 94301, United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form Card */}
              <div ref={formCardRef} className="w-full lg:w-[45%] xl:w-[40%] bg-white rounded-[32px] p-8 md:p-12 shadow-2xl">
                <h3 className="text-xl md:text-[22px] font-heading font-semibold text-black mb-8">
                  Have a project in mind?
                </h3>

                <form className="flex flex-col gap-5">
                  {/* Name & Email Row */}
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="YOUR NAME"
                        className="w-full bg-[#f8f8f8] rounded-2xl px-5 py-4 text-[10px] font-bold tracking-widest text-black placeholder:text-[#999] outline-none focus:ring-1 focus:ring-black/20"
                      />
                    </div>
                    <div className="flex-1 relative">
                      <input
                        type="email"
                        placeholder="BUSINESS EMAIL"
                        className="w-full bg-[#f8f8f8] rounded-2xl px-5 py-4 text-[10px] font-bold tracking-widest text-black placeholder:text-[#999] outline-none focus:ring-1 focus:ring-black/20 pr-10"
                      />
                      {/* Subtle envelope icon placeholder at right */}
                      <svg
                        className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Budget & Service Row */}
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="flex-1 flex flex-col gap-2">
                      <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#777] ml-2">
                        BUDGET
                      </label>
                      <div className="relative">
                        <select className="w-full bg-[#f8f8f8] rounded-2xl px-5 py-4 text-[11px] font-bold uppercase text-black outline-none focus:ring-1 focus:ring-black/20 appearance-none cursor-pointer">
                          <option>$1000 - $5000</option>
                          <option>$5000 - $10000</option>
                          <option>$10000+</option>
                        </select>
                        <svg
                          className="absolute right-5 top-1/2 -translate-y-1/2 w-3 h-3 text-black pointer-events-none"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-2">
                      <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#777] ml-2">
                        SERVICE
                      </label>
                      <div className="relative">
                        <select className="w-full bg-[#f8f8f8] rounded-2xl px-5 py-4 text-[11px] font-bold uppercase text-black outline-none focus:ring-1 focus:ring-black/20 appearance-none cursor-pointer">
                          <option>CONSULTANCY</option>
                          <option>DEVELOPMENT</option>
                          <option>DESIGN</option>
                        </select>
                        <svg
                          className="absolute right-5 top-1/2 -translate-y-1/2 w-3 h-3 text-black pointer-events-none"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mt-1">
                    <textarea
                      placeholder="MESSAGE"
                      rows="4"
                      className="w-full bg-[#f8f8f8] rounded-2xl px-5 py-5 text-[10px] font-bold tracking-widest text-black placeholder:text-[#999] outline-none focus:ring-1 focus:ring-black/20 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-4">
                    <button
                      type="button"
                      className="flex items-center gap-4 group cursor-pointer border-none"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <span className="text-white text-lg font-light leading-none">
                          +
                        </span>
                      </div>
                      <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-black uppercase">
                        LET'S TALK
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </SectionContainer>
        </div>
      </section>
    </div>
  );
};

export default GetInTouch;
