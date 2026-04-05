import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const quotes = [
  '" Great in UI/UX "',
  '" Best design communicator "',
  '" 10/10 well recommanded "',
  '" Super speedy website designer "',
];

const ExpertiseTicker = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        xPercent: -50,
        duration: 22,
        ease: 'none',
        repeat: -1,
      });
    }, track);

    return () => ctx.revert();
  }, []);

  const repeated = [...quotes, ...quotes];

  return (
    <div className="overflow-hidden border-t border-white/10 py-6 md:py-8 mt-16 md:mt-20">
      <div ref={trackRef} className="flex whitespace-nowrap w-max">
        {repeated.map((quote, i) => (
          <span key={i} className="inline-block text-white/40 text-[13px] md:text-[14px] font-medium tracking-wide px-10 md:px-14">
            {quote}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseTicker;
