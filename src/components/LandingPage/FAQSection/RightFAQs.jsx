import React, { useState } from 'react';

const RightFAQs = () => {
  const faqs = [
    {
      question: 'What is artificial intelligence (AI)?',
      answer: "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution."
    },
    {
      question: 'How does AI improve business efficiency?',
      answer: "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution."
    },
    {
      question: 'How long does AI implementation take?',
      answer: "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution."
    },
    {
      question: 'What industries can benefit from AI?',
      answer: "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`group transition-all duration-700 bg-[#F5F5F5] rounded-[32px] md:rounded-[40px] p-6 md:p-8 cursor-pointer ${
            activeIndex === index ? 'shadow-xl translate-x-2' : 'hover:bg-neutral/5'
          }`}
          onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
        >
          <div className="flex justify-between items-center gap-4">
            <h3 className="text-[18px] md:text-[24px] font-heading font-semibold text-black tracking-tight grow">
              {faq.question}
            </h3>
            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/10 flex items-center justify-center transition-all duration-500 ${activeIndex === index ? 'bg-black text-white rotate-45 scale-110' : 'group-hover:bg-black group-hover:text-white'}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14"/>
                <path d="M5 12h14"/>
              </svg>
            </div>
          </div>
          
          <div className={`overflow-hidden transition-all duration-700 ease-in-out ${activeIndex === index ? 'max-h-[500px] mt-8 opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="text-gray-600 text-[15px] md:text-[18px] mb-8 leading-relaxed max-w-[90%]">
              {faq.answer}
            </p>
            <button className="flex items-center gap-4 text-black font-extrabold text-[11px] md:text-[12px] tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">
              <span className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7"/>
                  <path d="M7 7h10v10"/>
                </svg>
              </span>
              GET IN TOUCH
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightFAQs;
