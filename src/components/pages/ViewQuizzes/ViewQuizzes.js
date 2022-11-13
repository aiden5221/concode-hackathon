import { getQuizInformation } from "../../../utils/firebase.utils";
import { Divider, Stack, Typography } from '@mui/material'
import { Container } from "@mui/system";
import Quiz from "../../Quiz/Quiz.component";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'animate.css';

const ViewQuizzes = () => {
    const [quizzes, setQuizzes] = useState([])

    const getQuizzes = async () => { 
        const quizzes = await getQuizInformation();
        setQuizzes(quizzes)
    }

    useEffect(() => {
        getQuizzes();
    }, [])
    return(
        <Container
            className='container'
        >
            <Typography 
                variant="h2"
                align="center"
                marginBottom='10%'
                >Quizzes</Typography>
            <Stack 
                spacing={{ xs: 0.5, sm: 1, md: 2 }}
                divider={<Divider orientation="vertical" flexItem/>}
                direction='column'
                className="animate__animated animate__bounceInUp"
                >
                    
                    {
                        quizzes.map(({ quiz }) => {
                            return(
                                <Link style={{textDecoration:'none'}} to={`/viewQuiz/${quiz.quizTitle}`}>
                                    <Quiz quizName={quiz.quizTitle} quizType={quiz.quizType} />
                                </Link>
                            )
                        })
                    }
                    
            </Stack>

        </Container>
    )
}

export default ViewQuizzes;