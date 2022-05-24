import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'


const Event = ({event}) => {
  return (
    <Link to={`/event/${event.id}`} className='event-line'>
      <h3>{event.title}</h3>
      <p>{moment(event.timeStamp).fromNow()}</p>
    </Link>
  )
}

export default Event