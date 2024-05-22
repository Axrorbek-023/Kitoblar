import React from 'react'
import './AdibDetail.css'
import { useParams } from 'react-router-dom'
import { adib } from '../../data/adib'
import { books } from '../../data/books'
import Header from '../../components/Header/Header'
import BookCard from '../../components/BookCard/BookCard'

function AdibDetail() {
  const { id } = useParams()
  let finAdib = adib.find((item) => item.id == id)
  let filBooks = books.filter((item) => item.adibId == id)
  return (
    <div className='adib'>
      <div className="container">
      <div className='umumiy'>
        <div>
          <img className='adib__img' src={finAdib.img} alt="" />
          <h4 className='adib__h4'>{finAdib.date}</h4>
        </div>
        <div>
          <h1 className='adib__h1'>{finAdib.name}</h1>
          <h3 className='adib__h3'>{finAdib.dis}</h3>
        </div>
        
      </div>
        <ul className="book__list">
          {
            filBooks?.map((item, i) => (
              <li key={i} className="book__item">
                <BookCard item={item} />
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default AdibDetail