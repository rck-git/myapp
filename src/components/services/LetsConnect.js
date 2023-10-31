import React from 'react'
import backgroundwavylines from '../../assets/images/background-lines.svg'
import {NavLink} from 'react-router-dom'

function LetsConnect() {
  return (
<div className="lets-connect">
  <img className="background-wavy-lines" src={backgroundwavylines} alt="white background lines" />
  <NavLink to="/">Home</NavLink>
  <NavLink to="/contacts">Contact</NavLink>
  <h1>Let's Connect</h1>
</div>
  )
}

export default LetsConnect