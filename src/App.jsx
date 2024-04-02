import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { ItemListConteiner } from "./components/ItemListConteiner";
import { ItemDetailConteiner } from "./components/ItemDetailConteiner";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListConteiner />} />
        <Route path="/category/:id" element={<ItemListConteiner />} />
        <Route path="/item/:id" element={<ItemDetailConteiner />} />
        <Route path="#" element={404} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
