import * as React from 'react';
import { Grid } from '@mui/material';
import useMock from '../../hooks/useMock';
import { ProductsI } from 'src/interfaces/ProductsI';
import ImgListFirstProduct from './ImgListItem/ImgListFirstProduct';

const FirstFeaturedProduct = () => {
  const data: ProductsI[] = useMock();

  return (
    <>
      {data.map(
        (data, i) =>
          i === 0 && (
            <React.Fragment key={data.id}>
              <Grid item xs={12} sm={12} md={12}>
                <ImgListFirstProduct data={data} />
              </Grid>
            </React.Fragment>
          )
      )}
    </>
  );
};

export default FirstFeaturedProduct;
