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
import './dictionary.css'


export const Dictionary = () => {
  const [result, setData] = useState("");
  const [ searchWord, setSearchWord ] = useState("");
 
  function translate () {

    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`).then( (response) => {
      setData(response.data[0]);
    })
  }

  return (
    
    <div className="mainDic"> 
      
      {/* <h1> Integrated Word Finder</h1> */}
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
     
       {result && (
       <div className="resultList">
        <h2 id="word">
          {result.word}{" "}
        </h2>
  
        <p>{result.phonetic}</p>
        

        <h4>Definitions:</h4>
        <p>{result.meanings[0].definitions[0].definition}</p>
        {/* <p>{result.meanings[0].definitions[1].definition}</p> */}
        {/* <p>{result.meanings[0].definitions[2].definition}</p> */}
        <h4>Example:</h4>
        <p>{result.meanings[0].definitions[0].examples}</p>
        {/* <p>{result.meanings[0].definitions[1].examples}</p>
        <p>{result.meanings[0].definitions[2].examples}</p> */}

       </div>
     
      )} 
  
     </div>
  )
}
