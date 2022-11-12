import React from "react";
import { useState, useEffect } from "react";
import { getOneItem } from "../../Services/mockService";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";



export default function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  async function getItemsAsync() {
    let respuesta = await getOneItem(id);
    setProduct(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  return <ItemDetail product={product}/>;

}
