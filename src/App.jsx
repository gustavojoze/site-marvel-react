import { useEffect,useState } from "react";
import Navbar from "./components/Navbar";
import HqCard from "./components/HqCard";
import { getComics } from "./services/apiMarvel";
import Home from "./pages/Home";
import HqDetails from "./pages/HqDetails";

const App = () => {

  return (
    <>
    <HqDetails/>
    </>
  );
};

export default App;
