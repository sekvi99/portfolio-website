import React from "react";
import "./pageIndicator.scss";
import { PAGES } from "../../utils/consts/pages";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const PageIndicator: React.FC = (): JSX.Element => {
  const selectedPage = useSelector(
    (state: RootState) => state.page.selectedPage
  );

  return (
    <div className="indicator-container">
      {PAGES.map((page, index) => (
        <div
          key={index}
          className={`page-dot ${page === selectedPage ? "active" : ""}`}
        ></div>
      ))}
    </div>
  );
};

export default PageIndicator;
