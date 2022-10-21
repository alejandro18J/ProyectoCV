import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Componentes/Navegador/Navbar'
import Domicilio from './Componentes/Paginas/Domicilio'
import Formacion from './Componentes/Paginas/Formacion'
import Hobbies from './Componentes/Paginas/Hobbies'
import Inicio from './Componentes/Paginas/Inicio'

function App() {
  return (
    <div className="App">

     <Router>
        <Navbar/>
      <Routes>

        <Route path='/' exact element={<Inicio/>}/>
        <Route path='/Hobbies' element={<Hobbies/>}/>
        <Route path='/Inicio' element={<Inicio/>}/>
        <Route path='/Formacion' element={<Formacion/>}/>
        <Route path='/Domicilio' element={<Domicilio/>}/>

      </Routes>
    
      </Router> 

    </div>
  );
}

export default App;
