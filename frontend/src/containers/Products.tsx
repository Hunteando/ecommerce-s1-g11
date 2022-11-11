import * as React from 'react';
import MainProductItem from '../components/ProductItem/MainProductItem/MainProductItem';
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';
import useMock from '../hooks/useMock';
import ProductsItemOutstanding from '../components/ProductItem/ProductsItemOutstanding/ProductItemOutstanding';
import OtherProducts from '../components/ProductItem/OtherProducts/OtherProducts';

export const Products = () => {
  const data: any = useMock();
  return (
    <Container>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 3, md: 3, lg: 5 }} justifyContent="flex-start">
        {data?.map((data: { id: React.Key; }, i: number) =>
          i === 0 ? (
            <React.Fragment key={data.id}>
              <Grid item xs={12} sm={12} md={12}>
                <MainProductItem data={data} />
              </Grid>
            </React.Fragment>
          ) : i > 0 && i <= 2 ? (
            <React.Fragment key={data.id}>
              <Grid item xs={6} sm={6} md={6}>
                <ProductsItemOutstanding data={data} />
              </Grid>
            </React.Fragment>
          ) : (
            <React.Fragment key={data.id}>
              <Grid item xs={6} sm={3} md={3}>
                <OtherProducts data={data} />
              </Grid>
            </React.Fragment>
          )
        )}
      </Grid>
    </Container>
  );
};
