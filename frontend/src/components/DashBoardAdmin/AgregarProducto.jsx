import React, { useEffect, useState } from 'react'
import { Box, Typography , Button } from '@mui/material'
import { Form, Link } from 'react-router-dom'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'




const AgregarProducto = () => {

 
    const [name,setName]= useState('')
    const [description,setDescription]= useState('')
    const [price,setPrice]= useState('')
    const [stock,setStock]= useState('')
    const [colors,setColors]= useState('')
    
const enviarData = ()=>{
    fetch('https://ecommercehunt-production.up.railway.app/dashboard/admin',{
        method:"POST",
        body:JSON.stringify({
      "code": "bolso001",
      "name": name,
      "description":description,
      "price": price,
      "stock": stock,
      "colors": colors,
      "weight": "1",
      "freeshipping": 1,
      "averageRating": 5,
      "numOfReviews": 0,
      "createdAt": "121212",
      "updatedAt": "2022-11-23T19:54:34.000Z",
      "Images": [
        {
          "id": 5,
          "url": "https://m.media-amazon.com/images/I/81nvGMck+3L._AC_UY1000_.jpg",
          "createdAt": "2022-11-23T19:57:07.000Z",
          "updatedAt": "2022-11-23T19:57:07.000Z",
          "ProductId": 5
        }
      ]
        }),
        headers:{
            'Content-Type':'application/json'                
           }

       
    }).then(res => res.json()).then(data => {
        if(data.success){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Producto agregado!',
                showConfirmButton: false,
                timer: 1500
              })
              setTimeout(()=>{
                window.location.reload();
              },2000)
        }
        }).catch(err => console.log(err))
}
   


const handlerEnviar= (e)=>{
e.preventDefault();
Swal.fire({
    title: 'Seguro quiere guardar los cambios?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Guardar',
    denyButtonText: `No guardar`,
  }).then((result) => {
  
    if (result.isConfirmed) {
        enviarData()
      

    } else if (result.isDenied) {
      Swal.fire('Cambion no realizado', '', 'info')
    }
  })




}
    
   



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
               <Link to="/dashboard/admin" style={style.underline}><Button sx={{marginTop:'1rem', width:'70%'}} variant="outlined">Lista productos</Button></Link>
               <Button sx={{marginTop:'1rem', width:'70%'}} variant="outlined">Ver usuarios</Button>

            </Box>
            <Box component="div" sx={{width:'100%' , height:'100%', boxShadow:' 0 0 .3rem #eaeaea', padding:'1rem'}}>
            <Typography component="h3" variant="h3" sx={{fontFamily:'comspotM'}}>
                Agregar productos
               </Typography>
               <form style={style.form}>
                <label style={style.label}>Nombre producto</label>
                 <input style={style.input}
                 onChange={(e)=> setName(e.target.value)}
                 type="text"
                 placeholder='Ingrese nombre'/>
                 <label style={style.label}>Ingrese Descripción</label>
                 <input style={style.input}
                 onChange={(e)=> setDescription(e.target.value)}
                 type="text"
                 placeholder='Ingrese descripción'/>
                 <label style={style.label}>Ingrese Precio</label>
                 <input style={style.input}
                 onChange={(e)=> setPrice(e.target.value)}
                 type="number"
                 placeholder='Ingrese precio'/>
                 <label style={style.label}>Ingrese Stock</label>
                 <input style={style.input}
                 onChange={(e)=> setStock(e.target.value)}
                 type="number"
                 placeholder='Ingrese stock'/>
                 <label style={style.label}>Ingrese Color</label>
                 <input style={style.input}
                 onChange={(e)=> setColors(e.target.value)}
                 type="text"
                 placeholder='Ingrese tipo color'/>
                 <Button
                 onClick={handlerEnviar}
                 variant="outlined">Agregar</Button>
               </form>
              

                    
                
            </Box>

        </Box>

        
    </Box>
    
  )
}
const style = {
   
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
    },
    form:{
        width:'80%',
        display:'flex',
        flexDirection:'column',
        margin:'3rem auto'

    },
    input:{
        border:'none',
        boxShadow:' 0 0 .3rem #7d7d7d',
        width:'80%',
        height:'2rem',
        borderRadius:'.4rem',
        marginBottom:'1rem',
        paddingLeft:'1rem'
    },
    label:{
       fontFamily:'comspotM',
       fontSize:'1rem',
       marginBottom:'.2rem',
       color:"#1e1e1e"
    }
   
}

export default AgregarProducto;