import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import CartComp from "./pages/CartComp";

const routeComp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<CartComp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default routeComp;
