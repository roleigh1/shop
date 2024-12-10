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
  const ITEMS_PER_PAGE = 4;

  const api_base_url = process.env.REACT_APP_API_BASEURL;



  useEffect(() => {
    axios
      .get(`${api_base_url}/content/products?offset=0&limit=${ITEMS_PER_PAGE}`)
      .then((res) => {
        const initialProduct = res.data.result || []; 
        setProducts(sortProduct(initialProduct,selectedSort)); 
        if (initialProduct.length < ITEMS_PER_PAGE) setHasMore(false); 
      })
      .catch((err) => {
        console.error("API error:", err); 
      });
  }, [api_base_url]);


  const fetchMoreData = () => {
    const offset = products.length;
    axios
      .get(`${api_base_url}/content/products?offset=${offset}&limit=${ITEMS_PER_PAGE}`)
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
          <MDBCol>
            <Menu as="div" className="relative inline-block text-left">
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
                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
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
          </MDBCol>
        </MDBRow>

        <MDBRow className="mobile" style={{ justifyContent: "center" }}>
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
                <MDBCol md="3" className="mt-5 pb-10">
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
