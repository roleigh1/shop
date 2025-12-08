import React from "react";
import Input from "./components/Input";
import "./price.css";
import "./category.css";

export default function Price({handlePriceChange}) {



  return (
    <div>
      <h2 className="sidebar-title -mb-3 text-sm sm:text-lg">Price</h2>
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
