import { useState, useEffect } from 'react'
import Event from '../components/Event'

const EventsList = () => {

  const [events, setEvents] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8080/events')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setEvents(data);
        setLoading(false)
      })
  }, []);

  return (
    <div className='listBody'>
      { loading && <div> Loading...</div> }
      {events && events.length ? events.map(event => (
        <Event key={event.id} event={event}/>
      ))
      : 
      !loading && <p>You are not waiting for any upcoming event. You may like to add an event!</p>
      }
    </div>
  )
}

export default EventsList