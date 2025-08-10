import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HqDetails from "./pages/HqDetails";
import Navbar from "./components/Navbar";



const App = () => {

  return (
   <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hq/:id" element={<HqDetails />} />
      </Routes>
    </Router>
      );
};

export default App;
