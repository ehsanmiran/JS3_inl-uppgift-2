import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoImage from '../img/events.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/" className='navbar-brand'>
        <img className='logoImage' src={logoImage} alt="logo" />
        <h1>MY EVENTS</h1>
      </Link>
      <ul className='nav-links'>
        <li className='liActive'><NavLink to="/addevent" className="nav-link">Add Event</NavLink></li>
        <li className='liActive'><NavLink to="/pastevents" className="nav-link">Past Events</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar