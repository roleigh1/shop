import React, { useEffect, useState } from "react";
import Category from "./Category";
import Price from "./Price";

export default function Sidebar() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <div className="mt-5 sm:block hidden">

      <Category handleChange={handleChange} />

      <Price handleChange={handleChange} />
      <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Apply</button>
    </div>

  );
}
