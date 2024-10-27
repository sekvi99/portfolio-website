import React from "react";
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
import PageIndicator from "./components/pageIndicator/pageIndicator";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="app">
      <Router>
        <Cursor />
        <PageIndicator />

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
