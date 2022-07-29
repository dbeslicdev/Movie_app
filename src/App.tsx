import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/scss/App.scss";

/* import { HomeProvider } from "./components/home/HomeContext"; */
import { HomePage } from "./Pages/HomePage";
import { Movies } from "./Pages/Movies";
import { MovieDetail } from "./Pages/MovieDetail";
import { Shows } from "./Pages/Shows";
import { ShowsDetail } from "./Pages/ShowsDetail";
import { Actor } from "./Pages/Actor";

const App: React.FC = () => {
  return (
    <>
      {/* <HomeProvider> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/show/:id" element={<ShowsDetail />} />
          <Route path="/actor/:id" element={<Actor />} />
        </Routes>
      </Router>
      {/* </HomeProvider> */}
    </>
  );
};

export default App;
