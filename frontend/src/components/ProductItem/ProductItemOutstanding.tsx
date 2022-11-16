import * as React from 'react';
import { Grid } from '@mui/material';
import ImgListOutstandingProducts from './ImgListItem/ImgListOutstandingProducts';
import useMock from '../../hooks/useMock';
import { ProductsI } from 'src/interfaces/ProductsI';

const ProductsItemOutstanding = () => {
  const data: ProductsI[] = useMock();

  return (
    <>
      {data.map(
        (data, i) =>
          i > 0 &&
          i <= 2 && (
            <React.Fragment key={data.id}>
              <Grid item xs={6} md={6}>
                <ImgListOutstandingProducts data={data} />
              </Grid>
            </React.Fragment>
          )
      )}
    </>
  );
};

export default ProductsItemOutstanding;
