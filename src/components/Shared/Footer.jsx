import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const containerRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    // Rotate the subtle text circle relative to window scroll position
    const handleScroll = () => {
      if (circleRef.current) {
        circleRef.current.style.transform = `rotate(${window.scrollY * 0.15}deg)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // GSAP ScrollTrigger for Let's Talk Now text
    const ctx = gsap.context(() => {
      gsap.from(".footer-heading", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        y: -100,
        opacity: 0,
        duration: 1.4,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ctx.revert();
    };
  }, []);

  return (
    <footer ref={containerRef} className="w-full px-2 md:px-4 pb-6">
      <div className="w-full bg-[#0d0d0d] rounded-[20px] px-6 py-16 md:px-12 md:py-20 lg:p-24 relative overflow-hidden flex flex-col">
        {/* Right Side Sweeping Background Form */}
        <img
          src="/footer-right-side-bg.png"
          alt=""
          className="absolute bottom-0 right-0 w-full max-w-[80%] lg:max-w-[50%] opacity-50 z-0 pointer-events-none"
        />

        {/* Top Section - Let's Talk Now */}
        <div className="flex flex-col items-center justify-center relative mb-24 md:mb-32 lg:mb-40 z-10 w-full text-center">
          <h2 className="footer-heading font-heading font-medium tracking-tight text-[70px] sm:text-[100px] md:text-[140px] lg:text-[180px] xl:text-[220px] leading-[0.9] flex flex-col items-center">
            <span className="text-[#686868] mr-auto md:mr-0">Let's</span>
            <span className="flex items-center gap-3 sm:gap-6 flex-wrap justify-center -ml-8 md:ml-0 mt-2 md:mt-0">
              <span className="text-[#686868]">talk</span>
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "2px #333" }}
              >
                now
              </span>
            </span>
          </h2>

          {/* Rotating Circle explicitly centered below */}
          <div className="absolute -bottom-16 sm:-bottom-20 md:bottom-[-60px] lg:bottom-[-80px] left-1/2 -translate-x-1/2 flex items-center justify-center cursor-pointer group z-20">
            <div className="relative">
              <img
                ref={circleRef}
                src="/Get-in-touch-Circle.svg"
                alt="Get in touch"
                className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] lg:w-[180px] lg:h-[180px] group-hover:scale-105 transition-transform duration-500 ease-out inline-block"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <BsArrowRight className="w-6 h-6 lg:w-8 lg:h-8 text-[#888] group-hover:text-white group-hover:translate-x-2 transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section Layout */}
        {/* 12 columns: 5 for Left Image, 2 for Links, 4 for Details. 1 empty col on the far right. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10 mt-12 md:mt-0">
          {/* Left Column: Image & Floka */}
          <div className="lg:col-span-5 flex flex-col items-start lg:pr-8">
            <div className="relative rounded-[20px] overflow-hidden w-full lg:w-[450px] xl:w-[480px] aspect-4/3 z-10 shadow-xl mx-auto md:mx-0">
              <img
                src="/faq-img14.jpg"
                alt="Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/logo-icon-white.png"
                  alt="Logo"
                  className="w-[80px] h-[80px] xl:w-[100px] xl:h-[100px]"
                />
              </div>
            </div>
            {/* Huge outline text completely BELOW the image */}
            <div className="z-0 pointer-events-none text-center md:text-left mt-2 lg:mt-4 w-full">
              <h3
                className="text-transparent font-heading font-bold text-[90px] sm:text-[120px] md:text-[140px] lg:text-[160px] xl:text-[180px] leading-none uppercase opacity-10"
                style={{ WebkitTextStroke: "2px #888" }}
              >
                Floka
              </h3>
            </div>
          </div>

          {/* Middle Column: Navigation Links */}
          <div className="lg:col-span-2 flex flex-col gap-6 lg:gap-8 pt-0 lg:pt-8 w-max">
            {["About Us", "Journal", "Faq", "Get In Touch", "Careers"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="font-heading font-semibold text-[22px] xl:text-[26px] text-white hover:text-white/70 transition-colors w-fit"
                >
                  {link}
                </a>
              ),
            )}
          </div>

          {/* Right Column: Contact Details (pulled to the left naturally without ml-auto) */}
          <div className="lg:col-span-4 flex flex-col gap-8 lg:gap-10 pt-0 lg:pt-8 lg:max-w-[400px]">
            <p className="text-[#a0a0a0] text-[13px] xl:text-[14px] leading-[1.8] font-medium">
              At <span className="text-white font-bold">Floka</span>, we believe
              furniture should be more than just functional—it should tell your
              story. With a focus on timeless design, sustainable materials, and
              expert craftsmanship, we create pieces that feel personal.
            </p>

            <div className="flex flex-col gap-2">
              <a
                href="mailto:info@floka-design.com"
                className="text-white font-bold text-[14px] xl:text-[15px] cursor-pointer hover:opacity-80 transition-opacity w-fit"
              >
                info@floka-design.com
              </a>
              <p className="text-white font-bold text-[14px] xl:text-[15px]">
                +123 (456 789 00)
              </p>
              <p className="text-white font-bold text-[14px] xl:text-[15px]">
                12/A, Booston Tower, NYC
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaBehance].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 xl:w-11 xl:h-11 rounded-full border border-white/20 flex items-center justify-center group hover:bg-white hover:border-white transition-colors duration-300"
                  >
                    <Icon className="text-white/60 group-hover:text-[#0d0d0d] text-[15px]" />
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bottom Bar Outside the Block */}
      <div className="pt-8 pb-2 text-center flex justify-center w-full">
        <p className="text-[#888] text-[12px] md:text-[13px] font-medium">
          Copyright © {new Date().getFullYear()} Case-Themes
        </p>
      </div>
    </footer>
  );
};

export default Footer;
