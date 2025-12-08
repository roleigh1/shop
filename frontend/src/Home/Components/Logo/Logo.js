import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link to="/" className="text-white no-underline">
        <img
          src={logo}
         className="w-32"
          alt="logo"
        />
      </Link>
    </div>
  );
}

export default Logo;
