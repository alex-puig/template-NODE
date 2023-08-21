import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/navbar';
import MeseroList from './components/meserolist';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <NavBar />
          <Routes>
               <Route exact path='/meseros' element={<MeseroList/>}/>                
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;