import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import "./NavBar.css";
import CartWidget from "./CartWidget";


export default function NavBar() {
  return (
    <>
    <Navbar bg="light" variant="light">
        <Container fluid>
          <Nav className="me-auto nav">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#tienda">Tienda</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Container>

        <CartWidget amount="1"/>
    </Navbar>
    </>
  );
}




