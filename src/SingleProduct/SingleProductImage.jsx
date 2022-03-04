import React from 'react';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export const SingleProductImage = ({image}) => {
  return (
      <>
    <ImageList sx={{ width: 650, height: 450 }} cols={2} rowHeight={164}>
    {image.map((item) => (
      <ImageListItem key={item.image}>
        <img
          src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
          //   srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          //   alt={item.title}
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList>
  </>
  )
}
