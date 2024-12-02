import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import "./style.css";
import { useCart } from "../CartContext";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

export default function DetailsItem({ items, products }) {
  const { id, whichProduct } = useParams();
  const [detailsItem, setDetailsItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const api_base_url = process.env.REACT_APP_API_BASEURL;
  useEffect(() => {
    const fetchDetailsData = async () => {
      if (whichProduct === "bestsellerDetails") {
        try {
          const response = await fetch(
            `${api_base_url}/content/${whichProduct}/${id}`
          );
          const data = await response.json();
          setDetailsItem(data);
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const response = await fetch(
            `${api_base_url}/content/${whichProduct}/${id}`
          );
          const data = await response.json();
          setDetailsItem(data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchDetailsData()
  }, [id, products, whichProduct, items, api_base_url]);

  if (!detailsItem) {
    return <p>Loading...</p>;
  }
  const handleAddToCart = () => {
    const cartItem = {
      name: detailsItem.name,
      price: detailsItem.price,
      quantity: quantity,
      unit: detailsItem.unit,
      image: detailsItem.firstImage,
    };
    if (Number(quantity) > 0) {
      addToCart(cartItem);
    } else {
      console.log("test");
    }
  };
  const images = [
    {
      original: detailsItem.firstImage,
      thumbnail: detailsItem.firstImage,
    },
    {
      original: detailsItem.secondImage,
      thumbnail: detailsItem.secondImage,
    },
    {
      original: detailsItem.thirdImage,
      thumbnail: detailsItem.thirdImage,
    },
    {
      original: detailsItem.fourthImage,
      thumbnail: detailsItem.fourthImage,
    },
  ];

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="flex flex-row justify-center">
      <div className="flex mr-5">
        <ImageGallery
          className="image-gallery"
          items={images}
          showPlayButton={true}
          showFullscreenButton={true}
          slideInterval={1000}
          slideOnThumbnailOver={true}
          showIndex={true}
          onPlay={() => {
            alert("slideshow is now playing!");
          }}
        />
      </div>

      <div className="flex flex-col mr-5 w-[30rem]">
        <h2>{detailsItem.name}</h2>
        <hr className="h-px my-8 w-72 bg-gray-500 border-0 dark:bg-gray-700"></hr>
        {parseFloat(detailsItem.price).toFixed(2)} / {detailsItem.unit}
        <p>{detailsItem.description}</p>
        <label
          htmlFor="quantity-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Choose quantity:
        </label>
        <div className="relative flex items-center max-w-[8rem]">
          <button
            type="button"
            id="decrement-button"
            onClick={handleDecrement}
            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
          >
            <svg
              className="w-3 h-3 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h16"
              />
            </svg>
          </button>

          <input
            type="text"
            id="quantity-input"
            value={quantity}
            readOnly
            className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />

          <button
            type="button"
            id="increment-button"
            onClick={handleIncrement}
            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
          >
            <svg
              className="w-3 h-3 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
        <button
          type="button"
          onClick={handleAddToCart}
          className="py-2.5 mt-3 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

DetailsItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      firstImage: PropTypes.string.isRequired,
      secondImage: PropTypes.string,
      thirdImage: PropTypes.string,
      fourthImage: PropTypes.string,
    })
  ).isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      firstImage: PropTypes.string.isRequired,
      secondImage: PropTypes.string,
      thirdImage: PropTypes.string,
      fourthImage: PropTypes.string,
    })
  ).isRequired,
};
