import React, { useState } from "react";
import PropTypes from "prop-types";
import testImage from "./testImage.png";
import { Link } from "react-router-dom";
import "./style.css";

export default function NewBestsellerItem({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg h-[23rem]">
      <div
        className="image-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="w-[13rem] h-[12rem] mt-1 m-auto object-contain"
          style={{
            backgroundImage: `url(${isHovered ? testImage : item.image})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          alt="Sunset in the mountains"
        ></div>
        <Link to={`/details/${item.id}/bestsellers`}>
          <svg
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className="icon "
            fill="#747474"
          >
            <path d="M13.5 18c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-3.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm14-16.5l-.743 2h-1.929l-3.473 12h-13.239l-4.616-11h2.169l3.776 9h10.428l3.432-12h4.195zm-12 4h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z" />
          </svg>
        </Link>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.name}</div>
        <p className="text-gray-700 text-base">{item.type}</p>
      </div>
      <div className="relative bottom-5">
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-3">
          {item.price}
        </span>
      </div>
    </div>
  );
}

NewBestsellerItem.propTypes = {
  item: PropTypes.shape({
    id:PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};
