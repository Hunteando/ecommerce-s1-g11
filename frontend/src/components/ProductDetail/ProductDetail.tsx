import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Paper, Typography, Box } from '@mui/material';
import imagen from '../../assets/images/pajaroamor.jpg';

const ProductDetail = () => {
  return (
    <>
      <Grid container justifyContent="space-evenly" sx={{margin:'20px 0', height: '100vh'}}>
        <Grid item md={5}>
          <Box sx={{justifyContent: 'center'}}>
            <Paper sx={{ width: '100%'}}>
              <img src={imagen} alt="pintura a comprar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Paper>
          </Box>
        </Grid>
        <Grid item md={5}>
          <Typography variant="body1" color="initial" sx={{}}>
            Your cart
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetail;
