import * as React from 'react';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Footer from './components/Footer/Footer';
// import {Products} from './containers/Products';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import HomePage from './pages/Home/index';
import ProductDetail from './components/ProductDetail/ProductDetail';

function MainRoutes() {

  return (
    <Box>  
      <AppBar />
        <Routes >
          {/* <Route path="/" element={ <ProductDetail /> } /> */}
          {/* <Route path="/" element={ <Products /> } /> */}
          <Route path="/" element={ <HomePage /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/registrarse" element={ <Register /> } />
        </Routes>  
       <Footer />  
    </Box>    
  );
}

export default MainRoutes;