import dReact from'react'
import {makestyle} from '@material-ui/styles'
import { Card } from '@mui/material'
import {CardActionArea} from '@mui/material'
import {CardActions} from '@mui/material'
import {CardContent} from '@mui/material'
import {Button} from '@mui/material'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export const Card4s = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        af{bull}fec{bull}tion{bull}ate{bull}ly
      </Typography>
      <Typography sx={{ mb: 1 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
      in a way that displays fondness
        <br />
        {'"Tammy kissed the top of her head affectionately"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);
}