import React from 'react';
import { ImageListItem, ImageListItemBar, Button, Typography, Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImgListOutstandingProducts = (data: any) => {

  
  return (
    <Slider>
      <Box sx={{ marginTop: '20px' }}>
        <ImageListItem key={data.data.image}>
          <img src={data.data.image} alt={data.data.title} loading="lazy" style={{ width: '100%', height: '250px' }} />
          <ImageListItemBar
            sx={{ top: '40px', padding: '20px' }}
            position="top"
            title={data.data.title}
            subtitle={data.data.description}
            actionIcon={
              <Button
                sx={{
                  position: 'absolute',
                  top: '110px',
                  left: '20px',
                  width: '100px'
                }}>
                <Typography sx={{ color: 'white' }} variant="body1" color="initial">
                  VER →
                </Typography>
              </Button>
            }></ImageListItemBar>
        </ImageListItem>
      </Box>
    </Slider>
  );
};

export default ImgListOutstandingProducts;
