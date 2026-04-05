import React from 'react';
import SectionContainer from "../../ui/SectionContainer";
import FeedbacksHeading from "./FeedbacksHeading";
import FeedbackCards from "./FeedbackCards";

const FeedbacksSection = () => {
  return (
    <section className="py-24 md:py-32 xl:py-40 bg-[#EDEDED]">
      <SectionContainer>
        <FeedbacksHeading />
        <FeedbackCards />
      </SectionContainer>
    </section>
  );
};

export default FeedbacksSection;
