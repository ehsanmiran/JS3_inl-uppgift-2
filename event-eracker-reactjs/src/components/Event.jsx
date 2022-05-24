import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'


const Event = ({event}) => {
  return (
    <div className='grid'>
    <Link to={`/event/${event.id}`} className='event-line'>
      <h3>{event.title}</h3>
      <p>{moment(event.timeStamp).fromNow()}</p>
    </Link>
    <button className='btn'>x</button>
    </div>
  )
}

export default Event