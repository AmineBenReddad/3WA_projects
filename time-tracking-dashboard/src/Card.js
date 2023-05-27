import React from 'react'
import './Card.css'
import bgimg from './images/icon-work.svg'
import pnt from './images/icon-ellipsis.svg'

export default function Card({elm,timeframe}) {
    let time = elm.timeframes[timeframe]
  return (
    <div className='card'>
        <div className="bg-img" style={{backgroundColor: `${elm.color}`}}>
            <img src={require(`${elm.image}`)} alt="img" />
        </div>
        <div className="content">
            <div className="header">
                <h4>{elm.title}</h4>
                <img src={pnt} alt="pnt" />
            </div>
            <h1>{time.current}hrs</h1>
            <p>Last Week - {time.previous}hrs</p>
        </div>
    </div>
  )
}

