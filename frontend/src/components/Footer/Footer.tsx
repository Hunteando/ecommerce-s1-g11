import React from 'react'
import '../Footer/footer.css'
import facebook from '../../assets/img/facebook.png'
import twitter from '../../assets/img/twitter.png'
import instagram from '../../assets/img/instagram.png'
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




const Footer = () => {




  return (
    <div className='contenedorFooter'>
     
      <div className='card_redes'>
        <h2>Melinda Muriel</h2>
        <p>¡Sígueme en mis redes sociales!</p>
           <div className='card_iconos'>
              <img src={facebook} alt="iconImg"/>
              <img src={twitter} alt="iconImg"/>
              <img src={instagram} alt="iconImg"/>
         </div>
      </div>

       <div className='card_info'>
            <div className='card_info-home'>
                <h2>Home</h2>
                <p>Carrito</p>
                <p>Preguntas frecuentes</p>
                <p>Políticas de Privacidad</p>
            </div>
            <div className='card_info-home'>
                <h2>Acerca de mí</h2>
                <p>Mis trabajos</p>
                <p>Contáctame</p>
            </div>

        </div>
        
        <div className='card_newsletter'>
            <h2>Únete a mí comunidad</h2>
            <input type="email" placeholder='Tu email'/>
            <CustomButton>Subscríbete</CustomButton>

        </div>




      </div>
    
  )
}

export default Footer
