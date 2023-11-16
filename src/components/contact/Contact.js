import React from 'react'

function Contact() {
  return (
    <div className="container">
  <div className="contact">
    <div className="contactinformation">
      <div className="content-box">
        <i className="fa-regular fa-location-dot"></i>
        <div>
          <h5>Visit Us</h5>
          <p>Sveavägen 31<br />1134 STOCKHOLM</p>
        </div>
      </div>
      <div className="content-box">
        <i className="fa-regular fa-phone-volume"></i>
        <div>
          <h5>Call Us</h5>
          <p>+46 (8) 121 470 50<br />+46 (8) 121 470 51</p>
        </div>
      </div>
      <div className="content-box">
        <i className="fa-regular fa-envelope"></i>
        <div>
          <h5>Email Us</h5>
          <p>support@crito.com<br />info@crito.com</p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Contact