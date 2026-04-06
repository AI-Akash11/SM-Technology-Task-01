import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionContainer from "../../ui/SectionContainer";
import { BsArrowDownRight } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

const InsightsSection = () => {
  const containerRef = useRef(null);

  const posts = [
    {
      id: 1,
      image: '/insights-img1.webp',
      category: 'WEB3',
      date: 'NOV 07, 2025',
      title: 'Seamless user interfaces, crafted with intent.',
    },
    {
      id: 2,
      image: '/insights-img2.webp',
      category: 'WEB3',
      date: 'NOV 07, 2025',
      title: 'Creative web platforms, designed for growth.',
    },
    {
      id: 3,
      image: '/insights-img3.webp',
      category: 'WEB3',
      date: 'NOV 07, 2025',
      title: 'Immersive virtual journeys, built with precision',
    }
  ];

  // Tripling for seamless loop Slider
  const sliderData = [...posts, ...posts, ...posts];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Isolate animation only to the main right-sliding header text
      gsap.from(".insights-header-text", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        x: 100,
        opacity: 0,
        duration: 1.4,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-24 bg-[#f8f8f8] overflow-hidden">
      <SectionContainer>
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12 lg:mb-16">
          <p className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] font-heading uppercase text-black/40 mb-4">
            INSIGHTS
          </p>
          <h2 className="insights-header-text text-[28px] md:text-[36px] lg:text-[42px] leading-[1.15] font-heading font-medium text-[#111] tracking-tight">
            Company blog & updates
          </h2>
        </div>

        {/* Draggable Slider */}
        <div className="w-full cursor-grab active:cursor-grabbing">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-10"
          >
            {sliderData.map((post, index) => {
              // Staggered pattern based on index: index 0/2/etc (even) text-top, index 1/3/etc (odd) image-top
              const isEven = index % 2 === 0;
              
              return (
                <SwiperSlide key={index} className="h-auto!">
                  <div className="flex flex-col gap-4">
                    {isEven ? (
                      <>
                        {/* Black Text Box on Top */}
                        <div className="bg-[#0f0f0f] rounded-[24px] p-5 lg:p-6 flex flex-col justify-between min-h-[140px] lg:min-h-[160px] group cursor-pointer transition-all duration-300">
                           <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase text-white/40 mb-4">
                              <span className="text-white">{post.category}</span>
                              <span>{post.date}</span>
                           </div>
                           <h3 className="text-[17px] md:text-[19px] font-semibold text-white leading-[1.35] group-hover:text-white/70 transition-colors">
                              {post.title}
                           </h3>
                        </div>
                        {/* Image on Bottom */}
                        <div className="w-full rounded-[24px] overflow-hidden aspect-[4/3] bg-gray-200">
                           <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Image on Top */}
                        <div className="w-full rounded-[24px] overflow-hidden aspect-[4/3] bg-gray-200">
                           <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                        </div>
                        {/* White Text Box on Bottom */}
                        <div className="bg-white rounded-[24px] p-5 lg:p-6 flex flex-col justify-between min-h-[140px] lg:min-h-[160px] relative group cursor-pointer shadow-sm border border-black/[0.03]">
                           {/* Overlay Arrow Icon - Half overlapping top edge */}
                           <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border border-black/10 bg-white flex items-center justify-center shadow-lg group-hover:bg-black group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                              <BsArrowDownRight className="text-[16px]" />
                           </div>
                           
                           <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase text-black/40 mb-4 mt-2">
                              <span className="text-black">{post.category}</span>
                              <span>{post.date}</span>
                           </div>
                           <h3 className="text-[17px] md:text-[19px] font-semibold text-[#111] leading-[1.35] group-hover:text-black/70 transition-colors">
                              {post.title}
                           </h3>
                        </div>
                      </>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

      </SectionContainer>
    </section>
  );
};

export default InsightsSection;
