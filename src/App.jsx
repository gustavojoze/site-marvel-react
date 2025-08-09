import { useEffect,useState } from "react";
import Navbar from "./components/Navbar";
import HqCard from "./components/HqCard";
import { getComics } from "./services/apiMarvel";

const App = () => {
const [comics, setComics] = useState([]);
  useEffect(() => {
    getComics().then(data => {
      setComics(data.data.results)
    });
  }, []); 
  return (
    <>
      <Navbar />
      {comics.map((hq) => (
        <HqCard key={hq.id} hq={hq} />
      ))}
    </>
  );
};

export default App;
