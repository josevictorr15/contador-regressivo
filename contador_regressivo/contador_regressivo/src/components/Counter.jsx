import React from 'react'
import "./Counter.css"

const Counter = ({title, number}) => {
  return (
    <div className='counter'>
        <p className='counter-number'>{number}</p>
        <h3 className='counter-title'>{title}</h3>
    </div>
  )
}

export default Counter