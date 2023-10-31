import React from 'react'
import Menu from './menu/Menu'

import {Link} from 'react-router-dom'
import SocialmediaBar from './socialmedia-bar/SocialmediaBar'
import ContactInformationBar from './contactinformation-bar/ContactInformationBar'
import Nav from './menu/nav/Nav'
import img_logotype from './../../assets/images/logotype.svg'
import './header.css' 

const Header = () => {
  return (
    <header>
      <div className="container">
        <button className="btn-menu-bars"><i className="fa-solid fa-bars-staggered"></i></button>
        <div className="logotype">
          <Link to="/">
            <img className = "img_logotype" src = {img_logotype} alt = "background lines" />
            </Link>
        </div>
        <ContactInformationBar/>
        <SocialmediaBar />
        <Menu>
          <Nav />
        </Menu>
      </div>
    </header>

  )
}

export default Header