import React, { useEffect, useRef } from 'react';

const ScrollDivider = () => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewH = window.innerHeight;

      // How far the container's center is from the viewport center (in px)
      const centerOffset = rect.top + rect.height / 2 - viewH / 2;

      // Translate: moves right when above center, left when below center
      // Intensity multiplier controls how much it moves (tweak to taste)
      const translateX = centerOffset * 0.25;

      img.style.transform = `translateX(${translateX}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // set initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden py-6 md:py-8 bg-[#f8f8f8]"
    >
      <img
        ref={imgRef}
        src="/lines-scaled.png"
        alt="decorative divider"
        className="w-full h-auto object-cover select-none pointer-events-none will-change-transform"
        style={{ minWidth: '100%' }}
        draggable={false}
      />
    </div>
  );
};

export default ScrollDivider;
