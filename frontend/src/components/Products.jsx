import React from "react";
import { Grid } from "@mui/material";

import Product from "./Product/Product";

const products = [
  { id: 1, name: "Shoes", description: "Running shoes", image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ed291e67-4618-49ec-8dda-2c2221a5df41/revolution-6-next-nature-mens-road-running-shoes-XcXMbX.png", price: "$5" },
  { id: 2, name: "Macbook", description: "Apple Macbook", image: "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_SX679_.jpg", price: "$10" },
];

const Products = () => {
  return(
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            {/* <Product product={product} /> */}
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;
