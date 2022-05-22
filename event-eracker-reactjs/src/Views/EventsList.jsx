import React from 'react'
import Event from '../components/Event'

const EventsList = ({events}) => {
  return (
    <div className='listBody'>
      {events.length ? events.map(event => (
        <Event key={event.id} event={event}/>
      ))
      : <p>You are not waiting for any upcoming event. You may like to add an event!</p>
      }
    </div>
  )
}

export default EventsList