import React from 'react'
import '../Home/homeStyle.css'
import img1 from '../../assets/img/img1.png'
import img2 from '../../assets/img/img2.png'
import img3 from '../../assets/img/img3.png'
import '../Home/homeStyle.css'



const ThirtComponent = () => {
  return (
    <div className='contenedor_main_card'>
        <h2>Mis trabajos</h2>
        <div className='contenedor_card'>
            <div className='card'>
                <h3>01</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, asperiores atque consequatur molestias at natus id dolorem quaerat ut dolorum</p>
                <img src='../../assets/images/img1.png' alt="img1"/>
                <h4>Ver Producto</h4>
            </div>
            <div className='card'>
                <h3>02</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, asperiores atque consequatur molestias at natus id dolorem quaerat ut dolorum</p>
                <img src='../../assets/images/img2.png' alt="img2"/>
                <h4>Ver Producto</h4>
            </div>
            <div className='card'>
                <h3>03</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, asperiores atque consequatur molestias at natus id dolorem quaerat ut dolorum magni</p>
                <img src='../../assets/images/img3.png' alt="img3"/>
                <h4>Ver Producto</h4>
            </div>
        </div>
      
    </div>
  )
}

export default ThirtComponent
