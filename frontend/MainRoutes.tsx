
import * as React from 'react';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import HomePage from './src/pages/Home/index';
import ViewCart from './src/components/Cart/ViewCart';
import ProductDetail from './src/components/ProductDetail/ProductDetail';
import MainProductItem from './src/components/ProductItem/MainProductItem/MainProductItem';
import Products from './src/containers/Products';
import Login from './src/components/Login/Login';
import Register from './src/components/Register/Register';
import DashBoardAdmin from './src/components/DashBoardAdmin/DashBoardAdmin';
import AgregarProducto from './src/components/DashBoardAdmin/AgregarProducto';
import EditarProducto from './src/components/DashBoardAdmin/EditarProducto';

function MainRoutes() {

  return (
    <Box>  
     
        <Routes >
          <Route path="/lista/productos" element={ <Products/> } />
          <Route path="/mainProduct" element={ <MainProductItem /> } />
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={ <HomePage /> } />
          <Route path='/viewCart' element={<ViewCart/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path='/dashboard/admin' element={<DashBoardAdmin/>}/>
          <Route path="/dashboard/admin/agregarProducto" element={<AgregarProducto/>}/>
          <Route path="/dashboard/admin/editarProducto/:id" element={<EditarProducto/>}/>
          <Route path='/DetalleProducto/elementos/:id' element={<ProductDetail/>}/>
         
        </Routes>  
      
    </Box>    
  );
}

export default MainRoutes;