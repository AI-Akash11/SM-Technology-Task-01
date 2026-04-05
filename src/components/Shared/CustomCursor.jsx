import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const followerRef = useRef(null);

  useEffect(() => {
    const follower = followerRef.current;
    if (!follower) return;

    // Center origin to cursor
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      // Animate the small circle to chase the mouse pointer
      gsap.to(follower, { x, y, duration: 0.4, ease: 'power3.out' });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-9999 mix-blend-difference hidden md:block"
      style={{ backgroundColor: 'transparent' }}
    />
  );
};

export default CustomCursor;
