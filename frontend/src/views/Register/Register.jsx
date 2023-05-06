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
          const resp = await axios.post('http://localhost:8000/users/create', {  
            email, name,lastName,password,pass_confirm
          })
          const resp2 = await axios.post('http://localhost:8000/users/login', {  
             email, password
          })
          localStorage.setItem('token', resp2.data.token)
          
          navigate('/') 
        }
        catch(err){
          alert(err.response.data.error)
          return
        }
    
        
      }
    

    return (
        <div className='register'>
            <div className='register-nav-bar'>

                <div className='register-word'>
                    Home
                </div>    
                <div className='register-word'>
                    Nosotros
                </div>    
                <div className='register-word'>
                    Cursos
                </div>
                <div className='register-word'>
                    Profesores
                </div>
                <div className='register-word'>
                    Contactanos
                </div>

            </div>
            <div className='register-body'>

                <div className='register-input-out'>
                    <form className='register-input' onSubmit={register}>
                    
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">First Name</label>
                            <input className="form-control" id="exampleFormControlInput1" required onChange={ev => setName(ev.target.value)}/>
                        </div>
            
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Last Name</label>
                            <input className="form-control" id="exampleFormControlInput2" required onChange={ev => setlastName(ev.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Email</label>
                            <input type="email" className="form-control" id="exampleFormControlInput3" required onChange={ev => setEmail(ev.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Password</label>
                            <input type="password" className="form-control" id="exampleFormControlInput4" required onChange={ev => setPassword(ev.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Confirm Password</label>
                            <input type="password" className="form-control" id="exampleFormControlInput5" required onChange={ev => setpass_confirm(ev.target.value)}/>
                        </div>


                        <div className='register-button-out'>
                            <button type="submit" className='register-button'>Register</button>
                        </div>
                    </form>

                </div>

            </div>
        </div> 
    );
  }
  
  export default Register;