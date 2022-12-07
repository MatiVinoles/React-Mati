import React from "react";
import "./buyingForm.css";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useContext } from "react";
import { cartContext } from "../../Context/cartContext";

export default function BuyingForm(props) {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const {clearCart} = useContext(cartContext)


  function FinishPurchase(props) {
    props.handleCheckout(data);
    
  }

  function onInputChange(evt) {
    let nameInput = evt.target.name;
    let value = evt.target.value;

    let newData = { ...data };
    newData[nameInput] = value;
    setData(newData);
  }

  function onSubmit(evt) {
    if (data.name.length === 0) return;

    evt.preventDefault();
    props.onSubmit(evt, data);
  }

  return (
    <container
      className="d-flex justify-content-center"
      style={{ marginTop: "5rem" }}
    >
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            value={data.name}
            name="name"
            type="text"
            onChange={onInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            value={data.email}
            name="email"
            type="email"
            onChange={onInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            required
            value={data.phone}
            name="phone"
            type="phone"
            onChange={onInputChange}
          />
        </Form.Group>

        <button
          type="submit"
          onTouchButton={FinishPurchase()}
          className="botonCompraFinal"
        >
          Finalizar Compra
        </button>
      </Form>
    </container>
  );
}
