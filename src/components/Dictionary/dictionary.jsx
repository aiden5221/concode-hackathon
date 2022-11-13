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

import { OutlinedInput } from '@mui/material';

export const Dictionary = () => {
  const [result, setData] = useState("");
  const [ searchWord, setSearchWord ] = useState("");

  function translate () {

    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`).then( (response) => {
      setData(response.data[0]);
    })
  }

  // const Search = styled('div')(({ theme }) => ({
  //   position: 'relative',
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: alpha(theme.palette.common.white, 0.15),
  //   '&:hover': {
  //     backgroundColor: alpha(theme.palette.common.white, 0.25),
  //   },
  //   marginRight: theme.spacing(2),
  //   marginLeft: 0,
  //   width: '100%',
  //   [theme.breakpoints.up('sm')]: {
  //     marginLeft: theme.spacing(3),
  //     width: 'auto',
  //   },
  // }));

  // const SearchIconWrapper = styled('div')(({ theme }) => ({
  //   color: 'inherit',
  //   padding: theme.spacing(0, 2),
  //   height: '100%',
  //   position: 'absolute',
  //   pointerEvents: 'none',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // }));

 
  

  return (
    
    <div className="mainDic"> 
      
      <h1> Integrated Word Finder</h1>
    
      <div className="searchBar">
      <div
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <Search> */}
      <TextField id="outlined-basic" label="Search" variant="outlined" placeholder="Search the word..." onChange = { e => setSearchWord(e.target.value)}/>
      <Button id="searchBtn" variant="contained" size="large" onClick = {() => translate()}>
          {/* Search */}
          <MdSearch />
        </Button>
    
      {/* <SearchIconWrapper id="searchBtn" ><SearchIcon onClick = {() => translate()}/></SearchIconWrapper> */}
   
        {/* </Search> */}
      
    </div>
      {/* <input id= "filled-basic" type="text" placeholder="Search the word..." onChange = { e => setSearchWord(e.target.value)} />
        <button onClick = {() => translate()}>
          <MdSearch size="10 px" />
        </button> */}
      </div>
     
       {result && (
       <div className="resultList">
        <h2>
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
