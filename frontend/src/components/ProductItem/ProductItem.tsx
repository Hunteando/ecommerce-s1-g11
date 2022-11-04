import React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import  './ProductItem.css';

const ProductItem = (data:any) => {
  return (
    <Box sx={{ width: "200px", height: "300px", marginTop: "20px" }}>
      <ImageListItem sx={{width: "200px", height: "200px"}} key={data.data.image}>
        <img src={data.data.image} alt={data.data.title} loading="lazy" />
        <Typography variant="body1" color="initial">{data.data.title}</Typography>
      </ImageListItem>
    </Box>
  );
};

export default ProductItem;
