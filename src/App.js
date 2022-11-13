import React, { Component }  from 'react';
import { Route, Routes } from 'react-router';
import { ViewQuiz,ViewQuizzes } from'./components/pages/ViewQuizzes/viewQuizzes';
import CreateQuiz from'./components/pages/CreateQuiz/CreateQuiz'
import { Preschool } from '../Preschool/preschool'
import { Dictionary } from '../Dictionary/dictionary'
import { Thesaurus } from '../Thesaurus/thesaurus'
import { Quizzes } from '../Quizzes/quizzes'
import { Home } from '../Home/home'
import { Navbar } from '../Navbar/navbar'



function App()  {
  return (
    <div className="App">
    <Routes>
    <Navbar/>
      <Route path='/createQuiz' element={<CreateQuiz/>}/> 
      <Route path='/viewQuizzes' element={<ViewQuizzes/>} />
      <Route path='/' exact element={<Home />} />
      <Route path='/viewQuiz/:quizTitle' element={<ViewQuiz/>}/>
    </Routes>
    </div>
  ); 
}

export default App;
