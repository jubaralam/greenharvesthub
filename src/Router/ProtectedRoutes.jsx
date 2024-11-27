// import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Cart from "../Components/Cart"
import ProductViewPage from "../Components/ProductViewPage";
const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductViewPage />} />
    </Routes>
  );
};

export default ProtectedRoutes;
