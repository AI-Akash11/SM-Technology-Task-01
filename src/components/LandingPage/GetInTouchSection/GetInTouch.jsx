import React from 'react';
import SectionContainer from "../../ui/SectionContainer";
import LeftContent from "./leftContent";
import RightForm from "./RightForm";

const GetInTouch = () => {
  return (
    <section className="py-24 md:py-32 xl:py-40 bg-[#EDEDED]">
      <SectionContainer>
        <div className="flex flex-col gap-24">
          <LeftContent />
          <RightForm />
        </div>
      </SectionContainer>
    </section>
  );
};

export default GetInTouch;
