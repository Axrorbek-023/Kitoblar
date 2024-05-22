import React, { useContext } from 'react'
import './Books.css'
import Hero from '../../components/Hero/Hero'
import BookCard from '../../components/BookCard/BookCard'
import { books } from '../../data/books'
import { useLocation } from 'react-router-dom'
import { Context } from '../../Context/Context'

function Books() {
  let location = useLocation().pathname
  let {search} = useContext(Context)
  return (
    <div className='container'>
      <Hero/>
      <ul className="book__list">
        {
          location == '/book' ? 
          books?.filter((i)=> i.title.toLowerCase().includes(search.toLowerCase())).map((item, i)=>(
            <li key={i} className="book__item">
              <BookCard item={item}/>
            </li>
          )) : null
        }
      </ul>
    </div>
  )
}

export default Books