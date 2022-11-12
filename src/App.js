import React, { Component } from "react";
import {Home} from './components/Home/home'
import {Navbar} from './components/Navbar/navbar'
import { Navbar2 } from "./components/Navbar/navbar2";
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import './index.css'

function App()  {
  return (
    <div className="App">
      <Router>
      <Navbar2/>

      <Routes>
      <Route path='/' exact element={<Home />} />
     
      </Routes>
      </Router>

      
    </div>
  );
}

export default App;
