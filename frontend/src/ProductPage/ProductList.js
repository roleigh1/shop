import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import NewProductsItem from "./ProductItem";
import { motion } from "framer-motion";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import MobileDrawer from "./Filter/MobileDrawer";
import useCategoryFilter from "./Filter/useCategoryFilter";

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
  const {
    products,
    setProducts,
    filterProducts,
    selectedCategory,
    selectedPrice,
  } = useCategoryFilter();

  const ITEMS_PER_PAGE = 6;

  const api_base_url = process.env.REACT_APP_API_BASEURL;

  const handleTogglerDrawer = () => {
    setDrawerShowing((prev) => !prev);
  };

  useEffect(() => {
    axios
      .get(`${api_base_url}/content/products?offset=0&limit=${ITEMS_PER_PAGE}`)
      .then((res) => {
        const initialProducts = res.data.result || [];
        setProducts((prev) => {
          const uniqueProducts = [
            ...prev.items,
            ...initialProducts.filter(
              (newProduct) => !prev.items.some((item) => item.id === newProduct.id)
            ),
          ];
          const filteredProducts = filterProducts(
            { items: uniqueProducts },
            selectedCategory,
            selectedPrice
          );
          return { items: sortProduct(filteredProducts, selectedSort) };
        });
  
    

        if (initialProducts.length < ITEMS_PER_PAGE) setHasMore(false);
      })
      .catch((err) => console.error("API error:", err));
  }, [api_base_url,selectedCategory,selectedCategory]);

  const fetchMoreData = () => {
    const offset = products.items.length;
    axios
      .get(
        `${api_base_url}/content/products?offset=${offset}&limit=${ITEMS_PER_PAGE}`
      )
      .then((res) => {
        const newProducts = res.data.result || [];
        setProducts((prev) => {
          const combinedProducts = [
            ...prev.items,
            ...newProducts.filter(
              (newProduct) => !prev.items.some((item) => item.id === newProduct.id)
            ),
          ];
          const filteredProducts = filterProducts(
            { items: combinedProducts },
            selectedCategory,
            selectedPrice
          );
          return { items: sortProduct(filteredProducts, selectedSort) };
        });
  
        if (newProducts.length < ITEMS_PER_PAGE) setHasMore(false);
      })
      .catch((err) => console.error("Failed to fetch products:", err));
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

  const handleSortChange = (value) => {
    setSelectedSort(value);
    setProducts((prev) => {
      return {
        items: sortProduct([...prev.items], value),
      };
    });
  };
  const slideInVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth >= 768){
        setDrawerShowing(false);
      }
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize",handleResize); 
    }
  },[])
  return (
    <InfiniteScroll
      dataLength={products.items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<p>Loading...</p>}
      className="infinite-scroll"
    >
      <MDBContainer fluid className="text-center">
        <MDBRow className="ml-3">
          <MDBCol   className="d-flex  flex-row justify-end pl-11 ">


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
           < button className="sm:hidden block " onClick={handleTogglerDrawer}>
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
                handleTogglerDrawer={handleTogglerDrawer}
      
       
              />
  
            )}
   
          
          </MDBCol>
        </MDBRow>

        <MDBRow className="mobile ">
          {products.items.length > 0 ? (
            products.items.map((product, index) => (
              <motion.div
                key={product.id}
                variants={slideInVariant}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ flex: "1 0 25%" }}
              >
                <MDBCol md="3" className="mt-5 pb-10 ">
                  <NewProductsItem className="card" product={product} />
                </MDBCol>
              </motion.div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </MDBRow>
      </MDBContainer>
    </InfiniteScroll>
  );
};

export default ProductList;
