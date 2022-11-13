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
   <Box pl={{xs:0, md:0, lg:10,xl:4}} gap={3} pb={10} pt={3} pr={10} sx={{display:{lg:'flex', sm: 'none' ,xl:'flex',md:'none'},justifyContent:'center', alignItems:'center',flexDirection:{sm:'none',lg:'none',md:'none',xl:'none'}}}>
    <Grid><Cards/></Grid>
    <Grid><Card2s/></Grid>
    <Grid><Card3s/></Grid>
    <Grid><Card4s/></Grid>
   </Box> 
   </Box>


    
  
   

  )
}
