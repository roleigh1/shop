import React, {useState, useEffect} from "react";
export default function useCategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [products, setProducts] = useState({ items: [] });

  useEffect(() => {
    console.log("Category or price changed:", selectedCategory, selectedPrice);
  }, [selectedCategory, selectedPrice]);  // Dies zeigt an, ob die Filter korrekt geändert werden.

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  return {
    selectedCategory,
    handleCategoryChange,
    selectedPrice,
    handlePriceChange,
    products,
    setProducts,
  };
}