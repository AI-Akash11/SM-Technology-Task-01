import SectionContainer from "../../ui/SectionContainer";
import ApproachContent from "./ApproachContent";
import ApproachHeading from "./ApproachHeading";
import ApproachMarquee from "./ApproachMarquee";

const ApproachSection = () => {
  return (
    <div>
      <SectionContainer>
        <ApproachHeading />
        <ApproachContent />
      </SectionContainer>
      <ApproachMarquee />
    </div>
  );
};

export default ApproachSection;
