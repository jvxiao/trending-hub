import React from "react";
import ReactDOM from "react-dom/client";
import { TrendingMap } from "./components/Trending";
import { HomePage, Navigator } from "./components/Home";
import { One } from "./components/One";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/home.scss";
import { createContext, useContext } from "react";

const ModeContext = createContext("entertainment");

const App = () => {
  const [mode, setMode] = useContext(ModeContext);
  return (
    <ModeContext.Provider values={{ mode, setMode }}>
      <Router>
        <One />
        <Navigator />
        <Routes>
          {Object.entries(TrendingMap).map((item) => {
            const [path, component] = item;
            return <Route path={path} element={component} />;
          })}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </ModeContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("app")).render(
  <div>
    <App />
  </div>
);
