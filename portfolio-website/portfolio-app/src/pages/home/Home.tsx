import React from "react";
import "./home.scss";
import { homeContent } from "../../content/home.content";

const Home: React.FC = (): JSX.Element => {
  return <div className="home-section section">
    <div className="logo-container">
    LOGO
    </div>
    <div className="hero-content-container content">
      {homeContent.heroSection}
    </div>
  </div>;
};

export default Home;
