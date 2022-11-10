import React from 'react';
import { Box, ImageListItem, ImageListItemBar, IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const MainProductItem = (data: any) => {
  return (
    <Box sx={{ marginTop: '20px' }}>
      <ImageListItem key={data.data.image}>
        <img src={data.data.image} alt={data.data.title} loading="lazy" style={{ width: '100%', height: '250px' }} />
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

export default MainProductItem;
