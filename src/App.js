
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Contactus from "./Components/Contactus";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Aboutus from "./Components/Aboutus";
import Footer from "./Components/Footer";
import Services from "./Components/Services";

function App() {
  return (<>
    <Router>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Contactus" element={<Contactus />} />
        <Route path="About" element={<Aboutus />} />
        <Route path="Services" element={<Services />} />
      </Routes>
      <Footer/>
    </Router></>
  );
}

export default App;
