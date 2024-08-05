import React from "react";
import PropTypes from "prop-types";

function Hamburger({ isOpen }) {
  return (
    <div className="flex flex-col justify-around w-8 h-8  z-10">
      <div
        className={`w-8 h-1 rounded transform transition-all duration-300 ${
          isOpen ? "rotate-45 bg-gray-500" : "rotate-0 bg-black"
        }`}
        style={{ transformOrigin: "1px" }}
      />
      <div
        className={`w-8 h-1 rounded transform transition-all duration-300 ${
          isOpen ? "opacity-0 bg-gray-500" : "opacity-100 bg-black"
        }`}
        style={{ transformOrigin: "1px" }}
      />
      <div
        className={`w-8 h-1 rounded transform transition-all duration-300 ${
          isOpen ? "-rotate-45 bg-gray-500" : "rotate-0 bg-black"
        }`}
        style={{ transformOrigin: "1px" }}
      />
    </div>
  );
}

Hamburger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Hamburger;
