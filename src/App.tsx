import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/scss/App.scss";

import { HomePage } from "./Pages/HomePage";
import { MovieDetail } from "./Pages/MovieDetail";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
