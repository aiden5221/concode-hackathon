import React from 'react'
import { Box } from '@mui/system'

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './dictionary.css'
export const Dictionary = () => {
  return (
    <div>
      <div className='text-container'>
      <h1> Interactive Dictionary </h1>
      </div>
      <div className='image-containter'>
    <ImageList sx={{width:500,height:450}} cols={3} rowHeight={164}>
      {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
</div>
</div>


  )
}
const itemData = [
  {
    img: 'https://www.svgrepo.com/show/61847/notebook.svg',
    title: 'Book1',
  },
  {
    img: 'https://freesvg.org/img/quadrato-magico.png',
    title: 'Book2',
  },
  {
    img: 'https://freesvg.org/img/bts4.png',
    title: 'Book3',
  },
  {
    img: 'https://www.svgrepo.com/show/151999/blackboard.svg',
    title: 'Book4',
  },
  {
    img: 'https://img.freepik.com/free-vector/paper-style-ransom-note-letter-pack_23-2148998651.jpg?w=740&t=st=1668291979~exp=1668292579~hmac=3fcbd28188204fcca142611379c760ca57574018dd30443b2d732460f6b7b41e',
    title: 'Book5',
  },
  {
    img: 'https://freesvg.org/img/1305132977.png',
    title: 'Book6',
  },
  {
    img: 'https://ouch-cdn2.icons8.com/4TXxUC2BxogDHFjbpgIPEvohyesJGHr4rsVmO5BEO8M/rs:fit:256:144/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzU0/Lzk3Zjk0ZGYxLTEx/MTUtNGIyYy05MmJl/LTQzNDY5ZDZkODE0/MC5zdmc.png',
    title: 'Book7',
  },
  {
    img: 'https://ouch-cdn2.icons8.com/tMtb69n_mzdN3lhgC2TydznG4gJBVssmZaF3GfvCnRE/rs:fit:256:211/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTg3/Lzk3OTkyOTNkLWVi/ODMtNGU5Ny1iZDdl/LTMwNGMyMmQ2MTUz/MS5wbmc.png',
    title: 'Book8',
  },
  {
    img: 'https://www.svgrepo.com/show/110291/bookshelf.svg',
    title: 'Book9',
  },
  {
    img: 'https://www.svgrepo.com/show/120571/book.svg',
    title: 'Book10',
  },
  {
    img: 'https://freesvg.org/img/education.png',
    title: 'Book11',
  },
  {
    img: 'https://www.svgrepo.com/show/126926/diploma.svg',
    title: 'Book12',
  },
];