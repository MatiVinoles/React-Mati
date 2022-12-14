//Importamos componentes
import * as React from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { CartContextProvider } from "./Context/cartContext";
import CartView from "./components/Cart/CartView";
import CompletedPurchase from "./components/CompletedPurchase/CompletedPurchase";

function App() {
  return (
    <>
      <CartContextProvider>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView />} />
            <Route
              path="/CompletedPurchase/:orderId"
              element={<CompletedPurchase />}
            />
          </Routes>
        </div>
        <Footer />
      </CartContextProvider>
    </>
  );
}

export default App;
