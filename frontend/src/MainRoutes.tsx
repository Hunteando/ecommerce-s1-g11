import './App.css';
import React from 'react';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
//import Products from './components/Products';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function MainRoutes() {

  return (
    <Box>  
      {/* <Navbar /> */}
        <Routes >
          {/* <Route path="/" element={ <Products /> } /> */}
          {/* cambiar path de ruta de abajo por /login */}
          <Route path="/" element={ <Login /> } />
          <Route path="/registrarse" element={ <Register /> } />
        </Routes>  
      {/* <Footer /> */}
    </Box>    
  );
}

export default MainRoutes;