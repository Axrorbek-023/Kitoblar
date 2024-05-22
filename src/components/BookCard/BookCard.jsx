import React from 'react'
import './BookCard.css'
import { Rate } from 'antd';
import { Link } from 'react-router-dom';

function BookCard({ item }) {
  return (
    <Link to={`/book-detail/${item.id}`}>
      <div className='BookCard'>
        <img src={item.img} alt="" />
        <h4>{item.title}</h4>
        <p>{item.author}</p>
        <Rate className='reyting' allowHalf defaultValue={item.rating} />
      </div>
    </Link>
  )
}

export default BookCard