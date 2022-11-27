import React, { useEffect, useState } from 'react'
import { Box, Typography , Button } from '@mui/material'
import { Link } from 'react-router-dom'




const DashBoardAdmin = () => {

 // description , name , price , stock
    const [ productos, setProductos] = useState([])

   

useEffect(()=>{

    fetch('https://ecommercehunt-production.up.railway.app/dashboard/admin',{
        method:"GET"
       
    }).then(res => res.json()).then(data => {
        console.log(data.products)
        setProductos(data.products)}).catch(err => console.log(err))
   
},[])


  return (
    
    <Box component="div" sx={{maxWidth:'120rem', height:'auto' , paddingBottom:'3rem'}}>
        <Box component="div" sx={{width:"60rem" , height:'100%' , display:'flex', justifyContent:'space-around', margin:'2rem auto'}}>
            <Box component="div" sx={{width:'70%' , height:'100%', boxShadow:' 0 0 .3rem #eaeaea', display:'flex', flexDirection:'column', padding:'2rem' }}>
               <Typography component="h3" variant="h3" sx={{fontFamily:'comspotM'}}>
                DashBoard
               </Typography>
               <Typography component="h4" variant="h4" sx={{fontFamily:'comspotExI'}}>
                Administrador
               </Typography>
               <Link to="/dashboard/admin/agregarProducto" style={style.underline}><Button sx={{marginTop:'1rem', width:'70%'}} variant="outlined">Agregar Producto</Button></Link>
               <Button sx={{marginTop:'1rem', width:'70%'}} variant="outlined">Ver usuarios</Button>

            </Box>
            <Box component="div" sx={{width:'100%' , height:'100%', boxShadow:' 0 0 .3rem #eaeaea', padding:'1rem'}}>
            <Typography component="h3" variant="h3" sx={{fontFamily:'comspotM'}}>
                Lista de Productos
               </Typography>
              

                    <table style={style.table}>
                        <thead style={style.thead}>
                            <tr style={style.thead}>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Precio</th>
                                <th>Stock</th>
                            </tr>
                                </thead>
                            <tbody style={style.tbody} >
                            {productos.map(item => {
                                return(
                                    <tr key={item.id}>
                                        <td style={style.td}>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td>{item.price}</td>
                                        <td>{item.stock}</td>
                                        <td><Link to={`/editar/productos/${item.id}`}><Button >Editar</Button></Link></td>
                                    </tr>
                                )
                            })}

                            </tbody>
                    
                    </table>
                
            </Box>

        </Box>

        
    </Box>
    
  )
}
const style={
   
    thead:{
        border:'.1rem solid #7d7d7d',
        fontFamily:'comspotM'
    },
    table:{
        width:'100%',
        textAlign:'center',
        marginTop:'2rem'
        
    },
    tbody :{
        backgroundColor:'#f7f7f7',
        fontFamily:'comspotExI'
    },
    underline:{
        textDecoration:'none'
    }
   
}

export default DashBoardAdmin