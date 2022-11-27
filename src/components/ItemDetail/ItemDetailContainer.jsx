import React from "react";
import { useState, useEffect } from "react";
import { getOneItem } from "../../Services/firestore";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  async function getItemsAsync() {
    getOneItem(id).then( respuesta => {
      setProduct(respuesta);
      setIsLoading(false);
    })
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  if (isLoading) return <Loader/>;

  return <ItemDetail product={product} />;
}
