import HqCard from "../../components/HqCard";
import { useEffect, useState } from "react";
import { getComics } from "../../services/apiMarvel";
import Loading from "../../components/Loading";
import {CardsContainer} from "./style";


const Home = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    getComics().then((data) => {
      setComics(data);
    });
  }, []);

  if (comics.length === 0) {
    return <Loading />;
  }

  return (
    <CardsContainer>
      {comics.map((hq) => (
        <HqCard key={hq.id} hq={hq} isRare={hq.isRare} />
      ))}
    </CardsContainer>
  );
};

export default Home;
