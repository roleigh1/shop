import React, { useEffect, useState } from "react";
import Category from "./Category";
import Price from "./Price";

export default function Sidebar({handleCategoryChange, handlePriceChange}) {

  return (
    <div className="mt-5 sm:flex sm:flex-col hidden text-left">

      <Category handleCategoryChange={handleCategoryChange}/>

      <Price handlePriceChange={handlePriceChange} />

    </div>

  );
}
