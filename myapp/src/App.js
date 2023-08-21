import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/navbar';
import MeseroList from './components/meserolist';
import FacturaList from './components/facturalist';
import ClienteList from './components/clientelist';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <NavBar />
          <Routes>
               <Route exact path='/meseros' element={<MeseroList/>}/>       
               <Route exact path='/facturas' element={<FacturaList/>}/>      
               <Route exact path='/clientes' element={<ClienteList/>}/>                
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;