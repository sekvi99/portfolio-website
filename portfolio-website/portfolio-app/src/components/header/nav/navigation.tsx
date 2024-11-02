import React, { useEffect } from "react";
import { PAGES } from "../../../utils/consts/pages";
import "./navigation.scss";
import { navigationAnimation } from "./navigation.motion";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../../state/page/pageSlice";
import { RootState } from "../../../state/store";

const Navigation: React.FC = (): JSX.Element => {
  let activePage = useSelector((state: RootState) => state.page.selectedPage);

  const dispatch = useDispatch();

  const handlePageChange = (page: string) => dispatch(changePage(page));

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
          <motion.a
            key={index}
            href={page}
            className={page === activePage ? "link link-active" : "link"}
            onClick={(e) => {
              handlePageChange(page);
            }}
          >
            {page}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Navigation;
