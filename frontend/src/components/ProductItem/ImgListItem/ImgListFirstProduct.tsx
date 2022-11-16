import { Box, Button, ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import * as React from 'react';

const ImgListFirstProduct = (data: any) => {
  return (
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
                left: '30px',
                backgroundColor: '#2A7AE4',
                width: '120px',
                opacity: '0.9'
              }}>
              <Typography sx={{ color: 'white' }} variant="h5" color="initial">
                VER →
              </Typography>
            </Button>
          }></ImageListItemBar>
      </ImageListItem>
    </Box>
  );
};

export default ImgListFirstProduct;
