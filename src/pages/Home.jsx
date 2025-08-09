import Navbar from "../components/Navbar";
import HqCard from "../components/HqCard";
import { useEffect, useState } from "react";
import { getComics } from "../services/apiMarvel";


const Home = () => {
    const [comics, setComics] = useState([]);
    
    useEffect(() => {
       getComics().then(data => {
         setComics(data.data.results)
       });
     }, []); 
    
    return (
        <>
            <Navbar/>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', height: '100%' , paddingBottom:'50px' }}>
            {comics.map((hq) => (
                <HqCard key={hq.id} hq={hq} isRare={hq.isRare} />
            ))}
            </div>
        </>
    );
    }

    export default Home;