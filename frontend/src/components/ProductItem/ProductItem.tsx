import React from 'react';
import { ImageListItem, ImageListItemBar, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import './ProductItem.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const ProductItem = (data: any) => {
  return (
    <Box sx={{ width: '200px', height: '300px', marginTop: '20px' }}>
      <ImageListItem sx={{ width: '200px', height: '200px' }} key={data.data.image}>
        <img src={data.data.image} alt={data.data.title} loading="lazy" />
        <ImageListItemBar
          title={data.data.title}
          subtitle={data.data.description}
          actionIcon={
            <IconButton>
              <ShoppingCartOutlinedIcon sx={{ color: 'white' }} />
            </IconButton>
          }></ImageListItemBar>
      </ImageListItem>
    </Box>
  );
};

export default ProductItem;
