import React from 'react'

const Event = ({event}) => {
  return (
    <div className='event-line'>
      <h3>{event.title}</h3>
    </div>
  )
}

export default Event