import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigator from "./Components/Navigator/Navigator"
import Dashboard from "./Components/Dashboard/Dashboard"
import Addarticles from "./Components/Addarticles/Addarticles"
import Showcase from './Components/Showcase/Showcase';
import  Register  from './authentification/Register';
import Login from './authentification/Login';

import React from "react";
import {
  
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigator/>
      <Routes>
        <Route path='/dashboard' element ={<Dashboard/>} />
        <Route path ='/addartcile' element ={<Addarticles/>}/>
        <Route path ='/showcase' element = {<Showcase/>}/>
        <Route path ='/create' element = {<Register/>}/>
        <Route path='/login' element = {<Login/>}/>
      </Routes>

    </div>
  );
}

export default App;
