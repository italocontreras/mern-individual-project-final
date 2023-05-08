import './Main.css'
import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom';

import axios from 'axios'

function Main() {


    const navigate = useNavigate() 
    async function goLogin(ev) {
        ev.preventDefault();
        

        try {
            console.log("ev.target",ev.target)

            // console.log("target 0",ev.target[0].value)
            var type = ev.target.id;
            console.log(type)
            // alert('!')
            navigate('/login/' + type)

        }
        catch(err) {

        }
    }

    async function goRegister(ev) {
        // console.log("go register")
        ev.preventDefault();
        // console.log("ev.target",ev.target)

        try {
            // alert('!')
            navigate('/register')

        }
        catch(err) {

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
        <div className='main'>
            {
                console.log("aca va el Main")
            }
            <div className='nav-bar'>
                <div className='left-nav-bar'>
                    <div className='word'>
                        <span onClick ={goHome}>Inicio</span>
                        
                    </div>    
                    <div className='word'>
                        Nosotros
                    </div>    
                    <div className='word'>
                        Contáctanos
                    </div>

                </div>

                <div className='right-nav-bar'>

                    <div className='word'>
                        {/* ¡Quiero enseñar! */}

                        <Link to={{ pathname: '/register/teacher', search: '?type=teacher' }}>¡Quiero enseñar!</Link>
                    </div>



                    {/* <div className='container-btn-info'>
                        <input className="btn btn-info" type="button" id="student" value="¡Quiero enseñar!" onClick ={goLogin}/>
                    </div> */}
                </div>

            </div>

            <div className='body'>
                <div className='title'>
                    ¿Necesitas apoyo para un curso de la universidad?
                </div>   

                <div className='btns'>
                    
                    <div className='container-btn-info'>
                        <input className="btn btn-info" type="button" id="student" value="¡Sí, estoy interesado! 🔥" onClick ={goLogin}/>
                    </div>
                    {/* <div className='container-btn-primary'>
                        <input className="btn btn-primary" type="button" value="¡Cuéntame más! 😀"/>
                    </div> */}

                    <div className='container-btn-info'>
                        <input className="btn btn-info" type="button" value="¡Cuéntame más! 😀"/>
                    </div>
                </div>                      
            </div>
        </div> 
    );
  }
  
  export default Main;