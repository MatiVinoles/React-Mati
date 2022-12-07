import React from "react";
import getItems, { getItemsByCategory } from "../../Services/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";

export default function ItemListContainer() {
  const [products, setProducts] = useState(null);
  const { categoryId } = useParams();

  async function getItemsAsync() {
    if (!categoryId) {
      let respuesta = await getItems();
      setProducts(respuesta);
    } else {
      let respuesta = await getItemsByCategory(categoryId);
      setProducts(respuesta);
    }
  }

  useEffect(() => {
    getItemsAsync();
  }, [categoryId]);

  return <> {products ? <ItemList products={products} /> : <Loader />}</>;
}
