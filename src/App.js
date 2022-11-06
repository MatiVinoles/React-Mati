//Importamos componentes
import * as React from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Nosotros from "./components/Sections/Nosotros";
import Contacto from "./components/Sections/Contacto";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Sections/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Routes} from "react-router-dom"

function App() {


  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Nosotros" element={<Nosotros/>}/>
          <Route path="/Tienda" element={<ItemListContainer/>}/>
          <Route path="/Contacto" element={<Contacto/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
