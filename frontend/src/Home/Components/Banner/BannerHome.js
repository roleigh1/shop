import "react-slideshow-image/dist/styles.css";
import React from "react";
import "./style.css";
import useSWR from "swr";

import { Link } from "react-router-dom";
const fetcher = (url) => fetch(url).then((res) => res.json());

function BannerHome() {
  const BASEURL = process.env.REACT_APP_API_BASEURL;
  const { data, error } = useSWR(`${BASEURL}content/bannerhomeSite`, fetcher);


  if (error) return <div>Error loading images</div>;


  if (!data) return <div>Loading...</div>;




  const banners = data.result || [];

  if (banners.length === 0) {
    return <div>No banners available</div>;
  }
  const banner = banners[0];

  return (
    <section className="bg-white  lg:grid lg:place-content-center">
      <div
        className="mx-auto max-w-screen-xl  sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4  "
      >
        <div className=" pb-20  ">
          <h1 className="text-center text-4xl font-bold text-gray-900 sm:text-5xl ">
            {banner.headline}


          </h1>

          <p className="max-w[15rem] mt-4 text-pretty text-center text-base text-gray-700 sm:text-lg/relaxed md:pl-10">
            {banner.text}
          </p>

          <div className="mt-4 flex flex-row items-center justify-center sm:mt-6">
            <Link
              to="/products"
              className="rounded border border-gray-200 px-4  py-2 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
            >
              Shop now
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 768"
              className="  w-50 block h-auto   text-gray-900  md:hidden"
            >
              <image href={banner.img} width="100%" height="100%" preserveAspectRatio="xMidYMid meet" />
            </svg>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 768"
          className="  relative   hidden text-gray-900 sm:bottom-14 md:block"
        >
          <image href={banner.img} width="100%" height="100%" preserveAspectRatio="xMidYMid meet" />
        </svg>
      </div>
    </section>
  );
}

export default BannerHome;