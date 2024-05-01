import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <div>
      <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ width: "8rem", marginTop: "1rem" }}
        />
      </Link>
    </div>
  );
}
export default Logo;
