//Importamos componentes
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import {ProductCards} from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting= "Bienvenido"/>
    <ProductCards/>
    </>
  );
}

export default App;

