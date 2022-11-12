import React from 'react'
import '../Home/homeStyle.css'
import pic1 from '../../assets/img/picture1.png'
import ButtonUnstyled  from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';



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

    <div className='contenedorSegundo'>
      <div className='contenedores__flex-imagen'>
        <img className='imagen_contenedor' src={pic1} alt="img1"/>
      </div>
      <div className='contenedores__flex'>
        <h2>Expo Teré en el @ccu.unne</h2>
        <p>¡Gracias a quienes apoyan el trabajo artístico!  
         Si aún no pudieron ir de lunes a viernes de 9 a 12 y de 17 a 20 en Córdoba 794, esquina 9 de julio, permanece la muestra. </p>
         <CustomButton>Ver Más</CustomButton>

         <h3>01</h3>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum officia dolore.sit amet consectetur adipisicing elit
         </p>
         <h3>02</h3>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum officia dolore. sit amet consectetur adipisicing elit
         </p>
      </div>
    </div>
  )
}

export default SecondComponent
