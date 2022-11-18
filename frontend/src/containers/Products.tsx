import  React , { useState } from 'react'
import { Box } from '@mui/system'
import { Button, Typography } from '@mui/material'
import  PinturasEcommerce  from '../mock/PinturasEcommerce';
import { Link } from 'react-router-dom'




const Products = () => {

 
  const [productos , setProductos ] = useState(PinturasEcommerce);

 

  return (
    <Box sx={{marginTop:'3rem'}}>
      <Typography component="h2" variant="h2" sx={{fontFamily:'comspotM' , textAlign:'center', color:'"1e1e1e'}}>
        Listado de Productos
      </Typography>

      <Box component="div" sx={{ width:'100%' , height:'auto', display:'flex' , pb:2, marginTop:'4rem' ,justifyContent:'space-around', flexWrap:'wrap'} }>
   
      {productos.map(item => {
        return(
          <Box key={item.id} sx={{ width:'15rem' , height:'30rem'} } >
            <Box component="img" src={item.image} alt="img" sx={{width:'100%', height:'10rem'}}/>
            <Typography component="h2" variant="h2" sx={{fontSize:'2rem', fontFamily:'comspotM'}}>
              {item.title}
            </Typography>
            <Typography component="h4" variant="h4" sx={{fontSize:'1.5rem', fontFamily:'comspotExI'}} >
              {item.description}
            </Typography>
            <Typography component="h3" variant="h3" sx={{fontSize:'2.5rem', fontFamily:'comspotM'}} >
             $ {item.price}
            </Typography>
            <Link to={`/DetalleProducto/elementos/${item.id}`} ><Button>Más detalle</Button></Link>
          </Box>
          
        )
      })}

      </Box>
    </Box>
  )
}

export default Products