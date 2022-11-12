import React from 'react'
import { Box } from '@mui/system'
export const Quizzes = () => {
  return (
    <div>
        <div className= 'quiz-container' >

        <h1>Create Your Own Quizzes</h1>
        <Box sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />



     

        </div>


    </div>
  )
}