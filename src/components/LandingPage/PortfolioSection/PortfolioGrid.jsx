import React from 'react';
import PortfolioCard from './PortfolioCard';

const works = [
    { id: 1, title: 'ALDAN BRANDING', year: '2025', tags: 'BRANDING, MODULE, UX',                   image: '/portfolio-img5.webp', logo: '/logoipsum-icon7.svg',  isLarge: false },
    { id: 2, title: 'ALDAN BRANDING', year: '2025', tags: 'BRANDING, MODULE, PRODUCT, UX, WEBSITE', image: '/portfolio-img2.jpg',  logo: '/logoipsum-icon6.svg', isLarge: false },
    { id: 3, title: 'ALDAN BRANDING', year: '2025', tags: 'BRANDING, UX',                           image: '/portfolio-img3.webp', logo: '/logoipsum-icon5.svg',  isLarge: true  },
    { id: 4, title: 'ALDAN BRANDING', year: '2025', tags: 'BRANDING, MODULE, PRODUCT, UX, WEBSITE', image: '/portfolio-img4.webp', logo: '/logoipsum-icon4.svg',  isLarge: false },
    { id: 5, title: 'ALDAN BRANDING', year: '2025', tags: 'BRANDING, PRODUCT, UX',                  image: '/portfolio-img1.webp', logo: '/logoipsum-icon3.svg',  isLarge: false },
];

const PortfolioGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-7">
            {works.map((work) => (
                <div key={work.id} className={work.isLarge ? 'col-span-1 md:col-span-2' : 'col-span-1'}>
                    <PortfolioCard {...work} />
                </div>
            ))}
        </div>
    );
};

export default PortfolioGrid;
