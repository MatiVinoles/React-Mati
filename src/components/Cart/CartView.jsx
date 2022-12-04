import React, { useContext } from "react";
import { cartContext } from "../../Context/cartContext";
import "./cartView.css";
import Card from "react-bootstrap/Card";
import { Container, Row } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import { createOrder } from "../../Services/firestore";
import BuyingForm from "./BuyingForm";
import { useNavigate } from "react-router-dom";

const color = red[`A700`];

export default function CartView() {
  const { cart, removeItem, clearCart, cartPrice } = useContext(cartContext);
  let navigate = useNavigate();

  if (cart.length === 0)
    return <h1 className="emptyCart">No tienes items en el carrito</h1>;

  async function handleCheckout(evt, data) {
    const order = {
      buyer: data,
      items: cart,
      total: 0,
      date: new Date(),
    };

    const orderId = await createOrder(order);
    navigate(`/CompletedPurchase/${orderId}`);
  }

  return (
    <div>
      <div className="d-flex justify-content-between">
        <button className="botonLimpiar" onClick={() => clearCart()}>
          Limpiar carrito
        </button>
        <h5 className="totalCompra">Total: U$S {cartPrice()}</h5>
      </div>

      <Container className="cartGrid d-flex justify-content-evenly">
        {cart.map((item) => (
          <Row key={item.id} style={{ width: "18rem" }} className="d-flex justify-content-center">
            <Card style={{ width: "13rem", textAlign: "center" }}>
              <Card.Img style={{ height: "12rem" }} src={item.img} />
              <Card.Body className="d-flex row justify-content-center">
                <Card.Title style={{ height: "10px", fontSize: "15px" }}>
                  {item.title}
                </Card.Title>
                <Card.Text style={{ textAlign: "center", fontSize: "18px" }}>
                  U$S {item.price}
                </Card.Text>

                <div className="d-flex flex-column">
                  <span> Unidades: {item.count}</span>
                  <IconButton
                    aria-label="delete"
                    onClick={() => removeItem(item.id)}
                    className="deleteButton d-flex align-self-center"
                    style={{ color: color }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              </Card.Body>
            </Card>
          </Row>
        ))}
      </Container>
      <BuyingForm onSubmit={handleCheckout} />
    </div>
  );
}
