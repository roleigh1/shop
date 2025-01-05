import React from "react";
import Input from "./components/input";
import "./category.css"
export default function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
      <Input
          handleChange={handleChange}
          value="All"
          title="All"
          name="category"
        />
        <Input
          handleChange={handleChange}
          value="Fruits"
          title="Fruits"
          name="category"
        />
        <Input
          handleChange={handleChange}
          value="Vegetables"
          title="Vegetables"
          name="category"
        />
        <Input
          handleChange={handleChange}
          value="Herbs"
          title="Herbs"
          name="category"
        />
        <Input
          handleChange={handleChange}
          value="Mushrooms"
          title="Mushrooms"
          name="category"
        />
      </div>
    </div>
  );
}
