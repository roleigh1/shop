import "react-slideshow-image/dist/styles.css";
import React from "react";

function SlideShow() {
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
          top: 0,
          left: 0,
          right: 0,
          bottom: -30,
          backgroundImage: `url('http://localhost:3131/uploads/banner_Home.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",

          zIndex: -1,
          borderRadius: "10px",
        }}
      ></div>

      <div className="content" style={{ color: "black", marginTop: "5rem" }}>
        <h1 style={{ opacity: "0.7" }}>Fresh from the Fields of Simmering!</h1>
        <h3 style={{ fontSize: "24px", opacity: "0.7" }}>
          Dive into the rich flavors of homegrown vegetables and fruits by our
          dedicated gardeners from Simmering.
          <br /> Meet us at Karmelitermarkt, Südtiroler Platz, and Vorgarten
          Markt. <br />
          Taste nature&#39;s best, straight from our garden to your plate
        </h3>
      </div>
    </section>
  );
}

export default SlideShow;
