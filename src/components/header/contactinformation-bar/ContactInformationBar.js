import React from 'react'
import './contactinformationbar.css';

const ContactInformationBar = () => {
  return (
    
    <div className="contactinformation-bar ">
      <div className="content-box">
        <i className="fa-regular fa-phone-volume"></i>
        +46 (8) 121 470 50
    </div>
    <div className="content-box">
        <i className="fa-regular fa-envelope"></i>
        info@crito.com
    </div>
    <div className="content-box last">
        <i className="fa-regular fa-location-dot"></i>
        Sveavägen 31, Stockholm
    </div>
  </div>

  )}

export default ContactInformationBar