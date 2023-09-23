import "react-slideshow-image/dist/styles.css";
import React from 'react';


function SlideShow() {
  const img = [
    "https://i.ibb.co/jkbLHYP/image-11.jpg",
    "https://i.ibb.co/3kBRw89/image-24.jpg",
    "https://i.ibb.co/dJ7B28f/image-36.jpg"
  ];

  return (
    <section className="bg-image_1" style={{
      position: "relative", height: "25rem", display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', textAlign:"center"
    }}>

      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: -30,
        backgroundImage: `url(${img[0]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
       
        zIndex: -1,
        borderRadius: "5px"
      }}></div>

      <div className="content" style={{ color: "white", }}>
        <h1 style={{ opacity: "1" }}>Fresh from the Fields of Simmering!</h1>
        <h3 style={{ fontSize: "24px", }}>Dive into the rich flavors of homegrown vegetables and fruits by our dedicated gardeners from Simmering.<br /> Meet us at Karmelitermarkt, Südtiroler Platz, and Vorgarten Markt. <br />Taste nature's best, straight from our garden to your plate</h3>
      </div>

    </section>

  );
}

export default SlideShow;
