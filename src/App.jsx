import React, { useState } from 'react';
import './App.css';
import Login from './components/pages/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import AddNewPeople from './components/pages/AddNewPeople';
import { AppContext } from './context/AppContext';
import Err404 from './components/pages/Err404';

function App() {

  const [idInstance, setIdInstance] = useState('');
  const [apiTokenInstance, setApiTokenInstance] = useState('');
  const [inp_text, setInp_text] = useState('7')
  return (
    <AppContext.Provider value={{idInstance, apiTokenInstance, setApiTokenInstance, setIdInstance, inp_text, setInp_text}}>
    <Routes> 
        <Route path="*" element={ <Err404 /> } />
        <Route path="home" element={ <Home /> } />
        <Route path="login" element={ <Login /> } />
        <Route path="newChat" element={ <AddNewPeople /> }/>
        <Route path="Error404" element={ <Err404 /> } />
    </Routes>
    </AppContext.Provider>
  );
}

export default App;
