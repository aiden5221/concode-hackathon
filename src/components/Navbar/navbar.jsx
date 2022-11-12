import { AppBar,Toolbar, IconButton, Typography,Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import {BsBook} from 'react-icons/bs'
import { Button } from '@mui/material';
import './navbar.css'
export const Navbar = () => {
  return (
    
    <AppBar position ='static'>
        <Toolbar> 
          <IconButton size ='large' edge='start' color='inherit' aria-label='logo'>
            <BsBook/>
          </IconButton>
          <Typography variant='h6' component='div' sx= {{flexGrow:1}}>
            Untitled Project
          </Typography>
          <Stack direction= 'row' spacing={2}>

            <Link to="/" color='inherit'><Button variant='outlined' color='inherit'>Home</Button></Link>
            <Link to="/quizzes" color='inherit'><Button variant='outlined' color='inherit'>Quizzes</Button></Link>
            <Link to="/dictionary" color='inherit'><Button variant='outlined' color='inherit'>Dictionary</Button></Link>
            <Link to="/thesururs" color='inherit'><Button variant='outlined' color='inherit'>Thesaurus</Button></Link>
          </Stack>
        </Toolbar>

    </AppBar>



  )
}
