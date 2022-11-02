import './App.css';
import React from 'react';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
//import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import HomePage from './pages/Home/index';

function MainRoutes() {

  return (
    <Box>  
      <AppBar />
        <Routes >
          <Route path="/" element={ <HomePage /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/registrarse" element={ <Register /> } />
        </Routes>  
      {/* <Footer />  */}
    </Box>    
  );
}

export default MainRoutes;