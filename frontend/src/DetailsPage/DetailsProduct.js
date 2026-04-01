import  { useState} from "react";


import "./style.css";
import { useCart } from "../CartContext";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

export default function DetailsItem({detailsItem}) {


  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();


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
      category: detailsItem.type
    };
    if (Number(quantity) > 0) {
      addToCart(cartItem);
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
    <div className="flex flex-row flex-wrap justify-center gap-2 ">
      <div className="">
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

      <div className="mr-5 flex w-[30rem] flex-col">
        <h2>{detailsItem.name}</h2>
        <hr className="my-8 h-px w-72 border-0 bg-gray-500 dark:bg-gray-700"></hr>
        {parseFloat(detailsItem.price).toFixed(2)} / {detailsItem.unit}
        <p>{detailsItem.description}</p>
        <label
          htmlFor="quantity-input"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Choose quantity:
        </label>
        <div className="relative flex max-w-32 items-center">
          <button
            type="button"
            id="decrement-button"
            onClick={handleDecrement}
            className="h-11 rounded-s-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <svg
              className="size-3 text-gray-900 dark:text-white"
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
            className="block h-11 w-full border-x-0 border-gray-300 bg-gray-50 py-2.5 text-center text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required
          />

          <button
            type="button"
            id="increment-button"
            onClick={handleIncrement}
            className="h-11 rounded-e-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <svg
              className="size-3 text-gray-900 dark:text-white"
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
          className="mb-2 me-2 mt-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}


