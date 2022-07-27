import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/scss/App.scss";

/* import { HomeProvider } from "./components/home/HomeContext"; */
import { HomePage } from "./Pages/HomePage";
import { MovieDetail } from "./Pages/MovieDetail";

const App: React.FC = () => {
  return (
    <>
      {/* <HomeProvider> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
      {/* </HomeProvider> */}
    </>
  );
};

export default App;
