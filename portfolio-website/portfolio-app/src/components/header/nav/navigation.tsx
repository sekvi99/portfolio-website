import React from "react";
import { PAGES } from "../../../utils/consts/pages";
import "./navigation.scss";
import { navigationAnimation } from "./navigation.motion";
import { motion } from "framer-motion";

const Navigation: React.FC = (): JSX.Element => {
  return (
    <motion.div
      variants={navigationAnimation}
      animate="enter"
      exit="exit"
      initial="initial"
      className="navigation"
    >
      <div className="navigation-header">
        <p>Navigation</p>
      </div>

      {/* TODO Prepare animation for link */}
      <motion.div className="links-container">
        {PAGES.map((page, index) => (
          <motion.a key={index} href={page} className="link">
            {page}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Navigation;
