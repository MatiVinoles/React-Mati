import React from "react";
import { useParams } from "react-router-dom";
import "./completedPurchase.css";

function CompletedPurchase() {
  const orderId = useParams().orderId;

  return (
    <div className="order">
      <h1>Gracias por tu compra</h1>
      <h3 className="id">Tu ID es: {orderId}</h3>
      <h4>Te enviaremos un E-mail cuando procesemos tu orden</h4>
    </div>
  );
}

export default CompletedPurchase;
