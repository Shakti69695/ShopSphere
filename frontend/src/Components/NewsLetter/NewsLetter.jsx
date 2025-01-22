import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers on ypour Email</h1>
      <p>Subscribe to our news letter and be updated</p>
      <div>
        <input type="email" placeholder='Your E-Mail Id'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
