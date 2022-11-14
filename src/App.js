<<<<<<< HEAD
import CreateQuiz from "./components/pages/CreateQuiz/CreateQuiz";
import ViewQuiz from "./components/pages/ViewQuiz/ViewQuiz";
import ViewQuizzes from "./components/pages/ViewQuizzes/ViewQuizzes";
import { Routes, Route } from "react-router-dom";
=======
import React, { Component } from "react";
import {Home} from './components/Home/home'
import {Navbar} from './components/Navbar/navbar'
import { Navbar2 } from "./components/Navbar/navbar2";
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import './index.css'
>>>>>>> parent of 176e31d (Merge branch 'master' into homepaged)

function App() {
  return (
<<<<<<< HEAD
    <Routes>
      <Route path='/createQuiz' element={<CreateQuiz/>}/> 
      <Route path='/viewQuizzes' element={<ViewQuizzes/>} />
      <Route path='/viewQuiz/:quizTitle' element={<ViewQuiz/>}/>
    </Routes>
  ); 
=======
    <div className="App">
      <Router>
      <Navbar/>

      <Routes>
      <Route path='/' exact element={<Home />} />
     
      </Routes>
      </Router>

      
    </div>
  );
>>>>>>> parent of 176e31d (Merge branch 'master' into homepaged)
}

export default App;
