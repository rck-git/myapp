import React from 'react'
import backgroundlinesright from '../../assets/images/background-lines-white-right.svg'
import logotypewhite from '../../assets/images/logotype-white.svg'
import './footer.css';




function Footer() {
  return (

<footer>
  <img className="background-lines-right" src={backgroundlinesright} alt="white-lines" />
  <div className="container">
    <div className="logotype">
    <a href="index.html">
      <img src={logotypewhite} alt="Company Logo White" />
    </a>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.
    </p>
  </div>
<div className="column">
  <h3>Company</h3>
  <a href="#">About</a>
  <a href="#">Features</a>
  <a href="#">Work</a>
  <a href="#">Career</a>
</div>
<div className="column">
  <h3>Help</h3>
  <a href="#">Customer Support</a>
  <a href="#">Delivery Details</a>
  <a href="#">Terms & Conditions</a>
  <a href="#">Privacy Policy</a>
</div>
<div className="column">
  <h3>Resources</h3>
  <a href="#">Free eBooks</a>
  <a href="#">Development Tutorial</a>
  <a href="#">How to - Blog</a>
  <a href="#">Youtube Playlist</a>
</div>
<div className="column">
  <h3>Link</h3>
  <a href="#">Free eBooks</a>
  <a href="#">Development Tutorial</a>
  <a href="#">How to - Blog</a>
  <a href="#">Youtube Playlist</a>
</div>

</div>

<div className="socialmedia-bar"> 
  <span>&copy; 2023 Crito - Consulting Company Inc. All Rights Reserved</span> 
  <div>
    <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
    <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
    <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
    <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
  </div>   

</div>
</footer>
  )
}

export default Footer