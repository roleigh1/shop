import "react-slideshow-image/dist/styles.css";
import React from 'react';


function SlideShow() {
  const img = [
    "https://i.ibb.co/jkbLHYP/image-11.jpg",
    "https://i.ibb.co/3kBRw89/image-24.jpg",
    "https://i.ibb.co/dJ7B28f/image-36.jpg"
  ];

  return (
    <div>
      <div className="each-slide-effect mt-5">
        <div className="background-image" style={{ 'backgroundImage': `url(${img[0]})`,position:"relative" }}>
       
        </div>
      </div>
      <h1 style={{color:"black", position:"absolute",top:"8rem"}}>Gärtnerei Leitner</h1>
      <style >{`
          .each-slide-effect > .background-image {
            display: flex;
            align-items: center;
            justify-content: center;
            background-size: cover;
            height: 350px;
            position: relative;
            border-radius: 5px;
          }
    
          .each-slide-effect .background-image::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-image: inherit;
   
            z-index: -1;
            border-radius: 5px;
          }
          
         
          .each-slide-effect span {
            padding: 20px;
            font-size: 20px;
            background: #efefef;
            text-align: center;
          }    
      `}</style>
    </div>
  );
}

export default SlideShow;
