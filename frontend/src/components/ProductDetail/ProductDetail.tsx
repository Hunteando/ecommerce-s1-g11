import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Paper, Typography, Box, IconButton, TextField, createTheme } from '@mui/material';
import imagen from '../../assets/images/pajaroamor.jpg';
import { Container } from '@mui/system';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontSize: 16
  },
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#2196f3'
    }
  }
});

const ProductDetail = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container justifyContent="space-evenly" sx={{ height: '100vh' }}>
          <Grid item md={5} alignSelf="center" justifyContent="space-between">
            <Box sx={{ justifyContent: 'center', margin: '20px' }}>
              <Paper elevation={5} sx={{ width: '100%', heigth: '100vh', alignSelf: 'center', borderRadius: '30px' }}>
                <img
                  src={imagen}
                  alt="pintura a comprar"
                  style={{ width: '100%', height: '90vh', objectFit: 'contain' }}
                />
              </Paper>
            </Box>
          </Grid>
          <Grid item md={5} sx={{ padding: '0 20px' }}>
            <Container style={{ margin: '20px 0' }}>
              <Grid container justifyContent="space-between">
                <Typography variant="h2" color="initial" sx={{ display: 'inline-flex' }}>
                  Your cart
                </Typography>
                <IconButton>
                  <CloseIcon />
                </IconButton>
              </Grid>
              <hr />
              {/*------------------------------ Producto y contador ----------------------------*/}
              <Grid container justifyContent="space-between" alignItems="center" sx={{ margin: '20px 0' }}>
                <Paper elevation={3} style={{ width: '150px', height: '150px' }}>
                  <img src={imagen} alt="" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                </Paper>
                <Typography variant="h5" color="initial">
                  Name
                </Typography>
                <IconButton>
                  <AddIcon />
                </IconButton>
                <Typography variant="h5" color="initial">
                  0
                </Typography>
                <IconButton>
                  <RemoveIcon />
                </IconButton>
                <Typography variant="h5" color="initial">
                  Price
                </Typography>
              </Grid>
            </Container>
            {/*-------------------------------- Promocode and Button -------------------------*/}
            <Grid container justifyContent="center" alignItems="center" spacing={4} sx={{ margin: '10px 0' }}>
              <Grid item>
                <TextField id="filled-basic" label="Promocode" variant="filled" sx={{ width: '200px' }} />
              </Grid>
              <Grid item>
                <Button variant="outlined" size="large" sx={{ heigt: '100%' }}>
                  Apply
                </Button>
              </Grid>
            </Grid>
            {/*-------------------------------- Lista de prouctos y checkout --------------------------*/}
            <hr />
            <Box>
              <Grid container justifyContent="space-between">
                <Typography variant="h5" color="initial">
                  Producto
                </Typography>
                <Typography variant="h5" color="initial">
                  Price
                </Typography>
              </Grid>
              <Box sx={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                <Button variant="contained" color="secondary" size="large" sx={{ width: '200px' }}>
                  Checkout
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default ProductDetail;
