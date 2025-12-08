import React from "react";
import Category from "./Category";
import Price from "./Price";

export default function Sidebar({handleCategoryChange, handlePriceChange}) {

  return (
    <div className="mt-5 hidden text-left sm:flex sm:flex-col">

      <Category handleCategoryChange={handleCategoryChange}  />

      <Price handlePriceChange={handlePriceChange} />

    </div>

  );
}
