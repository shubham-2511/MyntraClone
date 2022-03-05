import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../HomePageComponents/Navbar";
import {
  getProductError,
  getProductLoading,
  getSearch,
} from "../Store/Products/actions";
import { ProductCard } from "./ProductCard";
import styles from "./Product.module.css";
import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
export const Search = () => {
  let { q } = useParams();
  const [sort, setSort] = useState("");
  const dispatch = useDispatch();
  const getProducts = () => {
    dispatch(getProductLoading());
    if (q === "libas" || q === "anouk") {
      fetch(`https://myntradb.herokuapp.com/women-kurtas-suits?q=${q}`)
        .then((r) => r.json())
        .then((r) => dispatch(getSearch(r)))
        .catch((e) => dispatch(getProductError(e)));
    } else if (q === "levis" || "roadster") {
      fetch(`https://myntradb.herokuapp.com/men-jeans?q=${q}`)
        .then((r) => r.json())
        .then((r) => dispatch(getSearch(r)))
        .catch((e) => dispatch(getProductError(e)));
    }
  };
  let { loading, search, error } = useSelector((state) => ({
    loading: state.product.loading,
    error: state.product.error,
    search: state.product.search,
  }));
  const sorting = (val) => {
    if (val === "high") {
      search.sort((a, b) => b.customer_rating - a.customer_rating);
      setSort("high");
    } else {
      search.sort((a, b) => a.customer_rating - b.customer_rating);

      setSort("low");
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <Navbar />
      {loading ? (
        <div style={{ width: "100px", margin: "auto" }}>
          <CircularProgress />
        </div>
      ) : error ? (
        <h1>something went wrong</h1>
      ) : (
        <div className={styles.body}>
          <div style={{ float: "left" }} className={styles.upperDiv}>
            <p>
              Home/ Clothing/{" "}
              <b>
                {" "}
                {q === "levis" ? (
                  <b>Jeans for Men </b>
                ) : (
                  <b>Kurtis for Women</b>
                )}{" "}
                / {q}
              </b>
            </p>
            {q === "levis" ? <b>Jeans for Men </b> : <b>Kurtis for Women</b>}
          </div>
          <div
            className={styles.upperDiv2}
            style={{
              float: "right",
            }}
          >
            <Box sx={{ minWidth: 120, height: 30 }}>
              <FormControl fullWidth>
                <InputLabel>Sort By</InputLabel>
                <Select
                  value={sort}
                  label="Sort By"
                  onChange={(e) => sorting(e.target.value)}
                >
                  <MenuItem value={"high"}>Rating High to Low</MenuItem>
                  <MenuItem value={"low"}>Rating Low to High</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className={styles.filterDiv}>
            <b>FILTERS</b>
            <Button
              size="small"
              sx={{ padding: "0px", margin: "0px" }}
              onClick={(e) => {
                window.location.reload();
              }}
            >
              Clear
            </Button>
            <div className={styles.filterDiv1}>
              <div>
                <span style={{ fontWeight: "500" }}>CATEGORIES</span>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <input type="checkbox" />
                <label style={{ marginLeft: "1rem" }}>
                  {q === "levis" ? "Jeans" : "Kurtas"}
                </label>
              </div>
            </div>
            <div className={styles.filterDiv1}>
              <div className={styles.filterDiv1}>
                <div>
                  <span style={{ fontWeight: "500" }}>PRICE</span>
                </div>
                <div style={{ marginTop: "0.3rem" }}>
                  <input type="checkbox" />
                  <label style={{ marginLeft: "1rem" }}>
                    Rs. 269 to Rs. 1702
                  </label>
                </div>
                <div style={{ marginTop: "0.3rem" }}>
                  <input type="checkbox" />
                  <label style={{ marginLeft: "1rem" }}>
                    Rs. 1702 to Rs. 3135
                  </label>
                </div>
                <div style={{ marginTop: "0.3rem" }}>
                  <input type="checkbox" />
                  <label style={{ marginLeft: "1rem" }}>
                    Rs. 3135 to Rs. 4568
                  </label>
                </div>
                <div style={{ marginTop: "0.3rem" }}>
                  <input type="checkbox" />
                  <label style={{ marginLeft: "1rem" }}>
                    Rs. 4568 to Rs. 6001
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.grid}>
            {search.map((item) => (
              <div key={item.id}>
                <ProductCard {...item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
