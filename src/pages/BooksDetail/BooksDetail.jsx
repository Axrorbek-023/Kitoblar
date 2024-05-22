import React from 'react'
import './BooksDetail.css'
import { useParams } from 'react-router-dom'
import { books } from '../../data/books'
import BookCard from '../../components/BookCard/BookCard'

function BooksDetail() {
  let {slug} = useParams()
  let finBook = books.find((i)=> i.id == slug)
  let fillBooks = books.filter((i)=> i.category == finBook.category && i.id != finBook.id)
  return (
    <div className='BooksDetail container'>
      <img className='bookdetail__img' src={finBook.img} alt="" />
      <ul className="bd__list">
        {
          fillBooks?.map((item, index)=> (
            <li key={index} className="bd__item">
              <BookCard item={item}/>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default BooksDetail