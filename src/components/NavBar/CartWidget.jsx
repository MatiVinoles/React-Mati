import React from "react";
import { useContext } from "react";
import "./cart-widget.css";
import { BsFillCartFill } from "react-icons/bs";
import { cartContext } from "../../Context/cartContext";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const miContext = useContext(cartContext);
  const items = miContext.itemsInCart();

  return (
    <Link to="/cart">
      <button className="nav-btn-cart">
        <BsFillCartFill />
        {items !== 0 && (
          <span className="counter">{miContext.itemsInCart()}</span>
        )}
      </button>
    </Link>
  );
}
