import CreateQuiz from "./components/pages/CreateQuiz/CreateQuiz";
import ViewQuiz from "./components/pages/ViewQuiz/ViewQuiz";
import ViewQuizzes from "./components/pages/ViewQuizzes/ViewQuizzes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/createQuiz' element={<CreateQuiz/>}/> 
      <Route path='/viewQuizzes' element={<ViewQuizzes/>} />
      <Route path='/viewQuiz/:quizTitle' element={<ViewQuiz/>}/>
    </Routes>
  ); 
}

export default App;
