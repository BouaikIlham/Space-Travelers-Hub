import React from 'react'
import planet from '../images/planet.png'
const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='logo'>
        <img src={planet} />
        <h2>Space Travelers' Hub</h2>
      </div>
    </div>
  )
}

export default Navbar