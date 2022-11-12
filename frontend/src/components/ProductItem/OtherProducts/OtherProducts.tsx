import * as React from 'react';
import { Box, ImageListItem, ImageListItemBar, IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Typography from '@mui/material/Typography';

const OtherProducts = (data: any) => {
  return (
    <Box sx={{ margin: '20px 0' }}>
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

export default OtherProducts;
