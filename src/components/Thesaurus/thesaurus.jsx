import React from 'react'
import './thesaurus.css'
import{Cards} from '../cards.jsx'
import{Card2s} from '../card2'
import{Card3s} from '../card3'
import{Card4s} from '../card4'
import { Box } from '@mui/system'
import { Grid, Typography } from '@mui/material'


export const Thesaurus = () => {
  return (
    <Box>
    <Typography variant='h4' sx={{textAlign:'center'}}> Improve your Vocabulary</Typography>
   <Box pl={{xs:'none', md:4}} pb={{xs:'none',md:'10',lg:'10'}} pt={{xs:'none',md:'3'}} pr={3} sx={{display:'flex',justifyContent:'center', alignItems:'center'}}>
    <Grid container ><Cards/></Grid>
    <Grid container ><Card2s/></Grid>
    <Grid container ><Card3s/></Grid>
    <Grid container ><Card4s/></Grid>
   </Box> 
   </Box>


    
  
   

  )
}
