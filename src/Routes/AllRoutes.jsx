import { Routes, Route } from "react-router-dom";

import React from "react";
import { Home } from "../HomePageComponents/Home";
import { ProductCard } from "../components/ProductCard";
import { Login } from "../Logincomponent/Login";
import { Otp } from "../Logincomponent/Otp";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/product" element={<ProductCard />} />
    </Routes>
  );
};

export default AllRoutes;
