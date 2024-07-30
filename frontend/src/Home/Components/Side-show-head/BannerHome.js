import "react-slideshow-image/dist/styles.css";
import React from "react";
import PropTypes from "prop-types";

function BannerHome({banners}) {
  if (!banners || banners.length === 0) {
    return null; 
  }
  return (
    <section
      className="bg-image_1"
      style={{
        position: "relative",
        height: "25rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: banners[0].top,
          left: 0,
          right: 0,
          bottom: -30,
          backgroundImage: `url(${banners[0].img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",

          zIndex: -1,
          borderRadius: "10px",
        }}
      ></div>

      <div className="content" style={{ color: "black", marginTop: "5rem" }}>
        <h1 style={{ opacity: "0.7" }}>{banners[0].headline}</h1>
        <h3 style={{ fontSize: "24px", opacity: "0.7" }}>
          {banners[0].text}
        </h3>
      </div>
    </section>
  );
}

BannerHome.propTypes = {
  banners: PropTypes.arrayOf(
    PropTypes.shape({
      top: PropTypes.number,
      img: PropTypes.string.isRequired,
      headline: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

export default BannerHome;
