import React from 'react'
import {Link, } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <nav>
        <Link to='/'>Home</Link>
        <Link to={'/profile'}>Profile</Link>
        <Link to={'/menu'}>Menu</Link>
        <Link to={'/contact'}>Contact</Link>
      </nav>
    </div>
  )
}

export default Navbar