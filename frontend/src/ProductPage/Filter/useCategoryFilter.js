import React, { useState } from "react";

export default function useCategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState("Fruits");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [products, setProducts] = useState({ items: [] }); // Default als Objekt mit "items"

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const filterProducts = (products, selectedCategory, selectedPrice) => {
    const productList = Array.isArray(products.items) ? products.items : [];
    return productList.filter((product) => {
      const categoryMatch =
        selectedCategory === "all" || product.type === selectedCategory;
      const priceMatch =
        selectedPrice === "all" ||
        (selectedPrice <= 1 && product.price <= 1) ||
        (product.price >= selectedPrice - 3 && product.price < selectedPrice);

      return categoryMatch && priceMatch;
    });
  };

  return {
    selectedCategory,
    handleCategoryChange,
    selectedPrice,
    handlePriceChange,
    products,
    setProducts,
    filterProducts,
  };
}
