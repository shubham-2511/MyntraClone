import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../HomePageComponents/Navbar";
import { getProductError, getProductLoading } from "../Store/Products/actions";

export const Search = () => {
  //(item) => (item += state.mrp)

  let { q } = useParams();
  console.log(q);
  useEffect(() => {
    // getProducts();
  }, []);
  const dispatch = useDispatch();
  const getProducts = () => {
    dispatch(getProductLoading());
    fetch(`https://myntradb.herokuapp.com/women-kurtas-suits?q=${q}`)
      .then((r) => r.json())
      .then((r) => console.log(r))
      .catch((e) => dispatch(getProductError(e)));
  };
  return (
    <div>
      <Navbar />
    </div>
  );
};
