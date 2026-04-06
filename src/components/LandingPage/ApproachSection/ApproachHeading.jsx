import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ApproachHeading = () => {
    const containerRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(leftRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                },
                x: -150,
                opacity: 0,
                duration: 1.4,
                ease: 'power3.out',
            });

            gsap.from(rightRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                },
                x: 150,
                opacity: 0,
                duration: 1.4,
                ease: 'power3.out',
                delay: 0.15
            });

            // Inner Texts also stagger in from the right
            gsap.from(containerRef.current.querySelectorAll('p, h2, text'), {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                },
                x: 80,
                opacity: 0,
                duration: 1.4,
                ease: 'power3.out',
                stagger: 0.1,
                delay: 0.2
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-10 items-center">
            {/* left side */}
            <div ref={leftRef} className="col-span-2 sm:col-span-1 md:col-span-3 lg:col-span-3 mr-20">
                {/* floating icon */}
            <div className="relative flex items-center justify-center w-[110px] h-[110px]">
                
                {/* Circular Text SVG */}
                <svg 
                    viewBox="0 0 200 200" 
                    className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite]"
                >
                    <path 
                        id="circlePath" 
                        fill="none" 
                        d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" 
                    />
                    <text className="font-body text-[16px] font-medium tracking-[0.14em] fill-[#cccccc]">
                        <textPath href="#circlePath" startOffset="0%">
                            WANT IT TO SOUND PLAYFUL, LUXURIOUS, OR MORE/ 
                        </textPath>
                    </text>
                </svg>

                {/* Center Icon */}
                <img 
                    src="/logo-icon-black.png" 
                    alt="Floka Badge Icon" 
                    className="w-10 h-10 object-contain z-10"
                />
            </div>
            {/* text */}
            <div className="mt-5 lg:mt-6">
                <p className="text-[#666666] font-medium text-[14px] sm:text-[15px] leading-relaxed max-w-[240px]">We design every project with long-term success in mind.</p>
            </div>
            </div>
            {/* right side */}
            <div className="col-span-2 sm:col-span-1 md:col-span-7 lg:col-span-7 mt-8 md:mt-0 lg:pl-10">
                <h2 className="text-black font-medium text-[32px] md:text-[40px] lg:text-[44px] xl:text-[48px] leading-[1.2] tracking-tight max-w-[800px]">
                    Our approach is straightforward— <br className="hidden md:block"/> 
                    prioritizing functionality, speed, and <br className="hidden md:block"/> 
                    clarity for solutions.
                </h2>
            </div>

        </div>
    );
};

export default ApproachHeading;