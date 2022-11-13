import { Paper, Typography } from "@mui/material";
import { Medication, Calculate, Terrain, AutoStories } from '@mui/icons-material';
import { WithTouchRipple } from "../../utils/helpers.utils";

const QUIZ_TYPES = {
    'medical': <Medication sx={{ fontSize: 45 }}/>,
    'geography': <Terrain sx={{ fontSize: 45 }}/>,
    'history': <AutoStories sx={{ fontSize: 45 }}/>,
    'math': <Calculate sx={{ fontSize: 45 }}/>,
}

const Quiz = ({ quizName, quizType }) => {
    const RipplePaper = WithTouchRipple(Paper)
    
    const handleClick = () => {
      console.log('clicked')
    }
    
    return(
        <div
            onClick={handleClick}
        >
            <RipplePaper
                elevation={5}
                sx={{ backgroundColor:'#BDD6E9' ,width:'100%', height: '5vh', display:'flex', paddingTop:'3.5vh', paddingBottom:'3.5vh' }}
            >
                {
                    QUIZ_TYPES[quizType]
                }
                <Typography
                    variant='h4'
                    width='85%'
                    marginTop='0.4%'
                    marginLeft='2%'
                >
                    {quizName}
                </Typography>
                
            </RipplePaper>
        </div>
    )
}

export default Quiz;