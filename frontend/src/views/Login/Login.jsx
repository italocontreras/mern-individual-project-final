import './Login.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";

import { Link } from 'react-router-dom';


function Login() {

    const navigate = useNavigate() 

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function login (ev) {
        ev.preventDefault()
        try {
          console.log("login jsx")
          //   const resp = await axios.post(window.$api + '/auth/login', {
          //const resp = await axios.post('http://localhost:8000/api/auth/login', {  
          const resp = await axios.post(window.$api+'/users/login', {    
            email, password
          })
          // si el login fué exitoso, guardamos la credencial en localStorage
          localStorage.setItem('token', resp.data.token)
          // y redirigimos a la pantalla principal
          console.log("login antes de navigate")
          navigate('/teachers')
          alert('Welcome')
        }
        catch(err){
            console.log("catch")
          alert(err.response.data.error)
          return
        }
    
        
    }

    async function goHome(ev) {
        ev.preventDefault();
    

        try {
            // alert('!')
            navigate('/')

        }
        catch(err) {

        }
    }

    return (
        <div className='login-container'>

            <div className='login-nav-bar'>
                <div className='login-left-nav-bar'>
                    <div className='login-word'>
                        <span onClick ={goHome}>Inicio</span>
                        
                    </div>    
                    <div className='login-word'>
                        Nosotros
                    </div>    
                    <div className='login-word'>
                        Contáctanos
                    </div>

                </div>

                <div className='login-right-nav-bar'>
                    <div className='login-word'>
                        ¡Quiero enseñar!
                    </div>
                </div>

            </div>


            <div className='login-body'>

                <div className='out-form-login'>

                    <form className='form-login' onSubmit={login}>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Correo</label>
                            <input required type="email" className="form-control" id="email" onChange={ev => setEmail(ev.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Contraseña</label>
                            <input required type="password" className="form-control" id="password" onChange={ev => setPassword(ev.target.value)}/>
                        </div>

                        <div className='out-login-button'>
                            <button type="submit" className='login-button'>Ingresar</button>
                        </div>

                    </form>            

                    <div className='mensaje'>
                        ¿Aún no tienes cuenta?
                    </div>

                    <div className='link'>
                        
                        <Link to="/register">Registrarse</Link>
                        
                        
                    </div>

                </div>

            </div>

        </div> 
    );
  }
  
  export default Login;