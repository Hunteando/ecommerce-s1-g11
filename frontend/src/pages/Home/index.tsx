import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import SecondComponent from './SecondComponent';
import ThirtComponent from './ThirtComponent';
import FourComponent from './FourComponent';
import './homeStyle.css'



const HomePage = () => {


  
  return (
    <Box>
      <Box component="div" sx={{width:'100%', height:'30rem', marginTop:'2rem'}}>
      <div className="slider">
			<ul>
				<li>
       <img src='../../assets/images/banner1.png' alt="img1"/>
        </li>
				<li>
        <img src='../../assets/images/banner2.png' alt="img2"/>
           </li>
				<li>
         <img src='../../assets/images/banner3.png' alt="img3"/>
          </li>
				<li>
          <img src='../../assets/images/banner4.png' alt="img4"/>
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