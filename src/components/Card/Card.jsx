import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card({ item }) {
    const navigate = useNavigate()

    return (
        <div onClick={()=> navigate(`/adib-detail/${item.id}`)} className="adib__card">
            <img src={item.img} alt="" />
            <div className="card__inner">
                <h4>{item.name.slice(0,10)}...</h4>
                <p>{item.date}</p>
                <span>
                    <p><i className="bi bi-book-fill"></i>{item.books}</p>
                    <p><i className="bi bi-headphones"></i>{item.au}</p>
                </span>
            </div>
        </div>
    )
}

export default Card