import "react-slideshow-image/dist/styles.css";
import React from 'react';
import { Slide } from 'react-slideshow-image';

function SlideShow() {
  const img = [
    "https://i.ibb.co/jkbLHYP/image-11.jpg",
    "https://i.ibb.co/3kBRw89/image-24.jpg",
    "https://i.ibb.co/dJ7B28f/image-36.jpg"
  ];

  return (
    <Slide autoplay="true" className="slideImages">

      <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${img[0]})` }}>
          <span>Slide 1</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ 'background': `url(${img[1]})` }}>
          <span>Slide 2</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ 'background': `url(${img[2]})` }}>
          <span>Slide 3</span>
        </div>
      </div>
      <style jsx>{` 
     
      .each-slide-effect > div {
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        height: 350px;
      }
      
      .each-slide-effect span {
        padding: 20px;
        font-size: 20px;
        background: #efefef;
        text-align: center;
      }
      
      `}</style>

    </Slide>

  );
}

export default SlideShow;
