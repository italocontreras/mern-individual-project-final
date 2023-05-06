import './Main.css'
import { useNavigate } from "react-router-dom";



function Main() {


    const navigate = useNavigate() 

    async function goLogin(ev) {
        ev.preventDefault();
    

        try {
            // alert('!')
            navigate('/login')

        }
        catch(err) {

        }
    }

    async function goRegister(ev) {
        ev.preventDefault();
    

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
                        <span onClick ={goHome}>Home</span>
                        
                    </div>    
                    <div className='word'>
                        Nosotros
                    </div>    
                    <div className='word'>
                        Contactanos
                    </div>

                </div>

                <div className='right-nav-bar'>
                    <div className='word'>
                        ¡Quiero enseñar!
                    </div>
                </div>

            </div>

            <div className='body'>
                <div className='title'>
                    ¿Necesitas apoyo para un curso de la universidad?
                </div>   

                <div className='btns'>
                    
                    <div className='container-btn-info'>
                        <input className="btn btn-info" type="button" value="¡Sí, estoy interesado! 🔥" onClick ={goLogin}/>
                    </div>
                    <div className='container-btn-primary'>
                        <input className="btn btn-primary" type="button" value="¡Cuéntame más! 😀"onClick ={goRegister}/>
                    </div>
                </div>                      
            </div>
        </div> 
    );
  }
  
  export default Main;