import React, { useEffect, useState } from "react";
import Category from "./Category";
import Price from "./Price";

export default function SidebarMobile({handleCategoryChange, handlePriceChange}) {

  return (
     <div className="mt-5">
    
          <Category handleCategoryChange={handleCategoryChange} />
    
          <Price handlePriceChange={handlePriceChange} />
    
        </div>
    
  );
}
