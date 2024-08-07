import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./style.css";

export default function Banner({ banners }) {
  const [topPosition, setTopPosition] = useState(null);

  useEffect(() => {
    if (banners && banners[1]) {
      const handleResize = () => {
        if (window.matchMedia("(max-width: 786px)").matches) {
          setTopPosition(banners[1].topPhone);
        } else {
          setTopPosition(banners[1].top);
        }
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [banners]);


  return (
    <div className="container my-5 relative max-w-xl mx-auto mt-20">
      <div className="relative">
        <img
          className="h-60 w-full object-cover rounded-md"
          src={banners[1]?.img}
          alt="Banner"
        />
        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
        <div className="absolute inset-0 text-center flex items-center justify-center flex-col">
          <h2 className="text-white text-1xl ">{banners[1]?.headline}</h2>
          <p className="text-white text-xl ">{banners[1]?.text}</p>
        </div>
      </div>
    </div>
  );
}

Banner.propTypes = {
  banners: PropTypes.array.isRequired,
};
