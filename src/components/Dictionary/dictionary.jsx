import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Axios from 'axios';
import { MdSearch } from 'react-icons/md';
import './dictionary.css'

export const Dictionary = () => {
  const [data, setData] = useState("");
  const [ searchWord, setSearchWord ] = useState("");

  function translate () {

    Axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`).then( (response) => {
      setData(response.data[0]);
    })
  }
  return (
    <div className="mainDic"> 
      
      <h1> Integrated Word Finder</h1>
      <div className="searchBar">
        <input type="text" placeholder="Search the word..." onChange = { e => setSearchWord(e.target.value)} />
        <button onClick = {() => translate()}>
          <MdSearch size="10 px" />
        </button>

      </div>
      <p class="main">Test!</p>
      <Button>Search</Button>
    
     </div>
  )
}
