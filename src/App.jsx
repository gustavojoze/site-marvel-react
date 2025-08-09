import { useEffect,useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HqCard from "./components/HqCard";
import { getComics } from "./services/apiMarvel";
import Home from "./pages/Home";
import HqDetails from "./pages/HqDetails";

const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hq/:id" element={<HqDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
