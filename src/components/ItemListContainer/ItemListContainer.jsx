import React from "react";
import "./item-list-container.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row } from "react-bootstrap";


export default function ItemListContainer() {
  return (
    <Container>
      <Row className="d-flex justify-content-around mt-5">
        <Card style={{ width: "18rem", textAlign: "center" }}>
          <Card.Img
            style={{ marginTop: "12px", height: "170 px" }}
            src="/img/coffee-sumatra.jpg"
          />
          <Card.Body className="d-flex row">
            <Card.Title style={{height: "15px"}}>Sumatra</Card.Title>
            <Card.Text>
              Café de origen con tostado oscuro, cuerpo completo y consistente.
              Su sabor predominante es terroso y herbal.
            </Card.Text>
            <Button variant="dark" style={{alignSelf: "flex-end"}}>Comprar</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", textAlign: "center" }}>
          <Card.Img
            style={{ marginTop: "12px", height: "170 px" }}
            src="/img/coffee-colombia.jpg"
          />
          <Card.Body className="d-flex row">
            <Card.Title style={{height: "15px"}}>Colombia</Card.Title>
            <Card.Text>
              Café colombiano de origen único con cuerpo redondo, sabor jugoso y
              un característico final a nuez.
            </Card.Text>
            <Button variant="dark" style={{alignSelf: "flex-end"}}>Comprar</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", textAlign: "center" }}>
          <Card.Img
            style={{ marginTop: "12px", height: "170 px" }}
            src="/img/coffee-moka.jpg"
          />
          <Card.Body className="d-flex row">
            <Card.Title style={{height: "15px"}}>Moka</Card.Title>
            <Card.Text>
              La particularidad de este grano es su bajo nivel de acidez y su
              sabor similar al chocolate. Por esta razón, es común que se
              confunda al Moka con la combinación de café y cacao, aunque se
              trata de preparaciones diferentes.
            </Card.Text>
            <Button variant="dark" style={{alignSelf: "flex-end"}}>Comprar</Button>
          </Card.Body>
        </Card>
      </Row>

      <Row className="d-flex justify-content-around mt-5">
        <Card style={{ width: "18rem", textAlign: "center" }}>
          <Card.Img
            style={{ marginTop: "12px", height: "170 px" }}
            src="/img/coffee-java.jpg"
          />
          <Card.Body className="d-flex row">
            <Card.Title style={{height: "15px"}}>Java</Card.Title>
            <Card.Text>
              Presentado al mundo en el siglo XVII en Indonesia, que en ese
              momento era una colonia de Holanda. Indonesia tiene un clima y una
              tierra particulares que originan una semilla con sabor muy fuerte,
              picante y con un dejo dulce.
            </Card.Text>
            <Button variant="dark" style={{alignSelf: "flex-end"}}>Comprar</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", textAlign: "center" }}>
          <Card.Img
            style={{ marginTop: "12px", height: "170 px" }}
            src="/img/coffee-kenya.jpg"
          />
          <Card.Body className="d-flex row">
            <Card.Title style={{height: "15px"}}>Kenya</Card.Title>
            <Card.Text>
              Como su nombre lo indica, esta variedad de grano de café es
              originaria de Kenia, en el continente africano. Suele ser
              cultivada en tierras volcánicas, con abundancia de nutrientes, y
              de allí obtienen un sabor intenso.
            </Card.Text>
            <Button variant="dark" style={{alignSelf: "flex-end"}}>Comprar</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", textAlign: "center" }}>
          <Card.Img style={{ marginTop: "12px", height: "170 px" }} src="/img/coffee-tarrazú.jpg" />
          <Card.Body className="d-flex row">
            <Card.Title style={{height: "15px"}}>Tarrazú</Card.Title>
            <Card.Text>
              La región volcánica y de montañas de Costa Rica bautiza a este
              grano de café que se cultiva allí. De acuerdo con varios expertos
              en café, esta variedad es considerada una de las más valiosas en
              cuanto a su textura, olor, sabor y color. El grano Tarrazú tiene
              un sabor semejante al chocolate y un poco ácido.
            </Card.Text>
            <Button variant="dark" style={{alignSelf: "flex-end"}}>Comprar</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
