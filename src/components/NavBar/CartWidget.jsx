import React from "react";

function CartWidget (props) {
    return (
        <div>
            <a href="carrito">
                <h3>
                    {props.amount}
                </h3>
                <img src="./public/img/shopping-cart.png"/>
            </a>
        </div>
    )
}

export default CartWidget