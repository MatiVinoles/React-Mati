import React, { useContext } from "react";
import { cartContext } from "../../Context/cartContext";
import "./cartView.css";
import Card from "react-bootstrap/Card";
import { Container, Row } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";

const color = red[`A700`];

export default function CartView() {
  const { cart, removeItem, clearCart, cartPrice } = useContext(cartContext);
  
  if (cart.length === 0) return <h1 className="emptyCart">No tienes items en el carrito</h1>;

  return (
    <div className="grid">
      <div className="d-flex justify-content-between">
        <button className="botonLimpiar" onClick={() => clearCart()}>
          Limpiar carrito
        </button>
        <h5 className="totalCompra">Total: ${cartPrice()}</h5>
        <button className="botonCompraFinal" onClick={() => ""}>
          Finalizar compra
        </button>
      </div>

      <Container className="cartGrid d-flex justify-content-evenly">
        {cart.map((item) => (
          <Row key={item.id} style={{ width: "18rem" }}>
            <Card style={{ width: "15rem", textAlign: "center" }}>
              <Card.Img style={{ height: "13rem" }} src={item.img} />
              <Card.Body className="d-flex row justify-content-center">
                <Card.Title style={{ height: "15px" }}>{item.title}</Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  U$S {item.price}
                </Card.Text>
                <IconButton
                  aria-label="delete"
                  onClick={() => removeItem(item.id)}
                  className="deleteButton"
                  style={{ color: color }}
                >
                  <DeleteIcon />
                </IconButton>
              </Card.Body>
            </Card>
          </Row>
        ))}
      </Container>
    </div>
  );
}
