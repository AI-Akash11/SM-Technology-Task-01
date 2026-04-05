import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const FeedbackCards = () => {
  const testimonials = [
    {
      name: "Nicolas K. Ellington",
      role: "IT Specialist",
      text: '" As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog. "',
      tag: "“ GREAT DESIGN SOLUTIONS ”",
    },
    {
      name: "Julian T. Beaumont",
      role: "IT Specialist",
      text: '" As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog. "',
      tag: "“ GREAT DESIGN SOLUTIONS ”",
    },
    {
      name: "Felipe D. Hawthorne",
      role: "IT Specialist",
      text: '" As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog. "',
      tag: "“ GREAT DESIGN SOLUTIONS ”",
    },
  ];

  // Tripling the array ensures enough duplicates so Swiper can infinitely loop smoothly on all screen sizes
  const sliderData = [...testimonials, ...testimonials, ...testimonials];

  const renderSmallCard = (item, hasButton) => (
    <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm border border-black/5 group-hover:bg-[#0a0a0a] transition-all duration-500 shrink-0 flex items-center justify-between">
      <div>
        <h3 className="text-[16px] md:text-[17px] lg:text-[18px] font-heading font-semibold text-black group-hover:text-white mb-1 transition-colors duration-500">
          {item.name}
        </h3>
        <p className="text-[12px] lg:text-[13px] text-[#888] font-medium transition-colors duration-500">
          {item.role}
        </p>
      </div>
      {hasButton && (
        <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
          <span className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full transition-colors"></span>
        </div>
      )}
    </div>
  );

  const renderBigCard = (item) => (
    <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm border border-black/5 group-hover:bg-[#0a0a0a] transition-all duration-500 flex-1 flex flex-col justify-between">
      <div>
        <div className="flex gap-1 mb-6 text-[#FF8A00]">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
        <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[1.7] text-[#111] group-hover:text-white mb-10 font-medium transition-colors duration-500">
          {item.text}
        </p>
      </div>
      <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#aaa] group-hover:text-gray-400 transition-colors duration-500 mt-auto">
        {item.tag}
      </p>
    </div>
  );

  return (
    <div className="w-full cursor-grab active:cursor-grabbing">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
        }}
        className="pb-4"
      >
        {sliderData.map((item, index) => {
          // Keep the visual masonry effect alternating based on even/odd.
          const isFlipped = index % 2 !== 0;
          const hasButton = index % 3 === 1; // Simulate the button on Julian's card

          return (
            <SwiperSlide key={index} className="h-auto!">
              <div className="flex flex-col gap-3 md:gap-4 h-full group">
                {!isFlipped ? (
                  <>
                    {renderSmallCard(item, hasButton)}
                    {renderBigCard(item)}
                  </>
                ) : (
                  <>
                    {renderBigCard(item)}
                    {renderSmallCard(item, hasButton)}
                  </>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default FeedbackCards;
