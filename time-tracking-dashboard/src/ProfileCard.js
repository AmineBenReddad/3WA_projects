import React from 'react'
import './ProfileCard.css'
import image from './images/image-jeremy.png'

export default function ProfileCard({hundleClick}) {

  return (
    <div className='pcard'>
        <div className="profile">
            <img src={image} alt='Jeremy'/>
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
        </div>
        <div className="timing">
            <ul>
                <li><a href="#" id='daily' onClick={e => hundleClick(e.target.id)}>Daily</a></li>
                <li><a href="#" id='weekly' onClick={e => hundleClick(e.target.id)}>Weekly</a></li>
                <li><a href="#" id='monthly' onClick={e => hundleClick(e.target.id)}>Monthly</a></li>
            </ul>
        </div>
    </div>
  )
}
