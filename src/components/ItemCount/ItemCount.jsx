import React, { useState } from "react";
import "./itemcount.css";

function ItemCount({ stock }) {
  const [count, setCount] = useState(1);

  function handleAdd(event) {
    if (count < stock) setCount(count + 1);
  }

  function handleSubstract(event) {
    if (count > 1) setCount(count - 1);
  }

  return (
    <div>
      <div className="buttonsCounter">
        <button className="botonContador" onClick={handleSubstract}>
          -
        </button>
        <span>{count}</span>
        <button className="botonContador" onClick={handleAdd}>
          +
        </button>
      </div>

      <button className="botonComprar" style={{ alignSelf: "flex-end" }}>
        Comprar
      </button>
    </div>
  );
}

export default ItemCount;
