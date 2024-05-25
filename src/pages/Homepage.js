import React, { useContext } from "react";
// import { CartState } from '../context/Context'
import { Cart } from "../context/Context";
import SingleProduct from "../components/SingleProduct";
import "./styles.css";
import Filters from "../components/Filters";

const Homepage = () => {
  const {
    state: { products },
    filterState: { byStock, byFastDelivery, sort, searchQuery },
   
  } = useContext(Cart);


  const transformProducts = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) => {
        return sort === "asc" ? a.price - b.price : b.price - a.price;
      });
    }
    if (byStock) {
      sortedProducts = sortedProducts.filter(prod => prod.inStock)
    }
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter(prod => prod.fastDelivery)
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter(prod => prod.name.toLowerCase().includes(searchQuery))
    }
    return sortedProducts;
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts() &&
          transformProducts().map((prod, index) => {
            return <SingleProduct prod={prod} key={prod.id} />;
          })}
      </div>
    </div>
  );
};

export default Homepage;
