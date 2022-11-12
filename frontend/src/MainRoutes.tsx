import './App.css';
import React from 'react';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import HomePage from './pages/Home/index';
import Footer from './components/Footer/Footer';
import ViewCart from './components/Cart/ViewCart';

function MainRoutes() {

  return (
    <Box>  
      <AppBar />
        <Routes >
          <Route path="/" element={ <HomePage /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/registrarse" element={ <Register /> } />
          <Route path="/viewCart" element={<ViewCart/>}/>
        </Routes>  
       <Footer />
    </Box>    
  );
}

export default MainRoutes;