import { AppBar,Toolbar, IconButton, Typography,Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import {BsBook} from 'react-icons/bs'
import { Button } from '@mui/material';
import {FiMenu} from 'react-icons/fi'
import {useMediaQuery} from '@mui/material/useMediaQuery'
import { Box } from '@mui/system';
import {Menu} from '@mui/material/Menu';
import * as React from 'react';
import './navbar.css'

export const Navbar = () => {
const [anchorElNav, setAnchorElNav] = React.useState(null);
const [anchorElUser, setAnchorElUser] = React.useState(null);

const handleOpenNavMenu = (event) => {
  setAnchorElNav(event.currentTarget);
};
const handleOpenUserMenu = (event) => {
  setAnchorElUser(event.currentTarget);
};

const handleCloseNavMenu = () => {
  setAnchorElNav(null);
};

const handleCloseUserMenu = () => {
  setAnchorElUser(null);
};
  return (
    
    <AppBar position ='static' >
        <Toolbar> 
          <IconButton size ='large' edge='start' color='inherit' aria-label='logo'  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} >
            <BsBook/>
          </IconButton>
          <Typography variant='h6' component='div'  sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              
            }} >
            TeachingTots
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
            <IconButton
              size="large"
              aria-label="navbar"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <FiMenu/>
             </IconButton>
             </Box> 
          <Stack direction= 'row' spacing={4} sx={{display:{xs:'none', md:'flex'}}}pl={{md:50}}>

            <Link to="/" color='inherit'><Button variant='outlined' color='inherit'>Home</Button></Link>
            <Link to="/quizzes" color='inherit'><Button variant='outlined' color='inherit'>Quizzes</Button></Link>
            <Link to="/dictionary" color='inherit'><Button variant='outlined' color='inherit'>Dictionary</Button></Link>
            <Link to="/thesururs" color='inherit'><Button variant='outlined' color='inherit'>Thesaurus</Button></Link>
          </Stack>
        </Toolbar>

    </AppBar>



  )
}
