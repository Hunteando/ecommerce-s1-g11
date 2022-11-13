import React from 'react';
import '../Home/homeStyle.css'
import ButtonUnstyled  from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import sobreMi from '../../assets/img/Sobremi.png'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



const CustomButton = styled(ButtonUnstyled)`
  font-family: comspotM;
  font-size: 12px;
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
  margin-left:600px;
  text-transform:uppercase;
  border:none;
  &:hover {
    background-color: #1e1e1e;
    color:#ffffff;
  }
  `






const FourComponent = () => {


  return (
    <Box className="contenedor_sobremi">
      <Typography component='h2' variant='h3'>Sobre mi obra</Typography>
      <Typography component='p' variant='h4'>Un recorrido que trae las formas de lo onírico e inicia por los duelos y el dejar ir.</Typography>
      <CustomButton>Acerca de mi</CustomButton>

      <Box component="img" src={sobreMi} alt="sobre mi obra"/>
    </Box>
  )
}

export default FourComponent
