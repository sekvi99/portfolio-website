import "./App.scss";
import Home from "./pages/home/Home";
import Cursor from "./components/cursor/cursor";
import Skills from "./pages/skills/Skills";
import Experience from "./pages/experience/Experience";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="app">
      <Home />
      <Skills />
      <Experience />
      <Cursor />
    </div>
  );
};

export default App;
