import React from "react";
import Item from "../ItemList/Item";
import "./itemListContainer.css"
import getItems from "../../Services/mockService";
import { useState, useEffect } from "react";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(
    () => {
      getItems().then((respuesta) => {
        setProducts(respuesta);
      });
    },
    []
  )

  return (
    <div className="grillaItems">
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            img={product.img}
            title={product.title}
            price={product.price}
            category={product.category}
          />
        );
      })}
    </div>
  );
}
