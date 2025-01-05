import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import NewProductsItem from "./ProductItem";
import { motion } from "framer-motion";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const sortOptions = [
  { name: "Price: Low to High", value: "lowToHigh" },
  { name: "Price: High to Low", value: "highToLow" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [selectedSort, setSelectedSort] = useState(null);
  let ITEMS_PER_PAGE = 3;

  const api_base_url = process.env.REACT_APP_API_BASEURL;

  useEffect(() => {
      axios
      .get(`${api_base_url}/content/products?offset=0&limit=${ITEMS_PER_PAGE}`)
      .then((res) => {
        const initialProduct = res.data.result || [];
        setProducts(sortProduct(initialProduct, selectedSort));
        if (initialProduct.length < ITEMS_PER_PAGE) setHasMore(false);
      })
      .catch((err) => {
        console.error("API error:", err);
      });
  }, [api_base_url]);

  const fetchMoreData = () => {
    const offset = products.length;
    axios
      .get(
        `${api_base_url}/content/products?offset=${offset}&limit=${ITEMS_PER_PAGE}`
      )
      .then((res) => {
        const newProducts = res.data.result || [];
        setProducts((prevProducts) => {
          const combinedProducts = [...prevProducts, ...newProducts]; // Richtige Kombination
          return sortProduct(combinedProducts, selectedSort); // Sortierte Rückgabe
        });
        if (newProducts.length < ITEMS_PER_PAGE) setHasMore(false);
      })
      .catch((err) => console.error("Failed to fetch products:", err));
  };

  const sortProduct = (products, sortType) => {
    if (sortType === "lowToHigh") {
      return products.sort((a, b) => a.price - b.price);
    }
    if (sortType === "highToLow") {
      return products.sort((a, b) => b.price - a.price);
    }
    return products;
  };

  const handleSortChange = (value) => {
    setSelectedSort(value);
    console.log("Selected Sort Option:", value);
    setProducts((prevProducts) => sortProduct([...prevProducts], value));
  };
  const slideInVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <InfiniteScroll
      dataLength={products.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<p>Loading...</p>}
      className="infinite-scroll"
    >
      <MDBContainer fluid className="text-center">
        <MDBRow>
          <MDBCol className="d-flex justify-content-end flex-row gap-1">
            <Menu as="div" className="relative inline-block text-left mr-2">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
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
            <svg
              className="size-4 mr-10"
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
          </MDBCol>
        </MDBRow>

        <MDBRow className="mobile ">
          {products.length > 0 ? (
            products.map((product, index) => (
              <motion.div
                key={product.id}
                variants={slideInVariant}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ flex: "1 0 25%" }}
              >
                <MDBCol md="3" className="mt-5 pb-10 ml-8">
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
