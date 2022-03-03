import { Routes, Route } from "react-router-dom";

import React from "react";
import { Home } from "../HomePageComponents/Home";
import { Login } from "../Logincomponent/Login";
import { Otp } from "../Logincomponent/Otp";
import { WomenKurti } from "../components/WomenKurti";
import { WomenTops } from "../components/WomenTops";
import { MenJeans } from "../components/MenJeans";
import { MenTshirts } from "../components/MenTshirts";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/women-kurti" element={<WomenKurti />} />
      <Route path="/women-tops" element={<WomenTops />} />
      <Route path="/men-jeans" element={<MenJeans />} />
      <Route path="/men-tshirts" element={<MenTshirts />} />
    </Routes>
  );
};

export default AllRoutes;
