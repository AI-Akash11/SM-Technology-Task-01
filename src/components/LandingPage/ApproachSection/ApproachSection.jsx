import SectionContainer from "../../ui/SectionContainer";
import ApproachContent from "./ApproachContent";
import ApproachHeading from "./ApproachHeading";
import ApproachMarquee from "./ApproachMarquee";

const ApproachSection = () => {
  return (
    <section className="pt-24 md:pt-[120px] xl:pt-[140px] pb-5 md:pb-10 flex flex-col overflow-hidden bg-transparent">
      
      <SectionContainer>
        {/* Heading & Rotating Badge */}
        <ApproachHeading />
        
        {/* Asymmetric Bento Grid */}
        <div className="mt-14 md:mt-20">
          <ApproachContent />
        </div>
      </SectionContainer>
      
      {/* Infinite Marquee */}
      <div className="mt-8 md:mt-12 lg:mt-20">
        <ApproachMarquee />
      </div>

    </section>
  );
};

export default ApproachSection;
