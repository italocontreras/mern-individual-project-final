import './ListTeachers.css'
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios'

import { useNavigate } from "react-router-dom";
// import { DropdownButton, Dropdown } from 'react-bootstrap';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';

import { Dropdown } from 'react-bootstrap';

// import { DropdownButton, Dropdown } from 'react-bootstrap';


function ListTeachers() {

    const [teachers, setTeachers] = useState([])    

    const navigate = useNavigate() 
    // const [logueado,setLogueado] = useState(false)

    // const [course, setCourse] = useState('')
    // const [modalidad, setModalidad] = useState('')
    // const [respuesta, setRespuesta] = useState('')
    
    const [buttonValueCourse, setButtonValueCourse] = useState('Selecciona el curso');
    const [buttonValueModality, setButtonValueModality] = useState('Selecciona la modalidad');
    const [buttonValueResponse, setButtonValueResponse] = useState('Selecciona el tiempo de respuesta');

    // const [listData, setListData] = useState([]);

    const handleSelectCourse = (eventKey) => {
        setButtonValueCourse(eventKey);
    }

    const handleSelectModality = (eventKey) => {
        setButtonValueModality(eventKey);
    }

    const handleSelectResponse = (eventKey) => {
        setButtonValueResponse(eventKey);
    }


    useEffect(() => {
        console.log("use effect distinto")
          // 1. Recuperamos el token
          //const token = localStorage.getItem('token')
          // 2. Llamamos a la API con la lista de jugadores
          // http://localhost:8000/api/teachers/filtered
          //axios.get('http://localhost:8000/api/teachers/filtered', {
          
        //   axios.get('http://localhost:8000/teachers/'+buttonValueCourse+'/'+buttonValueModality+'/'+buttonValueResponse, {
        //     headers: {
        //       authorization: 'Bearer ' + token
        //     }
        //   })
        axios.get(window.$api + '/teachers/'+buttonValueCourse+'/'+buttonValueModality+'/'+buttonValueResponse)
          .then(resp => {
            console.log("pasa por el then")
            console.log(resp)            
            console.log(buttonValueCourse)
            setTeachers(resp.data)
          })
          .catch(error => {
            alert(error)
          })
    }, [buttonValueCourse, buttonValueModality,buttonValueResponse]);    

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
        <div className='teachers-container'>
            
            <div className='teachers-nav-bar'>
                <div className='teachers-left-nav-bar'>
                    <div className='teachers-word'>
                        Mi Cuenta
                        
                    </div>    
                    <div className='teachers-word'>
                        Soporte
                    </div>    

                </div>

                <div className='teachers-right-nav-bar'>
                    <div className='teachers-word'>
                        <span onClick ={goHome}>Salir</span>
                    </div>
                </div>

            </div>


            <div className='teachers-body'>
                
                <div className="courses-container">

                    <Dropdown onSelect={handleSelectCourse}>
                        {/* <Dropdown.Toggle variant="secondary" id="dropdown-basic" menuAlign="right"> */}
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">    
                            {buttonValueCourse}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="Calculo" href="#">Calculo</Dropdown.Item>
                            <Dropdown.Item eventKey="Fisica" href="#">Fisica</Dropdown.Item>
                            <Dropdown.Item eventKey="Programacion" href="#">Programacion</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </div>    

                <div className="modalidad-container">

                    <Dropdown onSelect={handleSelectModality}>
                        {/* <Dropdown.Toggle variant="secondary" id="dropdown-basic" menuAlign="right"> */}
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">    
                            {buttonValueModality}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="Presencial" href="#">Presencial</Dropdown.Item>
                            <Dropdown.Item eventKey="Remoto" href="#">Remoto</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </div>    

                <div className="respuesta-container">

                    <Dropdown onSelect={handleSelectResponse}>
                        {/* <Dropdown.Toggle variant="secondary" id="dropdown-basic" menuAlign="right"> */}
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">    
                            {buttonValueResponse}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="Lenta" href="#">Lenta</Dropdown.Item>
                            <Dropdown.Item eventKey="Normal" href="#">Normal</Dropdown.Item>
                            <Dropdown.Item eventKey="Rapida" href="#">Rapida</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </div>        

                {/* <div className="teachers-list-data-ant"> 
                    
                    {
                        teachers.map(teacher =>
                            <div className='teacher-row' key={teacher._id}>
                                {teacher.name}
                            </div>    

                        )
                    }
                </div> */}

                <div className='teachers-list-data'>
                
                    {
                        
                        teachers.map(teacher => 
                            <div className="teacher-container" key={teacher._id}>
                            
                            <div className="row-left"> 
                                
                                <img src={teacher.imageUrl}/>
                            </div>  
                            
                            <div className="row-right">
                                    
                                <div>
                                    Nombre: {teacher.name}
                                </div>

                                <div>
                                    Celular: {teacher.cellphone}
                                </div>

                                <div>
                                    Costo por hora: {teacher.cost}
                                </div>

                                
                            </div>

                            </div>
                        )
                    }  

                </div>               

            </div>


        </div> 
    );
  }
  
  export default ListTeachers;