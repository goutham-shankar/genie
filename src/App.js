
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Contactus from "./Components/Contactus";
import Home from "./Components/Home";
import Header from "./Components/Header";

function App() {
  return (<>
    <Router>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Contactus" element={<Contactus />} />
      </Routes>
    </Router></>
  );
}

export default App;
