import  React , { useState , useEffect } from 'react';
import { Paper, Typography, Box } from '@mui/material';
import  PinturasEcommerce  from '../../mock/PinturasEcommerce';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import ButtonUnstyled  from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';



const CustomButton = styled(ButtonUnstyled)`
  font-family: comspotM;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: transparent;
  padding: 6px 24px;
  border-radius: 12px;
  color:#1e1e1e;
  transition: all 150ms ease;
  cursor: pointer;
  margin-left:10.5rem;
  margin-top:3rem;
  border: 1px solid #1e1e1e;
  &:hover {
    background-color: #1e1e1e;
    color:#ffffff;
  }
  `




const ProductDetail = () => {


  const [pinturas,setPinturas] = useState({})
  
    const { id }= useParams();

  useEffect(()=>{

 const MostrarItem = PinturasEcommerce.find( item => item.id == id);

setPinturas(MostrarItem)




  },[])  

 


  return (
    <Box sx={{width:'60rem' , height:'30rem', pb:4}} style={style.estiloContenedor}>
      

      <Box sx={{width:'60rem' , height:'auto', pb:2 , mt:3 , display:'flex' , justifyContent:'space-around'}}>
        <Box sx={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Box sx={{width:'20rem', height:'20rem'}} component="img" src={pinturas.image} alt="img"/>
        </Box>
        <Box sx={{width:'100%', height:'100%'}}>
          <Typography component="h3" variant="h3" sx={{textAlign:'center', fontSize:'2.5rem', color:'#1e1e1e', fontFamily:'comspotM'}}>
            {pinturas.title}
          </Typography>
          <Typography component="h3" variant="h3" sx={{textAlign:'center', fontSize:'1.8rem', color:'#1e1e1e', fontFamily:'comspotExI', mt:'2rem'}} >
            {pinturas.description}
          </Typography>
          <Typography component="h3" variant="h3" sx={{textAlign:'center', fontSize:'2rem', color:'#1e1e1e', fontFamily:'comspotM', mt:'2rem'}} >
           $ {pinturas.price}
          </Typography>
          <CustomButton>Añadir al carrito</CustomButton>
        </Box>
      
      
      </Box>

    </Box>
  );
};

const style = {
  estiloContenedor:{
    margin :'6rem auto'
  }
}

export default ProductDetail;
