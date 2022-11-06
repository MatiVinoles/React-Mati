import React from "react";
import "./navBar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const hideNavBar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <>
      <header>
        <Link to="/" className="title">
          Coffee House
        </Link>

        <nav to={navRef}>
          <Link to="/" className="nav-tag">Inicio</Link>
          <Link to="/Nosotros" className="nav-tag">Nosotros</Link>
          <Link to="/Tienda" className="nav-tag">Tienda</Link>
          <Link to="/Contacto" className="nav-tag">Contacto</Link>

          <button className="nav-btn-cart">
            <BsFillCartFill />
          </button>

          <button className="nav-btn nav-close-btn" onClick={hideNavBar}>
            <FaTimes />
          </button>
        </nav>

        <button className="nav-btn" onClick={showNavBar}>
          <FaBars />
        </button>
      </header>
    </>
  );
}
