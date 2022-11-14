
import React, {useState} from 'react';
import '../Counter/counter.css'
import { Box } from '@mui/system';
import { Button , Typography } from '@mui/material';
import ButtonUnstyled  from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

const CustomButton = styled(ButtonUnstyled)`
  font-family: comspotM;
  font-weight: bold;
  font-size: 1rem;
  width:2rem;
  height:2rem;
  border-radius:.1rem;
  background-color: #F99716;
  color:#fff;
  transition: all 150ms ease;
  cursor: pointer;
  border:0;
  &:hover {
    background-color: #1e1e1e;
    color:#ffffff;
  }
  `



const Counter = () => {


    const [counter,setCounter] = useState(1)

const handlerSumar = ()=>{
    
        setCounter(counter + 1)
    
    

}

const handlerRestar = ()=>{
   if(counter > 0 ){
    setCounter(counter - 1)
   }
}


  return (
    <Box component="div" sx={{display:'flex' , justifyContent:'space-around',width:'10rem'}}>
        <CustomButton onClick={handlerSumar}>+</CustomButton>
        <Typography component="h5" variant="h5">{counter}</Typography>
        <CustomButton onClick={handlerRestar}>-</CustomButton>
      
    </Box>
  )
}

export default Counter
