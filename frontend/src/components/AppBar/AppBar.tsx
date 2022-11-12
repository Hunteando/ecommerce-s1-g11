<<<<<<< HEAD
import { Button } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
import './appBar.css'
import ButtonUnstyled  from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import { ShoppingCart } from '@mui/icons-material';
=======
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
//import MenuIcon from '@mui/icons-material/Menu';
//import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
>>>>>>> 5502920722398a9864f4237585c0d845aa0191df



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
<<<<<<< HEAD
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
=======
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#f0f0f0'}}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ 
              display: { xs: 'none', sm: 'block' }, 
              color: 'black', 
              fontFamily: 'arsenale-white', 
              fontSize: '36px',
              marginLeft: '36px',
              marginTop: '10px'
            }}
          >
            <Link to="/" style={{textDecoration: 'none', color:'black'}}>
              melinda muriel
            </Link>
          </Typography>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
            {/* <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
            
              <Typography
                variant="subtitle2"
                noWrap
                component="div"
                sx={{ 
                  display: { xs: 'none', sm: 'block' }, 
                  color: 'black', 
                  fontFamily: 'cambria', 
                  fontSize: '18px',
                  marginRight: '36px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <Link to="/login" style={{textDecoration: 'none', color:'black'}}>
                  Iniciar Sesion
                </Link>
              </Typography>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
>>>>>>> 5502920722398a9864f4237585c0d845aa0191df
}

export default AppBar
