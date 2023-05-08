import './RegisterTeacher.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'

import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';



function RegisterTeacher() {

    const location = useLocation();
    
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [lastName, setlastName] = useState('')    
    const [pass_confirm, setpass_confirm] = useState('')
    const [imageurl, setImageURL] = useState('')
    const [cellphone, setCellphone] = useState('')
    const [course, setCourse] = useState('Calculo')
    const [modality, setModality] = useState('Presencial')
    const [response, setResponse] = useState('Lenta')
    const [cost, setCost] = useState('')
    // const [interestedCourses, setInterestedCourses] = useState('')

    // const {type} = location.state;
    // const type = location.state;
    // const type = location.state?.type;
    // const { type } = location.state || {};
    const type = new URLSearchParams(location.search).get('type');

    console.log("location",location)
    console.log("type in register:",type)

    async function register (ev) {
        ev.preventDefault()
        try {
          
          console.log("ev.target",ev.target)
            //const resp = await axios.post('http://localhost:8000/api/auth/register', {
          console.log("register teacher")

          console.log("type in register teacher:",type)

        //   const resp = await axios.post(window.$api+'/users/create', {  
        //     email, name,lastName,password,pass_confirm,type
        //   })
  
          const resp2 = await axios.post(window.$api+'/teachersDetail/insert', {  
            email, name,lastName,password,pass_confirm,type,imageurl,cellphone,course,modality,response,cost
          })
  
          //

        //   const resp3 = await axios.post(window.$api+'/users/login', {  
        //      email, password,type
        //   })
        //   localStorage.setItem('token', resp3.data.token)
          
        //   navigate('/teachers')
        navigate('/')
        //   alert('Ok teacher') 
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
                        {/* ¡Quiero enseñar! */}
                    
                        <Link to={{ pathname: '/register/teacher', search: '?type=teacher' }}>¡Quiero enseñar!</Link>

                    </div>

                </div>

            </div>

            <div className='register-teacher-body'>
                <div className='out-register-teacher-input'>
                    <form className='register-teacher-input' onSubmit={register}>
                        <div className='row'>
                            <div className='col'>
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

                                {/* 
                                <div className='register-button-out'>
                                    <button type="submit" className='register-button'>Registrarse</button>
                                </div> */}

                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Imagen</label>
                                    <input className="form-control" id="exampleFormControlInput6" required onChange={ev => setImageURL(ev.target.value)}/>
                                </div>
                            </div>

                            <div className='col'>

                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Celular</label>
                                    <input className="form-control" id="exampleFormControlInput7" required onChange={ev => setCellphone(ev.target.value)}/>
                                </div>

                                {/* <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">¿Que curso deseas enseñar?</label>
                                    <input className="form-control" id="exampleFormControlInput8" required onChange={ev => setCourse(ev.target.value)}/>
                                </div> */}

                                <div className="form-group">
                                    <label for="select-course">¿Que curso deseas enseñar?</label>
                                    <select id="select-course" className="form-control" onClick={ev => setCourse(ev.target.value)} required>
                                        <option value="Calculo">Calculo</option>
                                        <option value="Fisica">Fisica</option>
                                        <option value="Programacion">Programacion</option>
                                    </select>                            
                                </div>    


                                <div className="form-group">
                                    <label for="select-modalidad">¿En que modalidad?</label>
                                    <select id="select-modalidad" className="form-control" onClick={ev => setModality(ev.target.value)} required>
                                        <option value="Presencial">Presencial</option>
                                        <option value="Remoto">Remoto</option>
                                    </select>                            
                                </div>    

                                <div className="form-group">
                                    <label for="select-respuesta">¿Cual es tu tiempo de respuesta?</label>
                                    <select id="select-respuesta" className="form-control" onClick={ev => setResponse(ev.target.value)} required>
                                        <option value="Lenta">Lenta</option>
                                        <option value="Normal">Normal</option>
                                        <option value="Rapida">Rapida</option>
                                    </select>                            
                                </div>    

                                {/* <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">¿En que modalidad?</label>
                                    <input className="form-control" id="exampleFormControlInput8" required onChange={ev => setModality(ev.target.value)}/>
                                </div> */}

                                {/* <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">¿Cual es tu tiempo de respuesta?</label>
                                    <input className="form-control" id="exampleFormControlInput8" required onChange={ev => setResponse(ev.target.value)}/>
                                </div> */}

                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Costo x hora</label>
                                    <input type="number" className="form-control" id="exampleFormControlInput8" required onChange={ev => setCost(ev.target.value)}/>
                                </div>
                            </div> 
                        </div>    
                        <div className='row'>
                            <div className='register-teacher-button-out'>
                                <button type="submit" className='register-teacher-button'>Registrarse</button>
                            </div>
                        </div>            
                        
                    </form>
                </div>
            </div>

        </div>
    );
  }
  
  export default RegisterTeacher;