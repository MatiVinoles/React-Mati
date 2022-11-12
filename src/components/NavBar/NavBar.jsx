import React from "react";
import "./navBar.css";

import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <>
      <header>
        <Link to="/" className="title">
          QuieroCelu
        </Link>

        <nav>
          <Link to="/" className="nav-tag">
            Inicio
          </Link>
          <Link to="/category/Iphone" className="nav-tag">
            Iphone
          </Link>
          <Link to="/category/Samsung" className="nav-tag">
            Samsung
          </Link>
          <Link to="/category/Xiaomi" className="nav-tag">
            Xiaomi
          </Link>
        </nav>
        <CartWidget/>
      </header>
    </>
  );
}
