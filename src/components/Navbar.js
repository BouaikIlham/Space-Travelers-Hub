import React from 'react'
import { NavLink } from 'react-router-dom'
import planet from '../images/planet.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
      <div className='navbar-left'>
        <img className="image-icn" src={planet} />
        <h2 className="nav-title">Space Travelers' Hub</h2>
      </div>
      <div className="navbar-right">
        <NavLink
          to="/Rockets"
          className={({ isActive }) => (isActive ? 'styled-link' : 'no-styled-link')}
        >
          Rockets
        </NavLink>
        <NavLink
          to="/Missions"
          className={({ isActive }) => (isActive ? 'styled-link' : 'no-styled-link')}
        >
          Missions
        </NavLink>
        <hr className="border " />
        <NavLink
          to="/Profile"
          className={({ isActive }) => (isActive ? 'styled-link' : 'no-styled-link')}
        >
          Profile
        </NavLink>
      </div>
    </nav>

  )
}

export default Navbar