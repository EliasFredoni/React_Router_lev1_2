import SchabloneMore from './components/SchabloneMore';
import { Routes, Route } from "react-router-dom";
import Galerie from "./pages/Galerie";
import Kontakt from "./pages/Kontakt";
import Oeffnungszeiten from "./pages/Oeffnungszeiten";
import Speisekarte from "./pages/Speisekarte";

import './App.css';

function App() {
  return (
    <div className="App">
      <SchabloneMore />
      <Routes>
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/oeffnungszeiten" element={<Oeffnungszeiten />} />
        <Route path="/speisekarte" element={<Speisekarte />} />
      </Routes>
    </div >
  );
}

export default App;
