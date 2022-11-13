import { TextField, Typography, Divider, RadioGroup, FormControlLabel, Radio } from "@mui/material"
import { useEffect } from "react";
import { useState } from "react";

const Question = ({ setQuizQuestions, quizQuestions, id }) => {
    const [answers, setAnswers] = useState({});
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [question, setQuestion] = useState('');

    useEffect(() => {
        const quizSubmission = {
            question,
            answers,
            correctAnswer,
        }
        setQuizQuestions({...quizQuestions, [id] : quizSubmission});
        console.log(quizSubmission)
    }, [answers, question, correctAnswer])

    return(
        <form>
            <TextField required fullWidth id="question" className="question-text" onChange={(e) => setQuestion(e.target.value)} label='Question' variant="outlined" />
            <Typography variant='h6' align="center" sx={{ marginBottom:'2%' }} >Answers</Typography>
                <TextField required fullWidth id="0" className="answer-text" onChange={(e) => setAnswers({...answers, [e.target.id] : e.target.value}) } label='Answer #1' variant="outlined" />
                <TextField required fullWidth id="1" className="answer-text" onChange={(e) => setAnswers({...answers, [e.target.id] : e.target.value})} label='Answer #2' variant="outlined"/>
                <TextField required fullWidth id="2" className="answer-text" onChange={(e) => setAnswers({...answers, [e.target.id] : e.target.value})} label='Answer #3' variant="outlined"/>
                <TextField required fullWidth id="3" className="answer-text" onChange={(e) => setAnswers({...answers, [e.target.id] : e.target.value})} label='Answer #4' variant="outlined"/>
            <Typography variant='h6'>Select correct answer</Typography>
            <Divider/>
            <RadioGroup
                row 
                onChange={(e) => setCorrectAnswer(e.target.value)}
                required
            >
                <FormControlLabel value="0" control={<Radio />} label="Answer #1" />
                <FormControlLabel value="1" control={<Radio />} label="Answer #2" />
                <FormControlLabel value="2" control={<Radio />} label="Answer #3" />
                <FormControlLabel value="3" control={<Radio />} label="Answer #4" />
            </RadioGroup>    
        </form>
    )
}

export default Question

