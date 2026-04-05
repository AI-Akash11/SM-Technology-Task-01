import React from 'react';
import SectionContainer from "../../ui/SectionContainer";
import FeedbacksHeading from "./FeedbacksHeading";
import FeedbackCards from "./FeedbackCards";

const FeedbacksSection = () => {
  return (
    <section className="py-10 md:py-16 bg-[#f5f5f5]">
      <SectionContainer>
        <FeedbacksHeading />
        <FeedbackCards />
      </SectionContainer>
    </section>
  );
};

export default FeedbacksSection;
