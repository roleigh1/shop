import React , {useEffect } from "react";
import Input from "./components/Input";
import "./category.css";
import useCategoryFilter from "./useCategoryFilter";
export default function Category({handleCategoryChange}) {


  return (
    <div>
      <h2 className="sidebar-title  text-sm sm:text-lg">Category</h2>
      <div>
        <Input
          handleChange={handleCategoryChange}
          value="All"
          title="All"
          name="category"
        />
        <Input
               handleChange={handleCategoryChange}
          value="Fruits"
          title="Fruits"
          name="category"
        />
        <Input
               handleChange={handleCategoryChange}
          value="Vegetables"
          title="Vegetables"
          name="category"
        />
        <Input
              handleChange={handleCategoryChange}
          value="Herbs"
          title="Herbs"
          name="category"
        />
        <Input
             handleChange={handleCategoryChange}
          value="Mushrooms"
          title="Mushrooms"
          name="category"
        />
      </div>
    </div>
  );
}
