import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import NewProductsItem from "./ProductItem";
import { motion } from "framer-motion";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import MobileDrawer from "./Filter/MobileDrawer";
import Sidebar from "./Filter/Sidebar";
import { apiConfig } from "../config";
import "./style.css"
const sortOptions = [
  { name: "Price: Low to High", value: "lowToHigh" },
  { name: "Price: High to Low", value: "highToLow" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductList = () => {
  const [hasMore, setHasMore] = useState(true);
  const [selectedSort, setSelectedSort] = useState(null);
  const [isDrawerShowing, setDrawerShowing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [products, setProducts] = useState({ items: [] });


  const { BASE_URL, endpoints } = apiConfig;

  const ITEMS_PER_PAGE = 5;

  const handleTogglerDrawer = () => {
    setDrawerShowing((prev) => !prev);
  };

  useEffect(() => {
 
    const fetchProducts = () => {

      axios
        .get(
          `${BASE_URL}${endpoints.products}?offset=0&limit=${ITEMS_PER_PAGE}&category=${selectedCategory}&price=${selectedPrice}`
        )
        .then((res) => {
          console.log("Fetched products:", res.data.result); 
          const initialProducts = res.data.result || [];
          setProducts({
            items: sortProduct(initialProducts, selectedSort),
          });

          setHasMore(initialProducts.length >= ITEMS_PER_PAGE);
        })
        .catch((err) => console.error("Failed to fetch products:", err));
    };

    fetchProducts();
  }, [selectedCategory, selectedPrice, selectedSort]);
  useEffect(() => {
    if(isDrawerShowing){
       document.body.classList.add("no-scroll"); 
    } else {
      document.body.classList.remove("no-scroll"); 
    }; 
  },[isDrawerShowing]) 

  const fetchMoreData = () => {
    const offset = products.items.length;
    axios
      .get(
        `${BASE_URL}${endpoints.products}?offset=${offset}&limit=${ITEMS_PER_PAGE}&category=${selectedCategory}&price=${selectedPrice}`
      )
      .then((res) => {
        const newProducts = res.data.result|| [];
        setProducts((prev) => ({
          ...prev,
          items: sortProduct([...prev.items,...newProducts],selectedSort),
        }))
        if (newProducts.length < ITEMS_PER_PAGE) setHasMore(false);
      })
      .catch((err) => console.error("Failed to fetch products 2nd Time:", err));
  };
  
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };
  
  const handleSortChange = (value) => {
    setSelectedSort(value);
    setProducts((prev) => {
      return {
        items: sortProduct([...prev.items], value),
      };
    });
  };
  const sortProduct = (products, sortType) => {
    const sortedProducts = [...products];
    if (sortType === "lowToHigh") {
      return sortedProducts.sort((a, b) => a.price - b.price);
    }
    if (sortType === "highToLow") {
      return sortedProducts.sort((a, b) => b.price - a.price);
    }
    return sortedProducts;
  };
  const slideInVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setDrawerShowing(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (<InfiniteScroll
    dataLength={products?.items?.length || 0}
    next={fetchMoreData}
    hasMore={hasMore}
    loader={<p className="text-center">Loading...</p>}
    className="infinite-scroll  "
  >
    <MDBContainer fluid className="text-center ">
    
 
        <MDBRow className="ml-3 mb-3">
          <MDBCol className="d-flex  flex-row justify-end pl-11 ">
            <Menu as="div" className="relative inline-block text-left ml-2 ">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="  size-5 text-gray-400 group-hover:text-gray-500"
                  />
                </Menu.Button>
              </div>

              <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none z-10">
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <Menu.Item key={option.value}>
                      {({ active }) => (
                        <button
                          onClick={() => handleSortChange(option.value)}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          {option.name}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Menu>
            <button className="sm:hidden block " onClick={handleTogglerDrawer}>
              <svg
                className="size-4 "
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 0 1 .628.74v2.288a2.25 2.25 0 0 1-.659 1.59l-4.682 4.683a2.25 2.25 0 0 0-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 0 1 8 18.25v-5.757a2.25 2.25 0 0 0-.659-1.591L2.659 6.22A2.25 2.25 0 0 1 2 4.629V2.34a.75.75 0 0 1 .628-.74Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            {isDrawerShowing && (
              <MobileDrawer
                className=""
                show={isDrawerShowing}
                handleCategoryChange={handleCategoryChange}
                handlePriceChange={handlePriceChange}
                handleTogglerDrawer={handleTogglerDrawer}
              />
            )}
          </MDBCol>
        </MDBRow>

        <div className="flex flex-row sm:flex-row gap-4 ">
          <div className="hidden sm:block  ">
            <Sidebar
              handleCategoryChange={handleCategoryChange}
              handlePriceChange={handlePriceChange}
              selectedCategory={selectedCategory}
            />
          </div>
          <div className=" w-full flex flex-wrap gap-3 justify-center">
            {products.items.length > 0 ? (
              products.items.map((product, index) => (
                <motion.div
                key={`${product.id}-${index}`}
                  variants={slideInVariant}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                 
                  className=" text-center "
                >
                
                    <NewProductsItem className="card " product={product} />
     
                </motion.div>
              ))
            ) : (
              <p className="text-center absolute right-0 left-0 mt-10 ">No products available</p>
            )}
          </div>
        </div>
    

    </MDBContainer>
    </InfiniteScroll>
  );
};

export default ProductList;
