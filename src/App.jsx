import { useEffect,useState } from "react";
import Navbar from "./components/Navbar";
import HqCard from "./components/HqCard";
import { getComics } from "./services/apiMarvel";
import Home from "./pages/Home";

const App = () => {

  return (
    <>
      <Home/>
    </>
  );
};

export default App;
