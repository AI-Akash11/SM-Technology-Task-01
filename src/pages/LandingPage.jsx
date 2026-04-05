import ApproachSection from "../components/LandingPage/ApproachSection/ApproachSection";
import PortfolioSection from "../components/LandingPage/PortfolioSection/PortfolioSection";
import ExpertiseSection from "../components/LandingPage/ExpertiseSection/ExpertiseSection";
import FunfactsSection from "../components/LandingPage/FunfactsSection/FunfactsSection";
import HappyUsersSection from "../components/LandingPage/HappyUsersSection/HappyUsersSection";
import RewardsSection from "../components/LandingPage/RewardsSection/RewardsSection";
import AvengersSection from "../components/LandingPage/AvengersSection/AvengersSection";
import FAQSection from "../components/LandingPage/FAQSection/FAQSection";
import FeedbacksSection from "../components/LandingPage/FeedbacksSection/FeedbacksSection";
import InsightsSection from "../components/LandingPage/InsightsSection/InsightsSection";
import ScrollDivider from "../components/LandingPage/ScrollDivider/ScrollDivider";
import GetInTouch from "../components/LandingPage/GetInTouchSection/GetInTouch";
import BannerSection from "../components/LandingPage/BannerSection/BannerSection";

const LandingPage = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <BannerSection/>
      <ApproachSection/>
      <PortfolioSection/>
      <ExpertiseSection/>
      <FunfactsSection/>
      <HappyUsersSection/>
      <FeedbacksSection/>
      <GetInTouch/>
      <RewardsSection/>
      <AvengersSection/>
      <FAQSection/>
      <ScrollDivider/>
      <InsightsSection/>
    </div>
  );
};

export default LandingPage;
