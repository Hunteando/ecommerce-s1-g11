
import { Button } from '@mui/material'

import './appBar.css'
import ButtonUnstyled  from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import { ShoppingCart } from '@mui/icons-material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';




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

    <Box sx={{width:'100%' , height:'7rem', display:'flex',justifyContent:'space-around', pt:5 }}>
      <Box sx={{widht:'30rem'}}>
        <Link to="/" className='decoracionTexto'>
        <Typography component='h1' variant='h2' sx={{fontFamily:'arsenale' , color:'#1e1e1e', fontWeight:'700', fontSize:'4rem'}}>Melinda Muriel</Typography>
        </Link>
      </Box>

    <Box sx={{display:'flex', justifyContent:'space-around', gap:2}}>
        <Link to="/viewCart" title='Cart'>
          <ShoppingCart
          fontSize="large"
          sx={{ marginLeft: 12 }}
          />
        </Link>
     
      
        <Box sx={{width:'8rem' , display:'flex' , height:'2rem' , alignItem:'center', backgroundColor:'#f5f5f5'}} style={style.btnBorde}>
              <Box 
              component="img" 
              src='https://cdn-icons-png.flaticon.com/512/64/64673.png' 
              alt="img"
              sx={{width:'1.5rem', height:'1.5rem'}}
              style={style.imagen}
              />
              <input type='text'placeholder='Buscar' style={style.input}/>
        </Box>
        <Box sx={{width:'12rem'}}>
            <select style={style.select}>
               <option>Español (Latinoaméricano)</option>
               <option>English (U.S)</option>
               <option>Portugues (Europa)</option>
            </select>
               
        </Box>
      
        <Box sx={{width:'8rem',heigth:'3rem'}}>
        <Link to="/login" className='decoracionTexto'>
            <CustomButton>Iniciar sesión</CustomButton>
        </Link>
    </Box>
            
       </Box>
      
    </Box>
    
  )

    
}

const style = {
  input:{
    height:'2rem',
    marginLeft:'15px',
    outline:'none',
    backgroundColor:'transparent',
    border:0,
    marginTop:'-5px',
    width:'4rem'
   

   
    
  },
  btnBorde:{
    border:'1px solid #1e1e1e',
    borderRadius:'15px',
    padding:'5px',
    display:'flex',
    
  },
  imagen:{
   
    marginLeft:'10px',
   
  },
  select:{
    width:'12rem',
    height:'2.5rem',
    fontFamily:'comspotM',
    border:'0'
  }
}

export default AppBar;
