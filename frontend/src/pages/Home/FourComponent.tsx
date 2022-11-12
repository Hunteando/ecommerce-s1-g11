import React from 'react';
import '../Home/homeStyle.css'
import ButtonUnstyled  from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import sobreMi from '../../assets/img/Sobremi.png'



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
    <div className="contenedor_sobremi">
      <h2>Sobre mi obra</h2>
      <p>Un recorrido que trae las formas de lo onírico e inicia por los duelos y el dejar ir.</p>
      <CustomButton>Acerca de mi</CustomButton>
      <img src={sobreMi} alt="sobre mi obra" />
    </div>
  )
}

export default FourComponent
