import { Button } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
import './appBar.css'
import ButtonUnstyled  from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import { ShoppingCart } from '@mui/icons-material';



const CustomButton = styled(ButtonUnstyled)`
  font-family: comspotM;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: transparent;
  padding: 6px 24px;
  border-radius: 12px;
  color:#1e1e1e;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid #1e1e1e;
  &:hover {
    background-color: #1e1e1e;
    color:#ffffff;
  }
  `


const AppBar = () => {




  return (
    <div className='header'>
      <div className='contenedorTitulo'>
        <Link to="/" className='decoracionTexto'><h2 className='tituloLogo'>Melinda Muriel</h2></Link>
      </div>
      <nav className='navegacion'>
        <Link to="/viewCart" title='Cart'>
          <ShoppingCart
          fontSize="large"
          sx={{ marginLeft: -10 }}
          
          
        />
        </Link>
        {/* <img src={ShoppingCart} alt="cart"/> */}
        <div className="inputEstilo">
            <img className='imgSearch' src='https://cdn-icons-png.flaticon.com/512/64/64673.png' alt="img"/>
              <input className='input' type="text" placeholder="Buscar"/>
        </div>
      
        <select className="selectorEstilo">
            <option>--Idioma--</option>
            <option>Español (Latinoaméricano)</option>
            <option>English (U.S)</option>
            <option>Frances (Europa)</option>
            <option>Japones (Asia)</option>
        </select>
        <Link to="/login" className='decoracionTexto'>
            <CustomButton>Iniciar sesión</CustomButton>
            </Link>
    
            
       
      </nav>
    </div>
  )
}

export default AppBar
