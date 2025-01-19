import "react-slideshow-image/dist/styles.css";
import React from "react";
import "./style.css";
import useSWR from "swr"; 
import { apiConfig } from "../../../config";

const fetcher = (url) => fetch(url).then((res) => res.json()); 

function BannerHome() {  
  const {BASE_URL,endpoints} = apiConfig; 
  const { data, error } = useSWR(`${BASE_URL}${endpoints.bannerHome}`, fetcher);


  if (error) return <div>Error loading images</div>;


  if (!data) return <div>Loading...</div>;


  

  const banners = data.result || [];

  if (banners.length === 0) {
    return <div>No banners available</div>;
  }
  const banner = banners[0]; 
  return (
    <div className="container my-5 relative max-w-xl mx-auto mt-20">
      <div className="relative">
        <img
          className="h-60 w-full object-cover rounded-md"
          src={banner.img}
          alt="Banner"
        />
        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
        <div className="absolute inset-0 text-center flex items-center justify-center flex-col">
          <h2 className="text-white text-1xl ">{banner.headline}</h2>
          <p className="text-white text-xl ">{banner.text}</p>
        </div>
      </div>
    </div>
  );
}

export default BannerHome;