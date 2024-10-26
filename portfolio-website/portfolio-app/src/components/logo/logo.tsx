import React from "react";
import "./logo.scss";
import { homeContent } from "../../content/home.content";

const Logo: React.FC = (): JSX.Element => {
  return (
    <div className="logo-container">
      <div
        className="logo-img"
        style={{ backgroundImage: `url(${homeContent.logoPath})` }}
      ></div>
      <div className="logo-background"></div>
    </div>
  );
};

export default Logo;
