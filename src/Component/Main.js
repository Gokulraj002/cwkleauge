import React from "react";
import HeaderTop from "./Header/HeaderTop";
import Header from "./Header/Header";
import Sliders from "./Home/Home";
import AboutSection from "./Home/About";
import Concept from "./Home/Concept";
import OrganizerSection from "./Home/OrganizerSection";
import WhyJoin from "./Home/WhyJoin";
import ParticipationBenefits from "./Home/ParticipationBenefits";
import HighlightsReach from "./Home/HighlightsReach";
import Footer from "./Header/Footer";

const Main = () => {
  return (
    <div>
      <HeaderTop />
      <Header />
      <Sliders />
      <AboutSection />
      <OrganizerSection />
      <Concept />
      <WhyJoin />
      <ParticipationBenefits />
      <HighlightsReach />
      <Footer />
    </div>
  );
};

export default Main;
