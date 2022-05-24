import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css';

import Navbar from './components/Navbar';
import EventsList from './Views/EventsList'
import AddEvent from './Views/AddEvent'
import PastEventsList from './Views/PastEventsList'

function App() {

  const [events, setEvents] = useState([
    {
      id: '1',
      title: 'First Event',
      timpstamp: '202205222353',
      description: 'This is just a test for first event.'
    },
    {
      id: '2',
      title: 'Second Event',
      timpstamp: '202205222354',
      description: 'This is just a test for second event.'
    },
    {
      id: '3',
      title: 'Third Event',
      timpstamp: '202205222354',
      description: 'This is just a test for third event.'
    },
    {
      id: '4',
      title: 'Fourth Event',
      timpstamp: '202205222354',
      description: 'This is just a test for fourth event.'
    }
  ])


  return (
    <div className="App">
      <div className='container'>
        <Navbar />
        
        <Routes>
          <Route path='/' element={ <EventsList events={events}/> } />
          <Route path='/addevent' element={ <AddEvent /> } />
          <Route path='/pastevents' element={ <PastEventsList events={events}/> } />
        </Routes>

      </div>
    </div>
  );
}

export default App;
