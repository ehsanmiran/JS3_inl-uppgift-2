import React from 'react'
import Event from '../components/Event'

const PastEventsList = ({events}) => {
  return (
    <div className='listBody'>
      {events.length ? events.map(event => (
        <Event key={event.id} event={event}/>
      ))
      : <p>No listed event has past yet.</p> 
      }
    </div>
  )
}

export default PastEventsList