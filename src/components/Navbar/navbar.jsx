import React from 'react'
import 'animate.css'

import {TbMoodKid} from 'react-icons/tb'
import {AiFillHome} from 'react-icons/ai'
import {MdQuiz} from 'react-icons/md'
import{BsBookHalf} from 'react-icons/bs'
import{BsBookFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

import './navbar.css'

export const Navbar = () => {
  return (
    <div className='container'>
        <Link to='/' className='animation'> Home <AiFillHome className='icons' /> </Link>
        <Link to='/quizzes' className='animation' >Quizzes <MdQuiz className='icons'/> </Link>
        <Link to='/dictionary' className='animation' >Dictionary <BsBookFill className='icons'/>  </Link>
        <Link to=' thesauraus' className='animation'> Thesaurus <BsBookHalf className='icons'/> </Link>
        <Link to='/preschool'className='animation'>Preschool Learning Assistant <TbMoodKid className='icons'/></Link>

    </div>
  )
}
