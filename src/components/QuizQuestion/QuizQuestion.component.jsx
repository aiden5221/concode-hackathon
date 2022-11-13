import { Divider, Paper, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import { useEffect } from "react"
import { useState } from "react"
import { WithTouchRipple } from "../../utils/helpers.utils"
import './QuizQuestion.styles.scss'

export const QuizQuestion = ({ id, question, setAnswer, answers, showAnswer, setScore }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(5)
    const QuestionOption = WithTouchRipple(Typography);
    
    useEffect(() => {
      if(selectedAnswer == question.correctAnswer){
        console.log('correct chosen')
        setAnswer({...answers, [id]:true})
      }else{
        setAnswer({...answers, [id]:false})
      }
    },[selectedAnswer])

    return (
        <div
            style={{ width:'100%' }}
        >
            
            <Paper 
                elevation={3}
                sx={{padding:'3%', marginTop:'5%', backgroundColor:'rgba(16,157,235,0.7)'}}
            >
                <Typography variant='h5' align="center" sx={{color:'white', }} fontWeight='bold'>{question.question}</Typography>
                <Divider/>
                <Stack
                    spacing={3}
                > 
                    <QuestionOption
                        align='left'
                        sx={{marginTop:'2%', justifyContent:'flex-start', padding:'3.5%', borderRadius:'7px'}}
                        className='question-option'
                        onClick={() => setSelectedAnswer(0)}
                        variant='h6'
                        style={{
                            color:'white', backgroundColor: selectedAnswer == 0 && !showAnswer ? '#E2E94B' : 0 == question.correctAnswer && showAnswer && selectedAnswer == 0 ? 'green' : 0 != question.correctAnswer && showAnswer && selectedAnswer == 0 ? 'rgba(234, 36, 52,0.8)' : ''
                        }}
                    >A) {question.answers[0]}</QuestionOption>
                    <QuestionOption
                        align='left'
                        sx={{marginTop:'2%', justifyContent:'flex-start', padding:'3.5%', borderRadius:'7px'}}
                        className='question-option'
                        onClick={() => setSelectedAnswer(1)}
                        variant='h6'
                        style={{
                            color:'white', backgroundColor: selectedAnswer == 1 && !showAnswer ? '#E2E94B' : 1 == question.correctAnswer && showAnswer && selectedAnswer == 1 ? 'green' : 1 != question.correctAnswer && showAnswer && selectedAnswer == 1 ? 'rgba(234, 36, 52,0.8)' : ''
                        }}
                    >B) {question.answers[1]}</QuestionOption>
                    <QuestionOption
                        align='left'
                        sx={{marginTop:'2%', justifyContent:'flex-start', padding:'3.5%', borderRadius:'7px'}}
                        className='question-option'
                        onClick={() => setSelectedAnswer(2)}
                        variant='h6'
                        style={{
                            color:'white', backgroundColor: selectedAnswer == 2 && !showAnswer ? '#E2E94B' : 2 == question.correctAnswer && showAnswer && selectedAnswer == 2 ? 'green' : 2 != question.correctAnswer && showAnswer && selectedAnswer == 2 ? 'rgba(234, 36, 52,0.8)' : ''
                        }}
                    >C) {question.answers[2]}</QuestionOption>
                    <QuestionOption
                        align='left'
                        sx={{marginTop:'2%', justifyContent:'flex-start', padding:'3.5%', borderRadius:'7px'}}
                        className='question-option'
                        onClick={() => setSelectedAnswer(3)}
                        variant='h6'
                        style={{
                            color:'white', backgroundColor: selectedAnswer == 3 && !showAnswer ? '#E2E94B' : (3 == question.correctAnswer && showAnswer && selectedAnswer == 3) ? 'green' : 3 != question.correctAnswer && showAnswer && selectedAnswer == 3 ? 'rgba(234, 36, 52,0.8)' : ''
                        }}
                    >D) {question.answers[3]}</QuestionOption>
                </Stack>
            </Paper>
        </div>
    )
}
