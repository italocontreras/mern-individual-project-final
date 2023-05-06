import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

//hola
import 'bootstrap/dist/css/bootstrap.min.css'

import Main from './views/Main/Main';

import Register from './views/Register/Register';
import Login from './views/Login/Login';
// import TeachersList from './views/TeachersList/TeachersList';
import ListTeachers from './views/ListTeachers/ListTeachers';

// import PiratesList from './views/PiratesList/PiratesList';
// import CreatePirate from './views/CreatePirate/CreatePirate';
// import UpdatePirate from './views/UpdatePirate/UpdatePirate';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="">
          <Routes>
            {/* <Route default path='/' element={<Main />}></Route> */}
            <Route path='/' element={<Main />}></Route>
            <Route path='/login' element={<Login />}></Route>
            {/* <Route path='/register' element={<Register />}></Route> */}
            
            {/* <Route path='/teachers' element={<ListTeachers />}></Route> */}
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;