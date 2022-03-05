import React, { useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const ProductCard = ({ images, name, brand_name, price }) => {
  const imageArr = [
    "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11066858/2020/1/13/7e6e72d5-7823-4563-b6e3-7da68e67bc551578911632787-Popnetic-Women-Pink--White-Block-Printed-Straight-Kurta-9771-3.jpg",
    "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11066858/2020/1/13/dd9503ca-1ab2-48c4-bea3-2e9969b1bdc51578911632736-Popnetic-Women-Pink--White-Block-Printed-Straight-Kurta-9771-4.jpg",
    "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11066858/2020/1/13/07d80cf8-0906-4016-b12c-8844a26f23c71578911632904-Popnetic-Women-Pink--White-Block-Printed-Straight-Kurta-9771-1.jpg",
    "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11066858/2020/1/13/2b4ced9b-dea1-4243-af65-d3f15e0897eb1578911632844-Popnetic-Women-Pink--White-Block-Printed-Straight-Kurta-9771-2.jpg",
    "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11066858/2020/1/13/71b8af3c-f5a1-402b-9a40-0342e1fddb631578911632684-Popnetic-Women-Pink--White-Block-Printed-Straight-Kurta-9771-5.jpg",
  ];
  const imgRef = useRef();
  const [hoverOn, setHoverOn] = useState(false);
  const [img, setImg] = useState(
    "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11066858/2020/1/13/7e6e72d5-7823-4563-b6e3-7da68e67bc551578911632787-Popnetic-Women-Pink--White-Block-Printed-Straight-Kurta-9771-3.jpg"
  );
  var count = 0;
  const mouseLeave = () => {
    setImg(
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11066858/2020/1/13/7e6e72d5-7823-4563-b6e3-7da68e67bc551578911632787-Popnetic-Women-Pink--White-Block-Printed-Straight-Kurta-9771-3.jpg"
    );
    clearInterval(imgRef.current);
  };

  const mouseEnter = () => {
    imgRef.current = setInterval(() => {
      if (count < imageArr.length) {
        setImg(imageArr[count++]);
      } else {
        count = 0;
      }
    }, 1000);
  };
  return (
    <div style={{ margin: "3rem", marginTop: "10rem" }}>
      <Card
        onMouseEnter={() => setHoverOn(true)}
        onMouseLeave={() => setHoverOn(false)}
        sx={{
          maxWidth: 230,
          maxHeight: 500,
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
        {hoverOn ? (
          <CardContent>
            <Button
              variant="outlined"
              size="small"
              startIcon={<FavoriteBorderIcon />}
              sx={{
                marginLeft: "3rem",
                color: "black",
                border: "black 1px solid",
              }}
            >
              {" "}
              WishList
            </Button>
            <p style={{ fontSize: "13px", margin: "0px", padding: "0.5rem" }}>
              Sizes: XS, S, M, L, XL
            </p>
            <span style={{ fontSize: "13px" }}>
              <b>Rs. 799</b>{" "}
              <i style={{ textDecorationLine: "line-through" }}>Rs. 1999</i>
              <span style={{ color: "orange", marginLeft: "0.3rem" }}>
                (60% OFF)
              </span>
            </span>
          </CardContent>
        ) : (
          <CardContent>
            <b style={{ fontSize: "15px" }}>Indo Era</b>
            <br />
            <p style={{ fontSize: "13px", margin: "0.2px" }}>
              Women Floral Printed Kurta{" "}
            </p>
            <span style={{ fontSize: "13px" }}>
              <b>Rs. 799</b>{" "}
              <i style={{ textDecorationLine: "line-through" }}>Rs. 1999</i>
              <span style={{ color: "orange", marginLeft: "0.3rem" }}>
                (60% OFF)
              </span>
            </span>
          </CardContent>
        )}
      </Card>
    </div>
  );
};
