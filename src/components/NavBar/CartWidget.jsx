import React from "react";
import "./cart-widget.css";

function CartWidget(props) {
  return (
    <div className="cartAndCounter">
      <div>
        <h3>{props.amount}</h3>
      </div>
      <div>
        <a href="carrito">
          <img alt="carrito" src="/img/shoppingCart.png" />
        </a>
      </div>
    </div>
  );
}

export default CartWidget;
