import React, { useState } from 'react';
import { Box , Typography, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import imagenRegistro from '../../assets/images/registro.jpg'




const Register = () => { 

    const [usuario , setUsuario] = useState('')
    const [correo , setCorreo] = useState('')
    const [pass , setPass] = useState('')
    const [repetirPass , setRepetirPass] = useState('')


    const registro = ()=>{

        fetch('https://ecommercehunt-production.up.railway.app/auth/register',{
            method:'POST',
            body:JSON.stringify({
                "username":usuario,
                "email":correo,
                "password":pass,
                "role":"user"
            }),
            headers:{
             'Content-Type':'application/json'                
            }
        }).then( res => res.json()).then( response => {
            if(response){
                Swal.fire(
                    'Bien Hecho!',
                    'Usuario registrado correctamente!',
                    'success'
                  )
                  setTimeout(()=>{
                    window.location.href="/login"
                 },3000)
            }
            console.log(response)
        }).catch( err => console.log(err))
    }





    const handlerRegistrar = (e) => {
         e.preventDefault();
      if([usuario, correo,pass].includes('')){
          Swal.fire({
           icon: 'error',
           title: 'Oops...',
           text: 'Los campos no pueden ir vacios!',
         
      })
 }else if(pass != repetirPass){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las contraseñas no coinciden!',
      })
 }else 
 {
    registro()
 }
    }



  return (
    <Box sx={{maxWidth:'120rem', height:'45rem', pb:'3rem', display:'flex'}}>
    <Box sx={{Width:'55rem', height:'30rem', pb:'3rem', display:'flex',justifyContent:'space-around', margin:' 2rem auto'}} >
    <Box sx={{width:'35rem', height:'20rem' , display:'flex',justifyContent:'center', alignItems:'center'}}>
        <Box component="img" src={imagenRegistro} width={470} height={370} />
    </Box>
    <Box sx={{width:'25rem', height:'40rem', display:'flex',flexDirection:'column',alignItems:'center', boxShadow:'0 0 .5rem #7d7d7d', borderRadius:'.5rem'}}>
        <Box component="img" src={"https://img.freepik.com/vector-gratis/registrarse-ilustracion-concepto_114360-7885.jpg?w=740&t=st=1669431786~exp=1669432386~hmac=c7a542ff21c4700b569c8be35dadaa0b2df71c36e2f44c94a5061999334138b2"} width={240} height={260}/>
        <Typography component="body" variant="body1" style={style.label}>
        Ingrese su usuario
        </Typography>
         <input
         onChange={(e)=>setUsuario(e.target.value)}
         style={style.input}
         type="text" placeholder="Ingrese su nombre de usuario"/>
         <Typography component="body" variant="body1" style={style.label}>
        Ingrese su Correo
        </Typography>
         <input
         onChange={(e)=>setCorreo(e.target.value)}
         style={style.input}
         type="email" placeholder="Ingrese su correo"/>
         <Typography component="body" variant="body1" style={style.labelDos}>           
         Contraseña
          </Typography>
         <input
         onChange={(e)=>setPass(e.target.value)}
         style={style.input}
          type="password" placeholder="Ingrese su contraseña"/>
           <Typography component="body" variant="body1" style={style.label}>           
         Repita Contraseña
          </Typography>
         <input
         onChange={(e)=>setRepetirPass(e.target.value)}
         style={style.input}
          type="password" placeholder="Vuelva a ingresar la contraseña"/>
          
          <Button 
          onClick={handlerRegistrar}
          variant="outlined" sx={{marginTop:'1rem'}}>Registrar</Button>
          
    </Box>
    </Box>
</Box>

   
  )
}
const style={
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
        marginBottom:'.2rem',
        marginLeft:'-12rem',
        
    },
    labelDos:{
        fontFamily:'comspotM', 
        marginBottom:'.2rem',
        marginLeft:'-15rem'
    },
    underline:{
        textDecoration:'none'
    }
}


export default Register