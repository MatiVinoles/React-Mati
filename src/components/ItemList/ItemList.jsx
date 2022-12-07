import React from "react";
import Item from "./Item";
import "./itemList.css";

function ItemList({ products }) {
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

export default React.memo(ItemList);
