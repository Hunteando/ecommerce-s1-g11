import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import '../Home/homeStyle.css';
import banner1 from '../../assets/img/banner1.png'
import banner2 from '../../assets/img/banner2.png'
import banner3 from '../../assets/img/banner3.png'
import banner4 from '../../assets/img/banner4.png'
import SecondComponent from './SecondComponent';
import ThirtComponent from './ThirtComponent';
import FourComponent from './FourComponent';

const HomePage = () => {
  return (
    <div className='contenedorHome'>
     
      <div className="slider-frame">
        <ul>
            <li><img src={banner1} alt=""/></li>
            <li><img src={banner2} alt=""/></li>
            <li><img src={banner3} alt=""/></li>
            <li><img src={banner4} alt=""/></li>
        </ul>
    </div>
<SecondComponent/>
<ThirtComponent/>
<FourComponent/>

    </div>
  )
}

export default HomePage