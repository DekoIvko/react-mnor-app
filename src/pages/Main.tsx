import React from "react";
import Header from "./Features/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import HomePage from "./HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./SearchPage/SearchPage";
import CartPage from "./CartPage/CartPage";
import CategoryProductPage from "./CategoryProductPage/CategoryProductPage";
import ProductSinglePage from "./ProductSinglePage/ProductSinglePage";
import Footer from "./Features/Footer/Footer";

function Main() {
  return (
    <div className="main">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product/:id" element={<ProductSinglePage />} />
        <Route path="/category/:category" element={<CategoryProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/search/:seatchTerm" element={<SearchPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;
