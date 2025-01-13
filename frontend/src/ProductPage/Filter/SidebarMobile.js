import React, { useEffect, useState } from "react";
import Category from "./Category";
import Price from "./Price";

export default function SidebarMobile() {

  return (
    <div className="mt-5 ">

      <Category  />

      <Price />
      <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Apply</button>
    </div>

  );
}
