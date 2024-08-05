import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link to="/" className="no-underline text-white">
        <img
          src={logo}
         className=" mt-4"
         style={{width:"8rem"}}
          alt="logo"
          
        />
      </Link>
    </div>
  );
}

export default Logo;
