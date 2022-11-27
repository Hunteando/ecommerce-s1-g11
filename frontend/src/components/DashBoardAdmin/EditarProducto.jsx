import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography , Button } from '@mui/material'
import { Form, Link } from 'react-router-dom'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'





const EditarProducto = () => {

    const {id} = useParams();

    
   
    const [productoFiltrado , setProductoFiltrado] = useState({})
    const [name,setName]= useState('')
    const [description,setDescription]= useState('')
    const [price,setPrice]= useState('')
    const [stock,setStock]= useState('')
    const [colors,setColors]= useState('')
   
    
  
    useEffect(()=>{
        fetch('https://ecommercehunt-production.up.railway.app/dashboard/admin',{
            method:"GET",
        
        }).then(res => res.json()).then(data => {
           
         
           const newArray = data.products.find( item => item.id == id)
    setProductoFiltrado(newArray)
 
  

        }).catch( err => console.log(err))
    },[])




 

const handlerEnviar= (e)=>{
e.preventDefault();

fetch('https://ecommercehunt-production.up.railway.app/dashboard/admin',{
    method:"POST",
    body:JSON.stringify(
        {
            "id": id,
            "code": "12b",
            "name": name,
            "description": description,
            "price": price,
            "stock": stock,
            "colors": colors,
            "weight": "1",
            "freeshipping": 1,
            "averageRating": 5,
            "numOfReviews": 0,
            "createdAt": "2022-11-23T19:54:34.000Z",
            "updatedAt": "2022-11-23T19:54:34.000Z",
            "Images": [
              {
                "id": id,
                "url": "https://elestimulo.com/wp-content/uploads/2015/07/TePorcelana_BMS.jpg",
                "createdAt": "2022-11-23T19:54:34.000Z",
                "updatedAt": "2022-11-23T19:54:34.000Z",
                "ProductId": id
              }
            ]
          }
          
    ),
    headers:{
        'Content-Type':'application/json'                
       }
}).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err))


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
                Editar Productos
               </Typography>
               <form style={style.form}>
                <label style={style.label}>Nombre producto</label>
                 <input style={style.input}
                 defaultValue={productoFiltrado.name}
                 onChange={(e)=> setName(e.target.value)}
                 type="text"
                 />
                 <label style={style.label}>Ingrese Descripción</label>
                 <input style={style.input}
                 defaultValue={productoFiltrado.description}
                 onChange={(e)=> setDescription(e.target.value)}
                 type="text"
                />
                 <label style={style.label}>Ingrese Precio</label>
                 <input style={style.input}
                 defaultValue={productoFiltrado.price}
                 onChange={(e)=> setPrice(e.target.value)}
                 type="number"
                />
                 <label style={style.label}>Ingrese Stock</label>
                 <input style={style.input}
                 defaultValue={productoFiltrado.stock}
                 onChange={(e)=> setStock(e.target.value)}
                 type="number"
                 />
                 <label style={style.label}>Ingrese Color</label>
                 <input style={style.input}
                 defaultValue={productoFiltrado.colors}
                 onChange={(e)=> setColors(e.target.value)}
                 type="text"
                 />
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

export default EditarProducto;