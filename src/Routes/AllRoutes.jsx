import { Routes, Route } from "react-router-dom";

import React from "react";
import { Home } from "../HomePageComponents/Home";
import { Login } from "../Logincomponent/Login";
import { Otp } from "../Logincomponent/Otp";
import { Password } from "../Logincomponent/Password";
import { Cart } from "../CartComponent/Cart";
import { WomenKurti } from "../components/WomenKurti";
import { WomenTops } from "../components/WomenTops";
import { MenJeans } from "../components/MenJeans";
import { MenTshirts } from "../components/MenTshirts";
import { Search } from "../components/Search";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/password" element={<Password />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/women-kurti" element={<WomenKurti />} />
      <Route path="/women-tops" element={<WomenTops />} />
      <Route path="/men-jeans" element={<MenJeans />} />
      <Route path="/men-tshirts" element={<MenTshirts />} />
      <Route path="/search/:q" element={<Search />} />
      {/* <Route path="/search/q=" element={<Search />} /> */}
    </Routes>
  );
};

export default AllRoutes;
