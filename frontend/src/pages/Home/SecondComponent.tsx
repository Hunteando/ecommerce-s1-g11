import React from 'react'
import '../Home/homeStyle.css'
import ButtonUnstyled  from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../Home/homeStyle.css'



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



const SecondComponent = () => {


  

  return (

    <Box component='div' sx={{width:'100%' , display:'flex'}}>
      <Box component='div' sx={{width:'100%' , height:'40rem'}}>
        <Box component="img" sx={{width:'100%', height:'100%'}} src='../../assets/images/pic1.jpg' alt="img1"/>
      </Box>
      <Box component='div' sx={{width:'100%' , height:'100%'}}>
        <Typography component="h2" variant='h3' className='textoCom'>Expo Teré en el @ccu.unne</Typography>
        <Typography component="h6" variant='h6'>¡Gracias a quienes apoyan el trabajo artístico!  
         Si aún no pudieron ir de lunes a viernes de 9 a 12 y de 17 a 20 en Córdoba 794, esquina 9 de julio, permanece la muestra. </Typography>
         <CustomButton>Ver Más</CustomButton>

         <Typography component="h4" variant='h4'>01</Typography>
         <Typography component="h6" variant='h6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum officia dolore.sit amet consectetur adipisicing elit
         </Typography>
         <Typography component="h4" variant='h4'>02</Typography>
         <Typography component="h6" variant='h6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum officia dolore. sit amet consectetur adipisicing elit
         </Typography>
      </Box>
    </Box>
  )
}




export default SecondComponent
