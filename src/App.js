
function App()  {
  return (
    <Routes>
      <Route path='/createQuiz' element={<CreateQuiz/>}/> 
      <Route path='/viewQuizzes' element={<ViewQuizzes/>} />
      <Navbar/>
      <Route path='/' exact element={<Home />} />
      <Route path='/viewQuiz/:quizTitle' element={<ViewQuiz/>}/>
    </Routes>
  ); 
}

export default App;
