import React from 'react'
<<<<<<< HEAD
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
=======
import './Footer.css'
import Typography from '@mui/material/Typography';

function Footer(): JSX.Element {
  return (
    <footer className="site-footer">
      <div className="column">
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ 
            display: { xs: 'none', sm: 'block' }, 
            color: 'black', 
            fontFamily: 'arsenale-white', 
            fontSize: '36px',
            marginLeft: '50px',
          }}
        >
          melinda muriel
        </Typography>
      </div>
      
      <div className="column">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Home</h6>
            <p>
              Carrito de compras
            </p>
            <p>
              Preguntas Frecuentes
            </p>
            <p>
              Políticas de privacidad
            </p>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Sobre mí</h6>
            <p>
              Mis trabajos
            </p>
            <p>
              Contacto
            </p>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="#">Scanfcode</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div> */}
    </footer>
  )
}

export default Footer
>>>>>>> 5502920722398a9864f4237585c0d845aa0191df
