import React from "react";

import PropTypes from "prop-types";
export default function Banner({ banners }) {
  if (!banners || banners.length === 0) {
    return null; 
  }
  return (
    <div className="container my-5">
      <div
        className="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white opacity-"
        style={{
          backgroundImage: `url(${banners[1].img})`,
          objectFit: "cover",
          top: banners[1].top,
        }}
      >
        <h1
          style={{
            fontWeight: "700",
            fontSize: "25px",
            color: "black",
            textDecoration: "underline",
            background: "",
            opacity: "1",
          }}
          className="mb-3 h2"
        >
          {banners[1].headline}
        </h1>
        <p
          style={{
            fontWeight: "500",
            fontSize: "18px",
            color: "black",
            opacity: "1",
          }}
        >
          {banners[1].text}
        </p>
      </div>
    </div>
  );
}
Banner.propTypes = {
  banners: PropTypes.array.isRequired,
};
