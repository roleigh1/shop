import "react-slideshow-image/dist/styles.css";
import React from "react";
import "./style.css";
import useSWR from "swr";
import { apiConfig } from "../../../config";
import { Link } from "react-router-dom";
const fetcher = (url) => fetch(url).then((res) => res.json());

function BannerHome() {
  const { BASE_URL, endpoints } = apiConfig;
  const { data, error } = useSWR(`${BASE_URL}${endpoints.bannerHome}`, fetcher);


  if (error) return <div>Error loading images</div>;


  if (!data) return <div>Loading...</div>;
  



  const banners = data.result || [];

  if (banners.length === 0) {
    return <div>No banners available</div>;
  }
  const banner = banners[0];
  console.log(banner)
  return (
    <section className="bg-white lg:grid lg:place-content-center ">
      <div
        className="mx-auto w-screen max-w-screen-xl px-4 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4  "
      >
        <div className="max-w-prose pb-20  ">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl pl-10 ">
            {banner.headline}

         
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed pl-10 max-w[15rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus, provident
            accusamus impedit minima harum corporis iusto.
          </p>

          <div className="mt-4 flex justify-center  gap-4 sm:mt-6">
        <Link to="/products">
            <a
              className="  rounded border px-4 border-gray-200 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
              href="#"
            >
            Shop now
            </a>
            </Link>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 768"
          className=" hidden  text-gray-900 md:block  relative -top-3 "
        >
       <image href={banner.img} width="100%" height="100%" preserveAspectRatio="xMidYMid meet" />
        </svg>
      </div>
    </section>
  );
}

export default BannerHome;