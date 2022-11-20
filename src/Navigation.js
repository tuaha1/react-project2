import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = { color: "black", textDecoration: "none" };
  const fontStyle = { fontWeight: "normal" };

  return (
    <nav>
      <Link to="/" style={navStyle}>
        <h3 style={fontStyle}>Home</h3>
      </Link>
      <ul className="nav-links">
        <Link to="/about" style={navStyle}>
          <h3 style={fontStyle}> About </h3>
        </Link>
        <Link to="/shop" style={navStyle}>
          <h3 style={fontStyle}> Shop </h3>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
