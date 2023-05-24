import React from 'react'
import './Card.css'

export default function Card(props) {
  return (
    <div className='card'>
        <img src={props.image} alt="Book" />
        <h1>{props.name}</h1>
        <p>{props.author}</p>
        <div className="description">
            <p>{props.discription}</p>
        </div>
        <div className="rating-price">
            <p>{props.rating}</p>
            <p>{props.price}$</p>
        </div>
    </div>
  )
}
