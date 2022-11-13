import React from 'react'
import './home.css'

import { Preschool } from '../Preschool/preschool'
import { Dictionary } from '../Dictionary/dictionary'
import { Thesaurus } from '../Thesaurus/thesaurus'
import { Quizzes } from '../Quizzes/quizzes'
import { AppBar,Toolbar, IconButton, Typography,Stack } from '@mui/material';

export const Home = () => {
  return (
    <div>
      <Typography sx={{fontsize:{xs:10}}}> 
      <div className='headerContainer' > 
      
      <h1> TeachingTots </h1>
   
      <p> Welcome to Our Online Educational Learning Center</p>
      
      </div>
      </Typography>

      <div>
      <Preschool/>
      <Dictionary/>
      <Quizzes/>
      <Thesaurus/>
      </div>

      </div>
    
  )
}

