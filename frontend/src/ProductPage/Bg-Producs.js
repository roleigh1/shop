import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import useSWR from "swr";
import { apiConfig } from "../config";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Banner() {
  const {BASE_URL,endpoints} = apiConfig; 

  const { data, error } = useSWR(`${BASE_URL}${endpoints.bannerProducts}`, fetcher);

  if (error) return <div>Error loading images</div>;
  if (!data) return <div>Loading...</div>;

  const banners = data.result || [];

  return (
    <div className="container relative mx-auto my-5 mt-20 max-w-xl">
      {banners.length > 0 && banners.map((banner) => (
        <div className="relative" key={banner.id}>
          <img
            className="h-60  w-full rounded-md object-cover"
            src={banner.img}
            alt={banner.headline}
          />
          <div className="absolute inset-0 rounded-md bg-gray-700 opacity-60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h2 className="text-1xl text-white">{banner.headline}</h2>
            <p className="text-1xl text-white">{banner.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

Banner.propTypes = {
  banners: PropTypes.array, 
};