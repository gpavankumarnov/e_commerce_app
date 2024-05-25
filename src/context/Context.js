import React, {
  createContext,
  useEffect,
  useReducer,

} from "react";
import { faker } from "@faker-js/faker";
import axios from "axios";
import {  cartReducer, filterReducer } from "./Reducer";



export const Cart = createContext();

//every render, data change so to tell not to change we have to use seed method.
faker.seed(99);

const Context = ({ children }) => {
  useEffect(() => {
    const getApiData = async () => {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      console.log("respnse", response.data);
    };
    getApiData();
  }, []);

  

  const products = [...Array(20)].map(() => ({
    id:faker.string.nanoid(),
    name:faker.commerce.productName(),
    price:faker.commerce.price(),
    image:faker.image.url(),
    // inStock : faker.helpers.arrayElement([0, 1,2,3,4]),
    // fastDelivery:faker.datatype.boolean(),
    // ratings : faker.helpers.arrayElement([1,2,3,4,5])
    // ratings:faker.random.arrayElement([1,2,3,4,5]),
   }))

  console.log("products are faker", products.map(e => !e.inStock))
  

  const [state, dispatch] = useReducer(cartReducer, { products: products, cart: [] });
  const [filterState, filterDispatch] = useReducer(filterReducer, { byStock: false, byFastDelivery:false, searchQuery:""  });

  return <Cart.Provider value={{ state, dispatch, filterState, filterDispatch }}>{children}</Cart.Provider>;
};

export default Context;
