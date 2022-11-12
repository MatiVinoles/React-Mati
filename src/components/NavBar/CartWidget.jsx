import React from "react";
import "./cart-widget.css";
import { BsFillCartFill } from "react-icons/bs";

export default function CartWidget() {
  return (
    <button className="nav-btn-cart">
      <BsFillCartFill />
    </button>
  );
}
