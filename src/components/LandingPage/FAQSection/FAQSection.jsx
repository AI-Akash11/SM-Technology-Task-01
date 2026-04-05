import React from 'react';
import SectionContainer from "../../ui/SectionContainer";
import LeftImage from "./LeftImage";
import RightFAQs from "./RightFAQs";

const FAQSection = () => {
  return (
    <section className="py-24 md:py-32 xl:py-40 bg-white">
      <SectionContainer>
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">
          <div className="lg:w-1/2">
            <LeftImage />
          </div>
          <div className="lg:w-1/2">
            <RightFAQs />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default FAQSection;
