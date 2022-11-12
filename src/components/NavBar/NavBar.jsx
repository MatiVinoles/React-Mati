import React from "react";
import "./navBar.css";
import { FaBars } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function NavBar() {

  return (
    <>
      <header>
        <Link to="/" className="title">
          Coffee House
        </Link>

        <nav>
          <Link to="/" className="nav-tag">
            Inicio
          </Link>
          <Link to="/Nosotros" className="nav-tag">
            Nosotros
          </Link>
          <Link to="/Tienda" className="nav-tag">
            Tienda
          </Link>
          <Link to="/Contacto" className="nav-tag">
            Contacto
          </Link>

          <button className="nav-btn-cart">
            <BsFillCartFill />
          </button>
        </nav>

        <button className="nav-btn">
          <FaBars />
        </button>
      </header>
    </>
  );
}
