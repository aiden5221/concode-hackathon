import React from 'react'
import './home.css'

import { Preschool } from '../Preschool/preschool'
import { Dictionary } from '../Dictionary/dictionary'
import { Thesaurus } from '../Thesaurus/thesaurus'
import { Quizzes } from '../Quizzes/quizzes'

export const Home = () => {
  return (
    <div>
      <div className='headerContainer' > 
      <h1> Untitled Application </h1>
      <p> Welcome to Our Online Educational Resource</p>
      
      </div>

      <div>
      <Preschool/>
      <Dictionary/>
      <Quizzes/>
      <Thesaurus/>
      </div>

      </div>
    
    
    
    
  )
}

