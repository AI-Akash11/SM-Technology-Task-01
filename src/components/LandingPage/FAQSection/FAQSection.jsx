import React, { useState } from 'react';
import SectionContainer from "../../ui/SectionContainer";
import { BsPlus, BsDash } from "react-icons/bs";

const faqs = [
  { id: 1, question: "What is artificial intelligence (AI)?", answer: "AI is the simulation of human intelligence processes by machines, especially computer systems." },
  { id: 2, question: "How does AI improve business efficiency?", answer: "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.", hasInternalImage: true },
  { id: 3, question: "How long does AI implementation take?", answer: "It varies depending on the complexity of the solution. Typical implementations range from a few weeks to several months." },
  { id: 4, question: "What industries can benefit from AI?", answer: "Almost every industry can benefit from AI, including healthcare, finance, retail, manufacturing, and logistics." },
  { id: 5, question: "What are the costs of AI solutions?", answer: "Costs vary widely based on scope and deployment. We offer customized plans to fit various scales." }
];

const FAQSection = () => {
  const [openId, setOpenId] = useState(2);

  return (
    <section className="py-24 md:py-32 w-full bg-[#f8f8f8]">
      <SectionContainer>
        
        {/* Top Border Divider */}
        <div className="w-full border-t border-black/10 pt-4 md:pt-6">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
             
             {/* Left Column */}
             <div className="lg:col-span-4 flex flex-col items-start justify-between">
                <h4 className="text-[10px] font-bold tracking-[0.15em] uppercase text-black mb-20 lg:mb-0">FAQ & GET ANSWER</h4>
                
                <div className="flex flex-col mt-auto pt-20 lg:pt-40">
                   <p className="text-[14px] text-black/60 font-medium leading-[1.6] mb-6 max-w-[280px]">
                     Don't found anything yet. Feel free to ask anything. <a href="#" className="text-black font-bold underline decoration-2 underline-offset-4 hover:opacity-70 transition-opacity">Let's Talk</a>
                   </p>
                   {/* Left Image block */}
                   <div className="w-full rounded-[20px] overflow-hidden aspect-square max-w-[280px]">
                      <img src="/faq-img14.jpg" alt="FAQ" className="w-full h-full object-cover" />
                   </div>
                </div>
             </div>

             {/* Right Column */}
             <div className="lg:col-span-7 lg:col-start-6">
                <h2 className="text-[40px] md:text-[50px] lg:text-[56px] font-heading font-medium text-[#111] leading-[1.1] tracking-tight mb-12">
                  Have more questions?<br className="hidden md:block"/> We've answers.
                </h2>

                {/* FAQ Accordion List */}
                <div className="flex flex-col gap-3">
                   {faqs.map((faq) => {
                      const isOpen = openId === faq.id;
                      
                      return (
                         <div 
                           key={faq.id} 
                           className={`w-full bg-white transition-all duration-300 overflow-hidden cursor-pointer ${isOpen ? 'rounded-[20px] p-2' : 'rounded-full hover:bg-neutral-50 px-2'}`}
                           onClick={() => setOpenId(isOpen ? null : faq.id)}
                         >
                            {/* Accordion Header */}
                            <div className={`flex items-center justify-between w-full p-4 ${isOpen ? 'mb-2' : ''}`}>
                               <h3 className="text-[14px] md:text-[15px] font-semibold text-[#111] pr-4">{faq.question}</h3>
                               <div className="w-8 h-8 shrink-0 rounded-full bg-black text-white flex items-center justify-center">
                                  {isOpen ? <BsDash className="text-lg" /> : <BsPlus className="text-lg" />}
                               </div>
                            </div>

                            {/* Accordion Body */}
                            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                               <div className="overflow-hidden">
                                  {isOpen && (
                                     <div className="px-4 pb-6 pt-2">
                                        {faq.hasInternalImage ? (
                                           <div className="flex flex-col sm:flex-row gap-6">
                                              <div className="w-full sm:w-[200px] aspect-[16/10] shrink-0 rounded-xl overflow-hidden">
                                                 <img src="/faq-img14.jpg" alt="AI Solution" className="w-full h-full object-cover" />
                                              </div>
                                              <div className="flex flex-col justify-between py-1">
                                                 <p className="text-[13px] text-black/60 leading-[1.7] mb-4">
                                                   {faq.answer}
                                                 </p>
                                                 <div className="flex items-center gap-3 group/btn">
                                                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                                                       <BsPlus className="text-white text-lg" />
                                                    </div>
                                                    <span className="text-[10px] font-bold tracking-[0.15em] text-black uppercase">GET IN TOUCH</span>
                                                 </div>
                                              </div>
                                           </div>
                                        ) : (
                                           <p className="text-[13px] text-black/60 leading-[1.7]">{faq.answer}</p>
                                        )}
                                     </div>
                                  )}
                               </div>
                            </div>

                         </div>
                      );
                   })}
                </div>
             </div>

           </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default FAQSection;
