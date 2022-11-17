import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row } from "react-bootstrap";
import "./itemDetail.css";
import ItemCount from "../ItemCount/ItemCount";



export default function ItemDetail({ product }) {
  return (
    <Container style={{ width: "22rem", marginTop: "3rem", minHeight: "100vh" }}>
      <Row style={{ width: "18rem" }}>
        <Card style={{ width: "18rem", textAlign: "center" }}>
          <Card.Img style={{ height: "20rem" }} src={product.img} />
          <Card.Body className="d-flex row">
            <Card.Title style={{ height: "15px" }}>{product.title}</Card.Title>
            <Card.Text style={{ textAlign: "center" }}>U$S {product.price}</Card.Text>
            <Card.Text style={{ textAlign: "center" }}>{product.description}</Card.Text>
            <ItemCount stock={5}/>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}


