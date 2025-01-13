import React from "react";
import Input from "./components/Input";
import "./price.css";
import "./category.css";
import useCategoryFilter from "./useCategoryFilter";
export default function Price() {

  const{ handlePriceChange}= useCategoryFilter();

  return (
    <div>
      <h2 className="sidebar-title text-sm sm:text-lg -mb-3">Price</h2>
      <div className=" price-title ">
        <Input
          handleChange={handlePriceChange}
          value="All"
          title="All"
          name="price"
        />
        <Input
       handleChange={handlePriceChange}
          value="1"
          title="€0 - 1"
          name="price"
        />
        <Input
          handleChange={handlePriceChange}
          value="3"
          title="€1 - €3"
          name="price"
        />
        <Input
        handleChange={handlePriceChange}
          value="6"
          title="€3 - €6"
          name="price"
        />
        <Input
       handleChange={handlePriceChange}
          value="9"
          title="€6 - €9"
          name="price"
        />
      </div>
    </div>
  );
}
