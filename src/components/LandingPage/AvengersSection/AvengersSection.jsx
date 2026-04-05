import React, { useState } from 'react';
import SectionContainer from "../../ui/SectionContainer";
import AvengersContent from "./AvengersContent";
import AvengersCards from "./AvengersCards";

const AvengersSection = () => {
  const [activeTab, setActiveTab] = useState('DESIGN TEAM');

  return (
    <section className="py-24 md:py-32 xl:py-40 bg-[#f5f5f5]">
      <SectionContainer>
        <AvengersContent activeTab={activeTab} setActiveTab={setActiveTab} />
        <AvengersCards activeTab={activeTab} />
      </SectionContainer>
    </section>
  );
};

export default AvengersSection;
