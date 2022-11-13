import { Typography, Box, Stack, Button, Divider } from "@mui/material";
import { QuizQuestion } from "../../QuizQuestion/QuizQuestion.component";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getQuizByName } from "../../../utils/firebase.utils";
import 'animate.css'

const ViewQuiz = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizData, setQuizData] = useState({});
  const [answers, setAnswers] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  let { quizTitle } = useParams();

  const navigate = useNavigate();

  const getQuizQuestions = async () => {
    const { quiz } = await getQuizByName(quizTitle)
    if(quiz == undefined){
      navigate('/')
    }
    setQuizData(quiz);
    console.log(answers)
  }

  useEffect(() => {
    getQuizQuestions();
  }, []);

  const checkAnswers = () => {
    setShowAnswer(true);
    console.log(answers)
    let score = 0
    Object.keys(answers).map((key,index) => {
      return answers[key] ? score += 1: null;
    })
    setTotalScore(score);
  }

  return (
    <Box
        sx={{margin:'auto', marginTop:'5%', width:'50%', backgroundColor:'rgba(221,56,141,0.64)', borderRadius:'5px', padding:'5%'}}
    >
        <Typography 
            variant='h3'
            align="center"
            sx={{ fontWeight:'bold'}}
            >{quizTitle}</Typography>
        <Divider />
        <div style={{display:'flex'}}>
          <Typography 
            variant='h6'
            sx={{fontWeight:'bold'}}
            >Description: </Typography>
            <Typography variant="h6">{quizData.description}</Typography>
        </div>
        <div style={{display:'flex'}}>
          <Typography 
            variant='h6'
            sx={{fontWeight:'bold'}}
            >Type: </Typography>
            <Typography variant="h6">{quizData.quizType}</Typography>
        </div>
        <div style={{display:'flex'}}>
          <Typography 
            variant="h6"
            sx={{fontWeight:'bold'}}
            >Number of questions: </Typography>
            <Typography variant="h6">{quizData.questionData !== undefined ? Object.keys(quizData.questionData).length : 0 }</Typography>
        </div>
        
        <Button 
          sx={{ width:'50%', margin:'auto', display:'flex', marginTop:'5%' }}
          variant='contained'
          color='success'
          align='center'
          onClick={() => setShowQuiz(prevState => !prevState)}
          >Take quiz!</Button>
        
        <Stack
          spacing={2}
          direction='column'
        >
          {
          showQuiz && quizData !== undefined ? 
            Object.keys(quizData.questionData).map((key,index) =>{
              return <div className="animate__animated animate__fadeInUp">
              <QuizQuestion key={index} id={index} setAnswer={setAnswers} setScore={setTotalScore} answers={answers} showAnswer={showAnswer} question={quizData.questionData[key]} />
              </div>
            })
            : null
            
          }
          
        </Stack>
        {
          showQuiz ?
            <Button 
            sx={{ width:'50%', margin:'auto', display:'flex', marginTop:'5%' }}
            variant='contained'
            color='success'
            align='center'
            onClick={checkAnswers}
            >Submit quiz!</Button> : null
        }

        {
          showAnswer ? 
          <div style={{display:'flex'}}>
            <Typography fontWeight='bold' variant="h5">
              Total score:
            </Typography>
            <Typography variant="h5">{totalScore}</Typography>
          </div> : null
        }

    </Box>
  )
}

export default ViewQuiz;