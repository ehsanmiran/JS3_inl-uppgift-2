// This file is to be the HTML-like space.

import './App.css';
import Views from './Views/Views';

import Navbar from './components/Navbar';
import AddEvent from './components/AddEvent';
import EventsList from './components/EventsList';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Navbar />
        <Views />
        <EventsList />
      </div>
      <div className='container'>
        <AddEvent />
      </div>
    </div>
  );
}

export default App;
