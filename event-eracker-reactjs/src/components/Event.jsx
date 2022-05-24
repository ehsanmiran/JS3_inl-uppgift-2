import React from 'react'
import moment from 'moment'

const Event = ({event}) => {
  return (
    <div className='event-line'>
      <h3>{event.title}</h3>
      <p>{moment(event.timeStamp).fromNow()}</p>
    </div>
  )
}

export default Event