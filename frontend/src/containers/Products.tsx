import * as React from 'react';
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';
import ProductsItemOutstanding from '../components/ProductItem/ProductItemOutstanding';
import FirstFeaturedProduct from '../components/ProductItem/FirstFeaturedProduct';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography } from '@mui/material';
import useMock from './../hooks/useMock';
import { ProductsI } from 'src/interfaces/ProductsI';
import './Products.css';
import { settings } from '../utils/carousel-settings';
import Paper from '@mui/material/Paper';

export const Products = (): any => {
  const data: ProductsI[] = useMock();

  return (
    <>
      <Container sx={{ width: '100%' }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 3, md: 3, lg: 5 }} justifyContent="flex-start">
          <FirstFeaturedProduct />
        </Grid>
        <Grid container columnSpacing={{ xs: 1, sm: 3, md: 3, lg: 5 }}>
          <ProductsItemOutstanding />
        </Grid>
      </Container>
      <Container>
        <Typography variant="h2" color="initial">
          Title
        </Typography>
        <Slider {...settings}>
          {data.map((data, i) => (
            <div key={data.id} className="container">
              <Box>
                <Paper>
                  <img src={data.image} alt="" style={{ height: '250px', width: '100%' }} />
                </Paper>
                <Typography variant="h5" color="initial">
                  {data.title}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h5" color="initial">{`${data.price}`}</Typography>
              </Box>
            </div>
          ))}
        </Slider>
      </Container>
    </>
  );
};
