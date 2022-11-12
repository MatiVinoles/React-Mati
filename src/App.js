//Importamos componentes
import * as React from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Routes} from "react-router-dom"

function App() {


  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>   
        </Routes>
      </div>
    </>
  );
}

export default App;
