import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row } from "react-bootstrap";
import "./item.css";

function Item({ title, img, price }) {
  return (
    <Container style={{width: "22rem", marginTop: "3rem"}}>
      <Row style={{width: "18rem"}}>
        <Card style={{ width: "18rem", textAlign: "center" }}>
          <Card.Img style={{height: "20rem"}} src={img} />
          <Card.Body className="d-flex row">
            <Card.Title style={{ height: "15px" }}>{title}</Card.Title>
            <Card.Text style={{ textAlign: "center" }}>U$S {price}</Card.Text>
            <Button variant="dark" style={{ alignSelf: "flex-end" }}>
              Comprar
            </Button>
            <Button
              variant="success"
              style={{ alignSelf: "flex-end", marginTop: "10px" }}
            >
              Ver más
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Item;
