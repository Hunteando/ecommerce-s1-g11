import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import SecondComponent from './SecondComponent';
import ThirtComponent from './ThirtComponent';
import FourComponent from './FourComponent';
import img1 from '../../assets/images/banner1.png'
import img2 from '../../assets/images/banner2.png'
import img3 from '../../assets/images/banner3.png'
import img4 from '../../assets/images/banner4.png'
import './homeStyle.css'



const HomePage = () => {


  
  return (
    <Box>
      <Box component="div" sx={{width:'100%', height:'30rem', marginTop:'2rem'}}>
      <div className="slider">
			<ul>
				<li>
       <img src={img1} alt="img1"/>
        </li>
				<li>
        <img src={img2} alt="img2"/>
           </li>
				<li>
         <img src={img3} alt="img3"/>
          </li>
				<li>
          <img src={img4} alt="img4"/>
         </li>
			</ul>
		</div>

      
      </Box>
      <SecondComponent/>
      <ThirtComponent/>
      <FourComponent/>
    </Box>
  )
}

export default HomePage