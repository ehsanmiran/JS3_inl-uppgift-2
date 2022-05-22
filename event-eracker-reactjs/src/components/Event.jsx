import React from 'react'

const Event = ({event}) => {
  return (
    <div className='event-line'>
      <h3 className="navbar">{event.title}</h3>
      <p>{event.description}</p>
    </div>
  )
}

export default Event