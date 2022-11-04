import './App.css';
import React from 'react';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import {Products} from './components/containers/Products';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import HomePage from './pages/Home/index';

function MainRoutes() {

  return (
    <Box>  
      {/* <Navbar /> */}
        <Routes >
          <Route path="/" element={ <Products /> } />
          {/* <Route path="/" element={ <HomePage /> } /> */}
          <Route path="/login" element={ <Login /> } />
          <Route path="/registrarse" element={ <Register /> } />
        </Routes>  
      {/* <Footer /> */}
    </Box>    
  );
}

export default MainRoutes;