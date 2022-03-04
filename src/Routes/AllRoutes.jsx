import { Routes, Route } from "react-router-dom";

import React from "react";
import { Home } from "../HomePageComponents/Home";
import { ProductCard } from "../components/ProductCard";
import { Login } from "../Logincomponent/Login";
import { Otp } from "../Logincomponent/Otp";
import { Password } from "../Logincomponent/Password";
import { Cart } from "../CartComponent/Cart";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/password" element={<Password />} />
      <Route path="/product" element={<ProductCard />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AllRoutes;
