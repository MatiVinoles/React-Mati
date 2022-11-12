import React from "react";
import Item from "../ItemList/Item";
import "./itemListContainer.css";
import getItems from "../../Services/mockService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";




export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  async function getItemsAsync() {
    let respuesta = await getItems(categoryId);
    setProducts(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, [categoryId]);

  return (
    <div className="grillaItems">
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            id={product.id}
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
