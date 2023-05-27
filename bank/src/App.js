import React from "react";

import { Routes, Route } from "react-router-dom";
import Routs from "./components/Routs";
import "./scss/style.scss";
const App = () => {
  return (
    <Routes>
      {Routs &&
        Routs.map((rt, index) => (
          <Route key={index} path={rt.path} element={rt.component} />
        ))}
    </Routes>
  );
};

export default App;
