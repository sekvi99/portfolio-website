import React from "react";
import "./home.scss";
import { homeContent } from "../../content/home.content";
import { FaLongArrowAltRight } from "react-icons/fa";
import Reveal from "../../components/reveal/reveal";

const Home: React.FC = (): JSX.Element => {
  return (
    <div className="home-section section">
      <Reveal>
        <div className="hero-content-container content">
          <h1>{homeContent.heroSectionHeader}</h1>
          <p>{homeContent.heroSection}</p>
          <span>
            {homeContent.getToKnowMeText} <FaLongArrowAltRight className="contact-arrow" />
          </span>
        </div>
      </Reveal>
    </div>
  );
};

export default Home;
