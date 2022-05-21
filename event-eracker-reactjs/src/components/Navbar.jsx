import React from 'react'
import { Link } from 'react-router-dom'
import logoImage from '../img/events.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/" className='navbar-brand'>
        <img className='logoImage' src={logoImage} alt="logo" />
        <h1>MY EVENTS</h1>
      </Link>
    </nav>
  )
}

export default Navbar