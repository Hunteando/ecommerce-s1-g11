import React from 'react'
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