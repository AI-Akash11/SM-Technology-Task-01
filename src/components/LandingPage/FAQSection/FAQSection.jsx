import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import SectionContainer from "../../ui/SectionContainer";
import { BsPlus, BsDash } from "react-icons/bs";
import gsap from "gsap";

const faqs = [
  {
    id: 1,
    question: "What is artificial intelligence (AI)?",
    answer:
      "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
    image: "/faq-img15.jpg",
  },
  {
    id: 2,
    question: "How does AI improve business efficiency?",
    answer:
      "AI automates repetitive tasks, provides data-driven insights, and helps businesses make faster, smarter decisions.",
    image: "/faq-img2.webp",
  },
  {
    id: 3,
    question: "How long does AI implementation take?",
    answer:
      "It varies depending on the complexity of the solution. Typical implementations range from a few weeks to several months.",
    image: "/faq-img3.webp",
  },
  {
    id: 4,
    question: "What industries can benefit from AI?",
    answer:
      "Almost every industry can benefit from AI, including healthcare, finance, retail, manufacturing, and logistics.",
    image: "/faq-img14.jpg",
  },
  {
    id: 5,
    question: "What are the costs of AI solutions?",
    answer:
      "Costs vary widely based on scope and deployment. We offer customized plans to fit various scales.",
    image: "/faq-img15.jpg",
  },
];

/* ---------- Single accordion item component ---------- */
const FAQItem = ({ faq, isOpen, onClick }) => {
  const bodyRef = useRef(null);
  const contentRef = useRef(null);
  const isFirstRender = useRef(true);

  useLayoutEffect(() => {
    if (!bodyRef.current) return;

    // On first mount set initial state quietly (no animation)
    if (isFirstRender.current) {
      gsap.set(bodyRef.current, { height: isOpen ? "auto" : 0 });
      if (contentRef.current) {
        gsap.set(contentRef.current, {
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : 10,
        });
      }
      isFirstRender.current = false;
      return;
    }

    if (isOpen) {
      // Expand: height 0 → auto
      gsap.fromTo(
        bodyRef.current,
        { height: 0 },
        { height: "auto", duration: 0.45, ease: "power3.out", overwrite: true },
      );
      // Fade + slight rise for content
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            delay: 0.05,
            ease: "power2.out",
            overwrite: true,
          },
        );
      }
    } else {
      // Collapse: auto → 0
      gsap.to(bodyRef.current, {
        height: 0,
        duration: 0.35,
        ease: "power3.in",
        overwrite: true,
      });
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          opacity: 0,
          y: 6,
          duration: 0.2,
          ease: "power2.in",
          overwrite: true,
        });
      }
    }
  }, [isOpen]);

  return (
    <div
      className={`w-full bg-white cursor-pointer transition-[border-radius] duration-500 ease-in-out ${
        isOpen ? "rounded-[14px]" : "rounded-[14px] hover:bg-neutral-50"
      }`}
      onClick={onClick}
    >
      {/* Question row */}
      <div className="flex items-center justify-between w-full px-5 py-4">
        <h3 className="text-[13px] md:text-[14px] font-semibold text-[#111] pr-4 leading-snug">
          {faq.question}
        </h3>
        <div className="w-7 h-7 shrink-0 rounded-full bg-black text-white flex items-center justify-center">
          {isOpen ? (
            <BsDash className="text-base" />
          ) : (
            <BsPlus className="text-base" />
          )}
        </div>
      </div>

      {/* Body — GSAP controls height, overflow always hidden */}
      <div ref={bodyRef} style={{ overflow: "hidden", height: 0 }}>
        <div ref={contentRef} className="px-4 pb-5 pt-1" style={{ opacity: 0 }}>
          <div className="flex flex-col sm:flex-row gap-5">
            {/* Left image — landscape */}
            <div className="w-full sm:w-[220px] shrink-0 rounded-[10px] overflow-hidden aspect-3/2">
              <img
                src={faq.image}
                alt={faq.question}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Right: text + button */}
            <div className="flex flex-col justify-between min-h-[120px]">
              <p className="text-[14px] md:text-[15px] text-black/60 leading-[1.7] mb-4">
                {faq.answer}
              </p>
              <div className="flex items-center gap-3 group/btn">
                <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                  <BsPlus className="text-white text-base" />
                </div>
                <span className="text-[10px] font-bold tracking-widest text-black uppercase">
                  GET IN TOUCH
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- Main FAQ Section ---------- */
const FAQSection = () => {
  const [openId, setOpenId] = useState(1);

  return (
    <section className="py-16 md:py-24 w-full bg-[#f8f8f8]">
      <SectionContainer>
        {/* Top header: Title above horizontal line */}
        <div className="mb-10 md:mb-14">
          <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-black/50 mb-4">
            FAQ & GET ANSWER
          </p>
          <div className="w-full h-px bg-black/10"></div>
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Left Column: context note + image */}
          <div className="md:col-span-4 flex flex-col">
            <div className="flex flex-col mt-auto">
              <p className="text-[12px] md:text-[13px] text-black/50 font-medium leading-[1.6] mb-5 max-w-[260px]">
                Don't found anything yet. Feel free to ask anything.{" "}
                <a
                  href="#"
                  className="text-black font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  Let's Talk
                </a>
              </p>
              <div className="rounded-[16px] overflow-hidden aspect-square w-full max-w-[260px] md:max-w-[280px]">
                <img
                  src="/faq-img14.jpg"
                  alt="FAQ"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: heading + accordion */}
          <div className="md:col-span-7 md:col-start-6 flex flex-col">
            <h2 className="text-[34px] md:text-[40px] lg:text-[48px] font-heading font-medium text-[#111] leading-[1.1] tracking-tight mb-10 md:mb-12">
              Have more questions?
              <br /> We've answers.
            </h2>

            <div className="flex flex-col gap-2">
              {faqs.map((faq) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openId === faq.id}
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default FAQSection;
