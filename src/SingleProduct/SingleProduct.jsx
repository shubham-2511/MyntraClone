import React from "react";
import { useState, useEffect } from "react";
import { SingleProductImage } from "../SingleProduct/SingleProductImage";
import styles from "./SingleProductImage.module.css";
import { SingleProductPage1 } from "./SingleProductPage1";
import { SingleProductPage2 } from "./SingleProductPage2";
import { SingleProductPage3 } from "./SingleProductPage3";
import { SingleProductPage4 } from "./SingleProductPage4";
import "./Product.css";
import Navbar from "../HomePageComponents/Navbar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductError,
  getProductLoading,
  getSingleProduct,
} from "../Store/Products/actions";
import { Box, Card, CardMedia, CircularProgress } from "@mui/material";
export const SingleProduct = () => {
  const product = {
    brand_name: "Tommy Hilfiger",
    name: "Men Burgundy Brand Logo Embossed Pure Cotton T-shirt",
    price: {
      mrp: 1999,
      discount: 50,
      sp: 1199,
    },
    sizes: ["S", "M", "L", "XL", "XXL"],
    customer_rating: 4.6,
    product_details: [
      "Burgundy Tshirt for men",
      "Brand logo embossed",
      "Regular length",
      "Round neck",
      "Short, regular sleeves",
      "Knitted cotton fabric",
    ],
    images: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15140410/2021/11/10/331c7234-a4e8-4122-85d8-a65cb6cc80241636548599253-Tommy-Hilfiger-Men-Tshirts-7341636548598554-1.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15140410/2021/11/10/6fc599b6-c2ac-4d54-8e6b-38531a7153d71636548599245-Tommy-Hilfiger-Men-Tshirts-7341636548598554-2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15140410/2021/11/10/4e397da7-797e-45e3-bbd8-448911084bb01636548599236-Tommy-Hilfiger-Men-Tshirts-7341636548598554-3.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15140410/2021/11/10/3324dd0c-596e-4f8e-a998-f238e5d2c3341636548599228-Tommy-Hilfiger-Men-Tshirts-7341636548598554-4.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15140410/2021/11/10/8d665c7d-b5cb-49ae-9278-6bd4ee8b8cbf1636548599219-Tommy-Hilfiger-Men-Tshirts-7341636548598554-5.jpg",
    ],
  };
  const { tag, id } = useParams();
  const dispatch = useDispatch();
  const { loading, error, singleProduct } = useSelector((state) => ({
    singleProduct: state.product.singleProduct,
    loading: state.product.loading,
    error: state.product.error,
  }));

  const getSingProdDetails = () => {
    dispatch(getProductLoading());
    fetch(`https://myntradb.herokuapp.com/${tag}/${id}`)
      .then((r) => r.json())
      .then((r) => {
        dispatch(getSingleProduct(r));
      })
      .catch((e) => {
        console.log(e);
        dispatch(getProductError());
      });
  };
  useEffect(() => {
    getSingProdDetails();
  }, []);

  return (
    <>
      <Navbar />
      <>
        {loading ? (
          <div style={{ width: "100px", margin: "auto" }}>
            <CircularProgress />
          </div>
        ) : error ? (
          <h1>Something Went Wrong</h1>
        ) : (
          singleProduct.length === 1 && (
            <div className="products">
              <Box
                sx={{
                  marginLeft: "120px",
                  width: "55%",
                  // border: "1px solid black",
                }}
              >
                <SingleProductImage image={singleProduct[0].images} />
              </Box>
              <Box
                sx={{
                  width: "45%",
                  border: "5px solid balck",
                  marginRight: "0px",
                }}
              >
                <SingleProductPage1
                  brand={singleProduct[0].brand_name}
                  pname={singleProduct[0].name}
                  rating={singleProduct[0].customer_rating}
                />
                <SingleProductPage2
                  tag={tag}
                  id={id}
                  price={singleProduct[0].price}
                />
                <SingleProductPage3 />
                <SingleProductPage4
                  details={singleProduct[0].product_details}
                />
              </Box>
            </div>
          )
        )}
      </>
    </>
  );
};
