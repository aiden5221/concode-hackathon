import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import { MdSearch } from 'react-icons/md';
import './dictionary.css'

export const Dictionary = () => {
  const [result, setData] = useState("");
  const [ searchWord, setSearchWord ] = useState("");

  function translate () {

    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`).then( (response) => {
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

      {result && (
       <div className="resultList">
        <h2>
          {result.word}{" "}
        </h2>
        {/* <p4>Phonetic:</p4> */}
        <p>{result.phonetic}</p>

        <h4>Definitions:</h4>
        <p>{result.meanings[0].definitions[0].definition}</p>
        <p>{result.meanings[0].definitions[1].definition}</p>
        <p>{result.meanings[0].definitions[2].definition}</p>
        <h4>Example:</h4>
        <p>{result.meanings[0].definitions[0].examples}</p>
        <p>{result.meanings[0].definitions[1].examples}</p>
        <p>{result.meanings[0].definitions[2].examples}</p>

       </div>

      )} 
      {/* { !result && (
        <div className="resultList">
        <h4>
          There is no such word in this dictionary
        </h4>
       </div>
 
      )} */}
     </div>
  )
}
