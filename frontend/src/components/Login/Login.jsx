import React , { useState } from 'react'
import { Box , Button, Typography } from '@mui/material'
import login from '../../assets/images/login.jpg'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


const Login = () => {

   
    const [correo , setCorreo] = useState('')
    const [pass , setPass] = useState('')
  


    const registro = ()=>{

        fetch('https://ecommercehunt-production.up.railway.app/auth/login',{
            method:'POST',
            body:JSON.stringify({
               
                "email":correo,
                "password":pass,
              
            }),
            headers:{
             'Content-Type':'application/json'                
            }
        }).then( res => res.json()).then( response => {
            if(response.success){
                Swal.fire(
                    'Bien Hecho!',
                    'Logueado correctamente!',
                    'success'
                  )
              setTimeout(()=>{
                 window.location.href="/Productos"
              },3000)
               
              
                    
                
            }else 
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'El usuario no existe!',
                  })
            }
             console.log(response)
        }).catch( err => console.log(err))
    }





    const handlerLogin = (e) => {

         e.preventDefault();

      if([ correo,pass].includes('')){
          Swal.fire({
           icon: 'error',
           title: 'Oops...',
           text: 'Los campos no pueden ir vacios!',
         
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
            <Box component="img" src={'https://scontent.fmdz9-1.fna.fbcdn.net/v/t39.30808-6/310437216_413859047592395_3560829447993387725_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHpDhViUjz4Shq9xFGbRFcw-d1fLbzykJb53V8tvPKQlvteUnFPfBJkfqpRrTGxv90&_nc_ohc=wxqvoBD6UioAX-mGNyt&_nc_ht=scontent.fmdz9-1.fna&oh=00_AfDRKDVDo39P3EGWSMySazlKoueFaxCSL9FMU50NuqHxdQ&oe=6385679D'} width={470} height={370} />
        </Box>
        <Box sx={{width:'20rem', height:'38rem', display:'flex',flexDirection:'column',alignItems:'center', boxShadow:'0 0 .5rem #7d7d7d', borderRadius:'.5rem'}}>
            <Box component="img" src={login} width={240} height={260}/>
            <Typography component="body" variant="body1" style={style.labelDos}>
            Correo
            </Typography>
             <input
             onChange={(e)=> setCorreo(e.target.value)}
             style={style.input}
             type="email" placeholder="Ingrese su nombre"/>
             <Typography component="body" variant="body1" style={style.label}>           
             Contraseña
              </Typography>
             <input
             onChange={(e)=> setPass(e.target.value)}
             style={style.input}
              type="password" placeholder="Ingrese su nombre"/>
              <Typography component="body" variant="body1" sx={{fontFamily:'comspotExI'}}>           
               <Link to="/register" style={style.underline}>No tienes cuentas , Registrate aquí!</Link>
              </Typography>
              
              <Button 
              onClick={handlerLogin}
              variant="outlined" sx={{marginTop:'2rem'}}>Login</Button>
              <Typography component="body" variant="body2" sx={{fontFamily:'comspotExI', marginTop:'1rem'}}>           
               ¿Olvidastes tu contraseña?
              </Typography>
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
        marginLeft:'-11rem',
        
    },
    labelDos:{
        fontFamily:'comspotM', 
        marginBottom:'.2rem',
        marginLeft:'-13rem'
    },
    underline:{
        textDecoration:'none'
    }
}

export default Login