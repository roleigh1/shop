import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Banner() {
  const api_base_url = process.env.REACT_APP_API_BASEURL;
  const { data, error } = useSWR(`${api_base_url}/content/bannersProducts`, fetcher);

  if (error) return <div>Error loading images</div>;
  if (!data) return <div>Loading...</div>;

  const banners = data.result || [];

  return (
    <div className="container my-5 relative max-w-xl mx-auto mt-20">
      {banners.length > 0 && banners.map((banner) => (
        <div className="relative" key={banner.id}>
          <img
            className="h-60 w-full object-cover rounded-md"
            src={banner.img}
            alt={banner.headline}
          />
          <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
          <div className="absolute inset-0 text-center flex items-center justify-center flex-col">
            <h2 className="text-white text-1xl">{banner.headline}</h2>
            <p className="text-white text-xl">{banner.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

Banner.propTypes = {
  banners: PropTypes.array,  // You can leave this for flexibility in case you use props later
};