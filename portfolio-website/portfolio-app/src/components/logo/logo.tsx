import React from "react";
import "./logo.scss";
import { homeContent } from "../../content/home.content";
import Reveal from "../reveal/reveal";

const Logo: React.FC = (): JSX.Element => {
  return (
    <Reveal>
    <div className="logo-container">
      <div
        className="logo-img"
        style={{ backgroundImage: `url(${homeContent.logoPath})` }}
      ></div>
      <div className="logo-background"></div>
    </div>
    </Reveal>
  );
};

export default Logo;
