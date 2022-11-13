import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import { MdSearch } from 'react-icons/md';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { styled, alpha } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import './dictionary.css'


export const Dictionary = () => {
  const [result, setData] = useState("");
  const [ searchWord, setSearchWord ] = useState("");
 
  function translate () {

    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`).then( (response) => {
      setData(response.data[0]);
    })
  }

  const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(-10),
    fontSize: "h2",
  }));

  return (
    
    <div className="mainDic"> 
      <header className="header">
      <h1>Dictionary</h1>
      </header>
    
      <div className="searchBar">
        <div
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <TextField id="outlined-basic searchTextField" label="Search" variant="outlined" placeholder="Search the word..."  onChange = { e => setSearchWord(e.target.value)}/>
      <Button id="searchBtn" variant="contained" size="large" onClick = {() => translate()}>
          <MdSearch size= "38px"/>
        </Button>
    
        </div>
      
      </div>
     
       {/* {result && (
       <div className="resultList">
        <h2 id="word">
          {result.word}{" "}
        </h2>
        <p>{result.phonetic}</p>
        <h4>Definitions:</h4>
        <p>{result.meanings[0].definitions[0].definition}</p>
        <h4>Example:</h4>
        <p>{result.meanings[0].definitions[0].examples}</p>
       </div>
      )}  */}
 
      {result && (
        
       <div className="resultList">
          <h2 id="word">{result.word}{" "}</h2>
        <h4 id="phonetic">{result.phonetic}</h4>
        <Div>{"difinitions"}</Div>

        <List sx={{ width: '100%', maxWidth:720, bgcolor: "background.paper"}}>
        <ListItem alignItems="flex-start" id="listMUI">
        <ListItemText
          primary={result.meanings[0].definitions[0].definition}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {result.meanings[0].definitions[0].examples && `Example:`}
              </Typography>
              {result.meanings[0].definitions[0].examples}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start" id="listMUI">
        <ListItemText
          primary={result.meanings[0].definitions[1].definition}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                 {result.meanings[0].definitions[1].examples && `Example:`}
              </Typography>
              {result.meanings[0].definitions[1].examples && result.meanings[0].definitions[1].examples}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start" id="listMUI">
        <ListItemText
          primary={result.meanings[0].definitions[2].definition}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {result.meanings[0].definitions[2].examples && `Example:`}
              </Typography>
              {result.meanings[0].definitions[2].examples && result.meanings[0].definitions[2].examples}
            </React.Fragment>
          }
        />
      </ListItem>
        </List>
       </div>
      
     
      )} 
  
     </div>
  )
}
