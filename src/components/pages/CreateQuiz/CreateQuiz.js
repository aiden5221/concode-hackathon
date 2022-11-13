import { TextField, Typography, Box, Select, MenuItem, FormControl, InputLabel, Divider, Button } from "@mui/material";
import { useState } from "react";
import { ControlPoint, RemoveCircleOutline } from '@mui/icons-material';
import Question from "../../Question/Question.component";
import './CreateQuiz.styles.scss';
import { postQuizInformation } from "../../../utils/firebase.utils";
import { useNavigate } from "react-router-dom";
const CreateQuiz = () => {
    const [questionData, setQuestionData] = useState({});
    const [quizTitle, setQuizTitle] = useState('');
    const [description, setDescription] = useState('');
    const [quizType, setQuizType] = useState('');
    const [numQuestions, setNumQuestions] = useState(0);

    const navigate = useNavigate();

    const handleQuizType = (e) => {
        e.preventDefault();
        setQuizType(e.target.value);
    }
    const handleQuizTitle = (e) => {
        e.preventDefault();
        setQuizTitle(e.target.value);
    }
    const handleQuizDescription = (e) => {
        e.preventDefault();
        setDescription(e.target.value);
    }
    const handleQuizSubmit = async () => {
        if(questionData === null || questionData === undefined) return;
        const quiz = {
            quizTitle,
            description,
            quizType,
            questionData,
        }
        await postQuizInformation(quiz);
        navigate('/viewQuizzes');
    }
    const addQuestion = () => {
        setNumQuestions(prevNumQuestions => prevNumQuestions += 1)
    }
    const removeQuestion = () => {
        if (numQuestions == 0) return;
        setNumQuestions(prevNumQuestions => prevNumQuestions -= 1)
    }

    const getQuestions = () => {
        console.log('call')
        const questions = []
        for(var i = 0; i < numQuestions; i++){
            questions.push([<Question style={{marginBottom:'2%'}} key={i} setQuizQuestions={setQuestionData} quizQuestions={questionData} id={i} />, <Divider sx={{ marginBottom:'5%', marginTop:'5%'}}/>])
        }
        return questions;
    }
    return(
        <div>
            <Typography variant="h3" align="center">Create a quiz!</Typography>
            <Box
                className="form-container"
            >   
                <form>
                    <TextField required id="outlined-basic" label='Title' onChange={handleQuizTitle} variant="outlined" fullWidth sx={{ marginBottom:'2%' }} />
                    <TextField required id="outlined-basic" onChange={handleQuizDescription} label='Description' variant="outlined" fullWidth sx={{ marginBottom:'2%' }} />
                    
                    <FormControl fullWidth>
                    <InputLabel id="select-type-quiz">Quiz Type</InputLabel>
                    <Select
                        labelId="select-type-quiz"
                        sx={{ marginBottom:'2%' }}   
                        onChange={handleQuizType}
                        label='Quiz Type'
                        value={quizType}
                        required
                        fullWidth
                    >
                    
                        <MenuItem value={'medical'}>Medical</MenuItem>
                        <MenuItem value={'math'}>Math</MenuItem>
                        <MenuItem value={'geography'}>Geography</MenuItem>
                        <MenuItem value={'history'}>History</MenuItem>
                    </Select>
                    </FormControl>
                    <div className="questions-count-container">
                        <Typography sx={{marginTop:'1%'}}>Question Count: {numQuestions}</Typography>
                        <div className="questions-controls">
                            <ControlPoint onClick={addQuestion} sx={{fontSize:'2rem'}} />
                            <RemoveCircleOutline onClick={removeQuestion} sx={{fontSize:'2rem'}}/>
                        </div>
                    </div>
                    
                    <Divider sx={{ marginBottom:'2%', width:'100%'}}/>
                    <div id="question-container">
                        {
                            getQuestions()
                        }
                    </div>
                    
                    <Button onClick={handleQuizSubmit} sx={{width:'100%', margin:'auto', marginTop:'5%'}} variant="contained">Submit</Button>
                </form>
                
            </Box>
        </div>
    )
}

export default CreateQuiz;