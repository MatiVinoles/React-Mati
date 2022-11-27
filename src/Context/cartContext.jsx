import { createContext, useState } from "react";

export const cartContext = createContext();

const ContextProvider = cartContext.Provider;

export function CartContextProvider({children}) {
  const [cart, setCart] = useState([]);

  function addToCart(product, count) {
    let getItemQuantity = cart.findIndex(
      (itemInCart) => itemInCart.id === product.id
    );
    let newCart = [...cart];

    if (getItemQuantity !== -1) {
      newCart[getItemQuantity].count += count;
      setCart(newCart);
    } else {product.count = count;
    newCart.push(product);
    setCart(newCart);}
  }

  function clearCart() {
    let newCart = [];
    setCart(newCart);
  }

  function removeItem(id) {
    let newCart = cart.filter((Item) => Item.id !== id);
    setCart(newCart);
  }

  function itemsInCart() {
    let total = 0;
    cart.forEach((itemInCart) => (total = total + itemInCart.count));
    return total;
  }

  function cartPrice() {
    /*Calcular costo total */
  }
  return (
    <ContextProvider
      value={{ cart, addToCart, setCart, clearCart, removeItem, itemsInCart, cartPrice }}
    >
      {children}
    </ContextProvider>
  );
}
