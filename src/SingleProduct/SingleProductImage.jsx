import React from "react";
import ImageList from "@mui/material/ImageList";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import styles from "./SingleProductImage.module.css"


export const SingleProductImage = ({ image }) => {
  return (
    <>
    <div className={styles.img}>
      {image.map((item) => (
        // <ImageListItem key={item.image}>
        //   <img
        //     src={`${image}?w=200&h=164&fit=crop&auto=format`}
        //     //   srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        //     //   alt={item.title}
        //     loading="lazy"
        //   />
        // </ImageListItem>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="400"
              image={item}
              alt="green iguana"
            />
          </Card>
      ))}
      </div>
    </>
  );
};
