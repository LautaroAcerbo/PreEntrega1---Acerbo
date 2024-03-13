import 'bootstrap/dist/css/bootstrap.min.css';


import "./App.css";
import { ItemListConteiner } from "./components/ItemListConteiner";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListConteiner greeting = "Bienvenido Usuario"/>
    </>
  );
}

export default App;
