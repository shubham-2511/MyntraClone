import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBag,
  getCartError,
  getCartLoading,
} from "../Store/CartReducer/actions";

export const SingleProductPage2 = ({ price, tag, id }) => {
  console.log(tag, id);
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => ({
    cart: state.cart.cart,
  }));
  const addItemToBag = () => {
    dispatch(getCartLoading());
    fetch(`https://myntradb.herokuapp.com/${tag}/${id}`)
      .then((r) => r.json())
      .then((r) => {
        fetch("https://myntradb.herokuapp.com/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(r),
        })
          .then((r) => r.json())
          .then((r) => dispatch(addToBag(r)))
          .catch((e) => dispatch(getCartError()));
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <h2>
        Rs.{price.sp}
        <span className="realPrice">Rs.{price.mrp}</span>
        <span className="productOffer"> {price.discount}</span>
      </h2>
      <Typography color="secondary" sx={{ my: 1 }}>
        inclusive of all taxes
      </Typography>
      <div>
        <Button
          variant="contained"
          color="success"
          startIcon={<ShoppingCartIcon />}
          sx={{ px: 10, py: 2, mr: 2 }}
          onClick={addItemToBag}
        >
          ADD TO CART
        </Button>
        <Button
          variant="outlined"
          color="warning"
          startIcon={<FavoriteBorderIcon />}
          sx={{ px: 7, py: 2, mr: 2 }}
        >
          WISHLIST
        </Button>
      </div>

      <hr />
      <div style={{ padding: "2rem" }}>
        <h3>
          Rs. 899 <span className="realPrice">Rs. 3599</span>
          <span className="productOffer"> (75% OFF)</span>
        </h3>
        <p>
          <span
            style={{ color: "#ff3e6c", fontWeight: "bold", fontSize: "16px" }}
          >
            Traditional MALL
          </span>
        </p>
      </div>
      <hr />
    </>
  );
};
