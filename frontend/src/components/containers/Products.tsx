import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import useMock from "../hooks/useMock";
import { ProductsI } from "../interfaces/ProductsI";

export const Products = () => {
  const data = useMock();
  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 20 }}
      >
        {data.map((data) => (
          <Grid item xs={5}>
            <ProductItem key={data.id} data={data} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
