import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../HomePageComponents/Navbar";
import {
  getProductError,
  getProductLoading,
  getTopsDiscount,
  getTopsFiltered,
  getTopsSucess,
} from "../Store/Products/actions";
import styles from "./Product.module.css";
import { ProductCard } from "./ProductCard";
import { Footer } from "../Footer/Footer";

export const WomenTops = () => {
  const [brandName, setBrandName] = useState([]);
  let [check, setCheck] = useState(false);
  const [sort, setSort] = useState("Recommended");
  let { loading, top, error } = useSelector((state) => ({
    loading: state.product.loading,
    error: state.product.error,
    top: state.product.tops,
  }));
  const [page, setPage] = useState(1);
  useEffect(() => {
    getProducts();
  }, [page]);
  const dispatch = useDispatch();
  const getProducts = () => {
    dispatch(getProductLoading());
    fetch(`https://myntradb.herokuapp.com/women-tops?_page=${page}&_limit=10`)
      .then((r) => r.json())
      .then((r) => {
        dispatch(getTopsSucess(r));
        let list = r.slice(0, 10).map((item) => item.brand_name);
        setBrandName(list);
      })
      .catch((e) => dispatch(getProductError(e)));
  };
  const handleFilters = (s) => {
    dispatch(getProductLoading());
    fetch(`https://myntradb.herokuapp.com/women-tops?q=${s}`)
      .then((r) => r.json())
      .then((r) => dispatch(getTopsFiltered(r)))
      .catch((e) => dispatch(getProductError(e)));
  };
  const discount = (value) => {
    dispatch(getProductLoading());
    let list = top.filter((item) => item.price.discount >= value);
    dispatch(getTopsDiscount(list));
  };
  const sorting = (val) => {
    if (val === "high") {
      top.sort((a, b) => b.customer_rating - a.customer_rating);
      setSort("high");
    } else {
      top.sort((a, b) => a.customer_rating - b.customer_rating);

      setSort("low");
    }
  };
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
              Home/ Clothing/ <b>Tops For Women</b>
            </p>
            <b>Tops For Women</b>
          </div>
          <div
            className={styles.upperDiv2}
            style={{
              float: "right",
            }}
          >
            <div>
              <Box sx={{ minWidth: 120, height: 30 }}>
                <FormControl fullWidth>
                  <InputLabel>Sort By</InputLabel>
                  <Select
                    value={sort}
                    label="Sort By"
                    onChange={(e) => sorting(e.target.value)}
                  >
                    <MenuItem value={sort}>{sort}</MenuItem>
                    <MenuItem value={"high"}>Rating High to Low</MenuItem>
                    <MenuItem value={"low"}>Rating Low to High</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
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
                <label style={{ marginLeft: "1rem" }}>Tops</label>
              </div>
            </div>
            <div className={styles.filterDiv1}>
              <div>
                <span style={{ fontWeight: "500" }}>BRAND</span>
              </div>

              <div style={{ marginTop: "1rem" }}>
                {brandName.map((item, i) => (
                  <div
                    key={i}
                    style={{ marginTop: "0.2rem" }}
                    onChange={() => handleFilters(item)}
                  >
                    <input type="checkbox" onClick={(e) => setCheck(!check)} />
                    <label style={{ marginLeft: "1rem" }}>{item}</label>{" "}
                  </div>
                ))}
              </div>

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
              <div className={styles.filterDiv1}>
                <div>
                  <span style={{ fontWeight: "500" }}>DISCOUNT</span>
                </div>
                <div style={{ marginTop: "0.3rem" }}>
                  <input
                    type="checkbox"
                    name="10"
                    onChange={(e) => discount(e.target.name)}
                  />
                  <label style={{ marginLeft: "1rem" }}>10% and above</label>
                </div>
                <div style={{ marginTop: "0.3rem" }}>
                  <input
                    type="checkbox"
                    name="20"
                    onChange={(e) => discount(e.target.name)}
                  />
                  <label style={{ marginLeft: "1rem" }}>20% and above</label>
                </div>
                <div style={{ marginTop: "0.3rem" }}>
                  <input
                    type="checkbox"
                    name="30"
                    onChange={(e) => discount(e.target.name)}
                  />
                  <label style={{ marginLeft: "1rem" }}>30% and above</label>
                </div>
                <div style={{ marginTop: "0.3rem" }}>
                  <input
                    type="checkbox"
                    name="40"
                    onChange={(e) => discount(e.target.name)}
                  />
                  <label style={{ marginLeft: "1rem" }}>40% and above</label>
                </div>
                <div style={{ marginTop: "0.3rem" }}>
                  <input
                    type="checkbox"
                    name="50"
                    onChange={(e) => discount(e.target.name)}
                  />
                  <label style={{ marginLeft: "1rem" }}>50% and above</label>
                </div>
                <div style={{ marginTop: "0.3rem" }}>
                  <input
                    type="checkbox"
                    name="60"
                    onChange={(e) => discount(e.target.name)}
                  />
                  <label style={{ marginLeft: "1rem" }}>60% and above</label>
                </div>
                <div style={{ marginTop: "0.3rem" }}>
                  <input
                    type="checkbox"
                    name="70"
                    onChange={(e) => discount(e.target.name)}
                  />
                  <label style={{ marginLeft: "1rem" }}>70% and above</label>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.grid}>
            {top.map((item) => (
              <div key={item.id}>
                <ProductCard item={item} />
              </div>
            ))}
            <div
              style={{
                margin: "100px auto",
                width: "500px",
              }}
            >
              <Stack spacing={2}>
                <Pagination
                  count={10}
                  variant="outlined"
                  shape="rounded"
                  onClick={() => setPage(page + 1)}
                />
              </Stack>
            </div>
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};
