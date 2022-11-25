import React from "react";
import { useContext } from "react";
import "./cart-widget.css";
import { BsFillCartFill } from "react-icons/bs";
import { cartContext } from "../../Context/cartContext";



export default function CartWidget() {
  const miContext = useContext(cartContext)

  return (
    <button className="nav-btn-cart">
      <BsFillCartFill />
      <span>{miContext.itemsInCart()}</span>
    </button>
  );
}
