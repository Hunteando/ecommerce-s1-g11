import * as React from 'react';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../src/pages/Home';
import ViewCart from './components/Cart/ViewCart';
import ProductDetail from './components/ProductDetail/ProductDetail';
import MainProductItem from './components/ProductItem/MainProductItem/MainProductItem';
import Products from './containers/Products';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import DashBoardAdmin from './components/DashBoardAdmin/DashBoardAdmin';
import AgregarProducto from './components/DashBoardAdmin/AgregarProducto';

function MainRoutes() {

  return (
    <Box>  
     
        <Routes >
          <Route path="/Productos" element={ <Products /> } />
          <Route path="/MainProduct" element={ <MainProductItem /> } />
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={ <HomePage /> } />
          <Route path='/viewCart' element={<ViewCart/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path='/dashboard/admin' element={<DashBoardAdmin/>}/>
          <Route path="/dashboard/admin/agregarProducto" element={<AgregarProducto/>}/>
          <Route path='/DetalleProducto/elementos/:id' element={<ProductDetail/>}/>
         
        </Routes>  
      
    </Box>    
  );
}

export default MainRoutes;