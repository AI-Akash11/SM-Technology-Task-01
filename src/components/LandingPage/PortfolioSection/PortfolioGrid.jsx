import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PortfolioCard from './PortfolioCard';

gsap.registerPlugin(ScrollTrigger);

const works = [
    { id: 1, title: 'ALDAN BRANDING', year: '2025', tags: 'BRANDING, MODULE, UX',                   image: '/portfolio-img5.webp', logo: '/logoipsum-icon7.svg',  isLarge: false },
    { id: 2, title: 'ALDAN BRANDING', year: '2025', tags: 'BRANDING, MODULE, PRODUCT, UX, WEBSITE', image: '/portfolio-img2.jpg',  logo: '/logoipsum-icon6.svg', isLarge: false },
    { id: 3, title: 'ALDAN BRANDING', year: '2025', tags: 'BRANDING, UX',                           image: '/portfolio-img3.webp', logo: '/logoipsum-icon5.svg',  isLarge: true  },
    { id: 4, title: 'ALDAN BRANDING', year: '2025', tags: 'BRANDING, MODULE, PRODUCT, UX, WEBSITE', image: '/portfolio-img4.webp', logo: '/logoipsum-icon4.svg',  isLarge: false },
    { id: 5, title: 'ALDAN BRANDING', year: '2025', tags: 'BRANDING, PRODUCT, UX',                  image: '/portfolio-img1.webp', logo: '/logoipsum-icon3.svg',  isLarge: false },
];

const PortfolioGrid = () => {
    const gridRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            cardRefs.current.forEach((card, i) => {
                if (!card) return;
                const work = works[i];
                let x = 0, y = 0;
                
                if (work.isLarge) {
                    y = 150; // Vast bottom section flies from underneath
                } else if (i % 2 === 0) {
                    x = -150; // Odd-index column from left
                } else {
                    x = 150;  // Even-index column from right
                }

                // Parent wrapper sliding
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                    },
                    x,
                    y,
                    opacity: 0,
                    duration: 1.4,
                    ease: 'power3.out',
                });

                // Inner text cascade sliding from the right 
                const innerTexts = card.querySelectorAll('h3, span, p');
                if (innerTexts.length > 0) {
                   gsap.from(innerTexts, {
                       scrollTrigger: {
                           trigger: card,
                           start: 'top 85%',
                       },
                       x: 50,
                       opacity: 0,
                       duration: 1.4,
                       ease: 'power3.out',
                       stagger: 0.05,
                       delay: 0.2
                   });
                }
            });
        }, gridRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-7 overflow-hidden py-4 -my-4">
            {works.map((work, idx) => (
                <div 
                  key={work.id} 
                  ref={el => cardRefs.current[idx] = el}
                  className={work.isLarge ? 'col-span-1 md:col-span-2' : 'col-span-1'}
                >
                    <PortfolioCard {...work} />
                </div>
            ))}
        </div>
    );
};

export default PortfolioGrid;
