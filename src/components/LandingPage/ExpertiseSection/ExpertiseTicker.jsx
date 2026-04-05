import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const quotes = [
  { text: '" Great in UI/UX "', img: '/expertise-img1.webp' },
  { text: '" Best design communicator "', img: '/expertise-img2.webp' },
  { text: '" 10/10 well recommanded "', img: '/expertise-img3.webp' },
  { text: '" Super speedy website designer "', img: '/expertise-img4.webp' },
];

const ExpertiseTicker = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        xPercent: -50,
        duration: 80,
        ease: 'none',
        repeat: -1,
      });
    }, track);

    return () => ctx.revert();
  }, []);

  const repeated = [...quotes, ...quotes];

  return (
    <div className="overflow-hidden pt-6 md:pt-8 pb-12 md:pb-16 xl:pb-20 mt-6 md:mt-8">
      <div ref={trackRef} className="flex whitespace-nowrap w-max">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 text-white text-[13px] md:text-[14px] font-medium tracking-wide px-12 md:px-24 lg:px-32">
            <img src={item.img} alt="" className="w-8 h-8 rounded-full object-cover" />
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseTicker;
