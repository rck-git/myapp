import React from 'react'
import './menu.css'
import Button from '../../../assets/generic/Button'
import Nav from './nav/Nav'

const Menu = () => {
  return (
    <div className="menu"> 
    <Nav/>
    <Button type = "yellow" text = "Login" url = "/services/" />
          
  </div>
  )
}

export default Menu