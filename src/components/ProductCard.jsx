import React, { useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const ProductCard = ({
  images,
  name,
  brand_name,
  price,
  sizes,
  customer_rating,
}) => {
  const imgRef = useRef();
  const [hoverOn, setHoverOn] = useState(false);
  const [img, setImg] = useState(images[0]);
  var count = 0;
  const mouseLeave = () => {
    setImg(images[0]);
    clearInterval(imgRef.current);
  };
  const mouseEnter = () => {
    imgRef.current = setInterval(() => {
      if (count < images.length) {
        setImg(images[count++]);
      } else {
        count = 0;
      }
    }, 1000);
  };
  return (
    <div>
      <Card
        onMouseEnter={() => setHoverOn(true)}
        onMouseLeave={() => setHoverOn(false)}
        sx={{
          width: 230,
          height: 400,
          textAlign: "left",
          borderRadius: "0px",
        }}
      >
        <CardMedia
          component="img"
          height="300"
          src={img}
          alt="green iguana"
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        />
        <p
          style={{
            float: "right",
            marginRight: "0.3rem",
            color: "orange",
            fontSize: "15px",
          }}
        >
          Rating:{customer_rating ? customer_rating : "-"}{" "}
        </p>
        {hoverOn ? (
          <CardContent sx={{ marginLeft: "1.5rem" }}>
            <Button
              variant="outlined"
              size="small"
              startIcon={<FavoriteBorderIcon />}
              sx={{
                marginTop: "0rem",
                marginLeft: "1rem",
                color: "black",
                border: "black 1px solid",
              }}
            >
              {" "}
              WishList
            </Button>
            <p style={{ fontSize: "13px", margin: "0.2px", padding: "0.5rem" }}>
              Sizes: {sizes.join(", ").slice(0, 14)}
            </p>

            <span style={{ fontSize: "13px" }}>
              <b>Rs. {price.sp}</b>{" "}
              <i style={{ textDecorationLine: "line-through" }}>
                Rs.{price.mrp}
              </i>
              <span style={{ color: "orange", marginLeft: "0.3rem" }}>
                ({price.discount}% OFF)
              </span>
            </span>
          </CardContent>
        ) : (
          <CardContent>
            <div style={{ marginTop: "0.5rem" }}>
              <b style={{ fontSize: "15px" }}>{brand_name}</b>
              <p style={{ fontSize: "13px", margin: "0.2px" }}>
                {name.slice(0, 25)}{" "}
              </p>
              <div style={{ fontSize: "13px", marginTop: "0.5rem" }}>
                <b>Rs. {price.sp}</b>{" "}
                <i style={{ textDecorationLine: "line-through" }}>
                  Rs. {price.mrp}
                </i>
                <span style={{ color: "orange", marginLeft: "0.3rem" }}>
                  ({price.discount}% OFF)
                </span>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};
