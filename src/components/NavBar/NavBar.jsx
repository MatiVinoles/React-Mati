import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import "./nav-bar.css";
import CartWidget from "./CartWidget";


export default function NavBar() {
  return (
    <>
    <Navbar bg="light" variant="light">
        <Container className="col-md-4">
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#tienda">Tienda</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Container>

        <CartWidget amount=""/>
    </Navbar>
    </>
  );
}




