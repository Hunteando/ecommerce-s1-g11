import Box from '@mui/material/Box';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import ButtonUnstyled  from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import { TextField } from '@mui/material';
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import instagram from '../../assets/images/instagram.png'

const CustomButton = styled(ButtonUnstyled)`
    font-family: comspotM;
    font-weight: bold;
    font-size: 0.875rem;
    background-color: #F99716;
    padding: 6px 24px;
    border-radius: 12px;
    width:130px;
    height:40px;
    color:#ffffff;
    transition: all .3s ease;
    cursor: pointer;
    margin-top:20px;
    margin-bottom:50px;
    border:none;
    &:hover {
      background-color: #1e1e1e;
      color:#ffffff;
    }
    `


const Footer = () => {

    
  

    return (

      <Box sx={{width:'100%',height:'15rem' , display:'flex', justifyContent:'space-between' , backgroundColor:'#f5f5f5', pt:5}}>
       
        <Box sx={{width:'30rem', height:'100%'}}>
          <Typography component="h2" variant="h2" sx={{fontFamily:'arsenale', textAlign:'center'}}>Melinda Muriel</Typography>
          <Typography component="h5" variant="h5" sx={{fontFamily:'comspotExI', textAlign:'center'}}>¡Sígueme en mis redes sociales!</Typography>
             <Box sx={{width:'100', display:'flex', justifyContent:'space-around',marginTop:'2rem'}}>
                <Box style={style.imagenes} component="img" src={facebook} alt="iconImg"/>
                <Box style={style.imagenes} component="img" src={twitter} alt="iconImg"/>
                <Box style={style.imagenes} component="img" src={instagram} alt="iconImg"/>
           </Box>
        </Box>
  
         <Box sx={{width:'40rem', display:'flex',heigth:'100%', justifyContent:'space-around', paddingLeft:'4rem', paddingRight:'4rem'}}>
              <Box component='div' sx={{width:'50%', height:'100%'}}>
                  <Typography component="h4" variant="h4"  sx={{fontFamily:'comspotM'}} >Home</Typography>
                  <Typography component="h6" variant="body1"  sx={{fontFamily:'comspotM', color:'#808080', mt:2}}>Carrito</Typography>
                  <Typography component="h6" variant="body1"  sx={{fontFamily:'comspotM', color:'#808080', mt:2}}>Preguntas frecuentes</Typography>
                  <Typography component="h6" variant="body1" sx={{fontFamily:'comspotM', color:'#808080', mt:2}} >Políticas de Privacidad</Typography>
              </Box>
              <Box sx={{width:'50%'}}>
                  <Typography component="h4" variant="h4"  sx={{fontFamily:'comspotM'}}>Acerca de mí</Typography>
                  <Typography component="h6" variant="body1" sx={{fontFamily:'comspotM', color:'#808080', mt:2}} >Mis trabajos</Typography>
                  <Typography component="h6" variant="body1" sx={{fontFamily:'comspotM', color:'#808080', mt:2}} >Contáctame</Typography>
              </Box>
  
          </Box>
          
          <Box sx={{width:'20rem',display:'flex',flexDirection:'column'}}>
              <Typography component="h5" variant="h5"  sx={{fontFamily:'comspotM', marginBottom:'3rem'}} >Únete a mí comunidad</Typography>
              <TextField id="standard-basic" placeholder='Ingresa tu email' variant="standard" sx={{width:'70%'}}/>
              <CustomButton>Subscríbete</CustomButton>
  
          </Box>
  
  
  
  
        </Box>
      
    )
  }

  const style={
    imagenes:{
        width:'3rem',
        height:'3rem'
    },
    texto:{
        lineHeight:'3.2rem'
    }
  }


export default Footer
