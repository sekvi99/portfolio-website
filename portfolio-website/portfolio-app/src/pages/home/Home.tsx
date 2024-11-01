import React from "react";
import "./home.scss";
import { homeContent } from "../../content/home.content";
import { FaLongArrowAltRight } from "react-icons/fa";
import Reveal from "../../components/reveal/reveal";
import Lottie from "lottie-react";
import Coder from "../../assets/animations/home-animation.json";
import Socials from "../../components/socials/socials";

const Home: React.FC = (): JSX.Element => {
  return (
    <div className="home-section">
      <div className="home-container">
        <div className="hero-info-container">
          <Reveal>
            <div>
              <p id="hero-text">{homeContent.heroSectionHeader}</p>
              <p id="hero-title">{homeContent.heroSubHeader}</p>
              <p id="hero-content">{homeContent.heroSection}</p>
              <span>
                {homeContent.getToKnowMeText}{" "}
                <FaLongArrowAltRight className="contact-arrow" />
              </span>
            </div>
          </Reveal>
        </div>
        <div className="animation-container">
          <Reveal>
            <Lottie width={400} height={400} animationData={Coder} />
          </Reveal>
        </div>
      </div>
      <Socials />
    </div>
  );
};

export default Home;
