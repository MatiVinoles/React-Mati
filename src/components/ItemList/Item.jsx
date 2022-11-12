import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row } from "react-bootstrap";
import "./item.css";
import { Link } from "react-router-dom";

function Item({ title, img, price, id }) {
  const urlDetail = `/detail/${id}`;
  return (
    <Container
      style={{ width: "22rem", marginTop: "3rem", marginBottom: "3rem" }}
    >
      <Row style={{ width: "18rem" }}>
        <Card style={{ width: "18rem", textAlign: "center" }}>
          <Card.Img style={{ height: "20rem" }} src={img} />
          <Card.Body className="d-flex row">
            <Card.Title style={{ height: "15px" }}>{title}</Card.Title>
            <Card.Text style={{ textAlign: "center" }}>U$S {price}</Card.Text>
            <Link to={urlDetail}>
              <button className="botonDetail" style={{ alignSelf: "flex-end" }}>
                Ver Detalles
              </button>
            </Link>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Item;
