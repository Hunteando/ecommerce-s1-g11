import * as React from 'react';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import AppBar from './components/AppBar/AppBar'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import HomePage from './pages/Home/index';
import Footer from './components/Footer/Footer';
import ViewCart from './components/Cart/ViewCart';
=======
import AppBar from './components/AppBar/AppBar';
import Footer from './components/Footer/Footer';
// import {Products} from './containers/Products';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import HomePage from './pages/Home/index';
import ProductDetail from './components/ProductDetail/ProductDetail';
>>>>>>> 5502920722398a9864f4237585c0d845aa0191df

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
          <Route path="/viewCart" element={<ViewCart/>}/>
        </Routes>  
<<<<<<< HEAD
       <Footer />
=======
       <Footer />  
>>>>>>> 5502920722398a9864f4237585c0d845aa0191df
    </Box>    
  );
}

export default MainRoutes;