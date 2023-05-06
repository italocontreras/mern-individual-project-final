import './Login.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";

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
          const resp = await axios.post('http://localhost:8000/users/login', {    
            email, password
          })
          // si el login fué exitoso, guardamos la credencial en localStorage
          localStorage.setItem('token', resp.data.token)
          // y redirigimos a la pantalla principal
          console.log("login antes de navigate")
          navigate('/teachers')
        }
        catch(err){
            console.log("catch")
          alert(err.response.data.error)
          return
        }
    
        
    }

    return (
        <div className='login-container'>
            <div className='login-nav-bar'>

      
                <div className='login-word'>
                    Home
                </div>    
                <div className='login-word'>
                    Nosotros
                </div>    
                <div className='login-word'>
                    Cursos
                </div>
                <div className='login-word'>
                    Profesores
                </div>
                <div className='login-word'>
                    Contactanos
                </div>


            </div>
            <div className='login-body'>

                <div className='login-input-out'>
                    <form className='login-input' onSubmit={login}>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Email</label>
                            <input required type="email" className="form-control" id="email" onChange={ev => setEmail(ev.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Password</label>
                            <input required type="password" className="form-control" id="password" onChange={ev => setPassword(ev.target.value)}/>
                        </div>

                        <div className='login-button-out'>
                            <button type="submit" className='login-button'>Login</button>
                        </div>
                    </form>            


                </div>



            </div>
        </div> 
    );
  }
  
  export default Login;