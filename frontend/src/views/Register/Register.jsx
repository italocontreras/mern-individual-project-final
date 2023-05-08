import './Register.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'


function Register() {

    const navigate = useNavigate() 

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [lastName, setlastName] = useState('')    
    const [pass_confirm, setpass_confirm] = useState('')

    async function register (ev) {
        ev.preventDefault()
        try {
          //const resp = await axios.post('http://localhost:8000/api/auth/register', {
          console.log("register")
          const resp = await axios.post(window.$api+'/users/create', {  
            email, name,lastName,password,pass_confirm
          })
          const resp2 = await axios.post(window.$api+'/users/login', {  
             email, password
          })
          localStorage.setItem('token', resp2.data.token)
          
          navigate('/teachers')
          alert('Welcome') 
        }
        catch(err){
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
        <div className='register-container'>
            
            <div className='register-nav-bar'>
                <div className='register-left-nav-bar'>
                    <div className='register-word'>
                        <span onClick ={goHome}>Inicio</span>
                        
                    </div>    
                    <div className='register-word'>
                        Nosotros
                    </div>    
                    <div className='register-word'>
                        Contáctanos
                    </div>

                </div>

                <div className='register-right-nav-bar'>
                    <div className='register-word'>
                        ¡Quiero enseñar!
                    </div>
                </div>

            </div>


            <div className='register-body'>

                <div className='out-register-input'>
                    <form className='register-input' onSubmit={register}>
                    
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Nombre</label>
                            <input className="form-control" id="exampleFormControlInput1" required onChange={ev => setName(ev.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Apellido</label>
                            <input className="form-control" id="exampleFormControlInput2" required onChange={ev => setlastName(ev.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Correo</label>
                            <input type="email" className="form-control" id="exampleFormControlInput3" required onChange={ev => setEmail(ev.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Contraseña</label>
                            <input type="password" className="form-control" id="exampleFormControlInput4" required onChange={ev => setPassword(ev.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Confirmar Contraseña</label>
                            <input type="password" className="form-control" id="exampleFormControlInput5" required onChange={ev => setpass_confirm(ev.target.value)}/>
                        </div>


                        <div className='register-button-out'>
                            <button type="submit" className='register-button'>Registrarse</button>
                        </div>
                    </form>

                </div>

            </div>


        </div> 
    );
  }
  
  export default Register;