import React, { useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ClearIcon from '@mui/icons-material/Clear';
import styles from './wishlist.module.css';

export const WishListComponent = ({
  images,
  name,
  brand_name,
  price,
  sizes,
  customer_rating,
}) => {

    const img = images[0];

    const style = {
        position: "absolute",
        top: "10px",
        right: "10px",
        backgroundColor: "rgb(219, 215, 215)",
        color: "grey",
        borderRadius: "50%",
        cursor: "pointer"
    }
    
  return (
    <div>
      <Card
        sx={{
          width: 230,
          height: 460,
          textAlign: "left",
          borderRadius: "0px",
          position: "relative",
          marginBottom: "40px"
        }}
      >
          <ClearIcon color="disabled" sx={style} fontSize="small" />
        <CardMedia
          component="img"
          height="300"
          src={img}
          alt="green iguana"
        />
       
          <CardContent>
            <div style={{ marginTop: "0.5rem" }}>
              <p style={{ margin: "0px auto" }}>
                {name.slice(0, 20)}{"..."}
              </p>
              <div style={{ fontSize: "13px", margin: "0.5rem", textAlign: "center" }}>

                <b>Rs. {price.sp}</b>{" "}
                <span style={{ textDecorationLine: "line-through" }}>
                  Rs. {price.mrp}
                </span>
                <span style={{ color: "orange", marginLeft: "0.3rem" }}>
                  ({price.discount}% OFF)
                </span>
              </div>
              <div>
                  
        <button className={styles.button}>MOVE TO BAG</button>
              </div>
            </div>
          </CardContent>

      </Card>
    </div>
  );
};
