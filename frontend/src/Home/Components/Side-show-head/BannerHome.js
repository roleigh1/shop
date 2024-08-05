import "react-slideshow-image/dist/styles.css";
import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function BannerHome({ banners }) {
  if (!banners || banners.length === 0) {
    return null;
  }
  console.log(banners);
  return (
    <div className="container my-5 relative max-w-xl mx-auto mt-20">
    <div className="relative">
      <img
        className="h-60 w-full object-cover rounded-md"
        src={banners[0]?.img}
        alt="Banner"
      />
      <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
      <div className="absolute inset-0 text-center flex items-center justify-center flex-col">
        <h2 className="text-white text-1xl ">{banners[0]?.headline}</h2>
        <p className="text-white text-xl ">{banners[0]?.text}</p>
      </div>
    </div>
  </div>
);
}


BannerHome.propTypes = {
  banners: PropTypes.arrayOf(
    PropTypes.shape({
      top: PropTypes.number,
      img: PropTypes.string.isRequired,
      headline: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BannerHome;
