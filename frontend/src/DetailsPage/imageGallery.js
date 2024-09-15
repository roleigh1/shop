import React from "react";
import PropTypes from "prop-types";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Images({ detailsItem }) {
  console.log(detailsItem);
  if (!detailsItem) {
    return <p>Loading...</p>; // Oder eine andere Platzhalter-Komponente anzeigen
  }
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

  return (
    <div className="text-center">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ImageGallery
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
  );
}
Images.propTypes = {
  detailsItem: PropTypes.shape({
    firstImage: PropTypes.string,
    secondImage: PropTypes.string,
    thirdImage: PropTypes.string,
    fourthImage: PropTypes.string,
  }),
};
