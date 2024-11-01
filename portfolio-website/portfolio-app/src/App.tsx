import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import Skills from "./pages/skills/Skills";
import Experience from "./pages/experience/Experience";
import Cursor from "./components/cursor/cursor";
import Header from "./components/header/header";

const App: React.FC = (): JSX.Element => {
  const [loadingStatus, setLoadingStatus] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingStatus(true);
    }, 1750);
  }, []);

  return (
    <div className="app">
      <Router>
        {/* TODO HANDLE Loader */}
        {/* <AnimatePresence>{loadingStatus ? null : <Loader />}</AnimatePresence> */}
        <Cursor />
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
