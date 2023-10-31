import React from 'react'
import './nav.css'
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
  )
}

export default Nav