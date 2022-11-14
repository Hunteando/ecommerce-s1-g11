import React from 'react'
import '../Home/homeStyle.css'
import { Box  } from '@mui/system'
import { Typography } from '@mui/material'



const ThirtComponent = () => {
  return (
    <Box component="div" sx={{width:'100%', height:'40rem', mt:8}} >
        <Typography component="h2" variant="h2" sx={{fontFamily:'comspotM' , ml:'2rem'}}>Mis trabajos</Typography>
        <Box component="div" sx={{width:'100%', height:'50rem', display:'flex',marginTop:'3rem', justifyContent:'space-around'}}>
        <Box component="div" sx={{width:'20rem' , height:'100%'}}>
                <Typography component="h3" variant="h3" sx={{fontFamily:'comspotM', mb:2}}>01</Typography>
                <Typography component="body" variant="body2" sx={{fontFamily:'comspotM',color:'#6d6d6d',mb:2, textAlign:'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, asperiores atque consequatur molestias at natus id dolorem quaerat ut dolorum</Typography>
                <Box sx={{width:'100%'}} component="img" src='../../assets/images/img1.png' alt="img2"/>
                <Typography component="h6" variant="h6" sx={{color:'#F99716', fontFamily:'comspotM'}}>Ver Producto</Typography>
            </Box>
            <Box component="div" sx={{width:'20rem' , height:'100%'}}>
                <Typography component="h3" variant="h3" sx={{fontFamily:'comspotM', mb:2}}>02</Typography>
                <Typography component="body" variant="body2" sx={{fontFamily:'comspotM',color:'#6d6d6d',mb:2, textAlign:'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, asperiores atque consequatur molestias at natus id dolorem quaerat ut dolorum</Typography>
                <Box sx={{width:'100%'}} component="img" src='../../assets/images/img2.png' alt="img2"/>
                <Typography component="h6" variant="h6" sx={{color:'#F99716', fontFamily:'comspotM'}}>Ver Producto</Typography>
            </Box>
            <Box component="div" sx={{width:'20rem' , height:'100%'}}>
                <Typography component="h3" variant="h3" sx={{fontFamily:'comspotM', mb:2}}>03</Typography>
                <Typography component="body" variant="body2" sx={{fontFamily:'comspotM',color:'#6d6d6d',mb:2, textAlign:'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, asperiores atque consequatur molestias at natus id dolorem quaerat ut dolorum</Typography>
                <Box sx={{width:'100%'}} component="img" src='../../assets/images/img3.png' alt="img2"/>
                <Typography component="h6" variant="h6" sx={{color:'#F99716', fontFamily:'comspotM'}}>Ver Producto</Typography>
            </Box>
        </Box>
      
    </Box>
  )
}

export default ThirtComponent
