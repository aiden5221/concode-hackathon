import React from 'react'
import {AppBar,Toolbar, IconButton, Typography,Stack} from "@mui/material"
import  {makeStyles} from '@material-ui/styles'

import { Button } from '@mui/material';
import {TbMoodKid} from 'react-icons/tb'
import {AiFillHome} from 'react-icons/ai'
import {MdQuiz} from 'react-icons/md'
import{BsBookHalf} from 'react-icons/bs'
import{BsBookFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'






export const Navbar2 = () => {
  return (
    <AppBar position='static' sx={{borderRadius:10}} >
              <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                   
                </IconButton>
                <Typography variant='h7' component='div' sx={{borderRadius:'50%'}} padding='2rem'> 
                    Application
                </Typography>
                <Stack direction='row' spacing={2}>
                <Link  to='/'  style={{ textDecoration: 'none' }} > Home <AiFillHome className='icons' /> </Link>
                <Link to='/quizzes'   style={{ textDecoration: 'none' }} >Quizzes <MdQuiz className='icons'/> </Link>
                <Link to='/dictionary'   style={{ textDecoration: 'none' }} >Dictionary <BsBookFill className='icons'/>  </Link>
                <Link to=' thesauraus'  style={{ textDecoration: 'none' }}> Thesaurus <BsBookHalf className='icons'/> </Link>
                <Link to='/preschool'  style={{ textDecoration: 'none' }}>Preschool Learning Assistant <TbMoodKid className='icons'/></Link>
                </Stack>
                </Toolbar>
    </AppBar>
  )
}
