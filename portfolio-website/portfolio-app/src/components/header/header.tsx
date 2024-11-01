import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import "./header.scss";
import Navigation from "./nav/navigation";

const Header: React.FC = (): JSX.Element => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="menu">
        <div className="header">
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="button"
          >
            <div
              className={`${isActive ? "burger active-menu" : "burger"}`}
            ></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Navigation />}</AnimatePresence>
    </>
  );
};

export default Header;
