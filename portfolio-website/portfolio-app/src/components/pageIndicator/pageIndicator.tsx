import React from "react";
import "./pageIndicator.scss";
import { PAGES } from "../../utils/consts/pages";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { Link } from "react-router-dom";
import { changePage } from "../../state/page/pageSlice";

const PageIndicator: React.FC = (): JSX.Element => {
  const selectedPage = useSelector(
    (state: RootState) => state.page.selectedPage
  );
  const dispatch = useDispatch();

  const handlePathChange = (page: string) => {
    dispatch(changePage(page));
  };

  return (
    <div className="indicator-container">
      {PAGES.map((page, index) => (
        <Link to={`/${page}`} onClick={() => handlePathChange(page)}>
          <div
            key={index}
            className={`page-dot ${page === selectedPage ? "active" : ""}`}
          ></div>
        </Link>
      ))}
    </div>
  );
};

export default PageIndicator;
