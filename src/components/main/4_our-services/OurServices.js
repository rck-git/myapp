import React from 'react'
import './our-services.css'
import {Link} from 'react-router-dom'
import Button from '../../../assets/generic/Button'

import backgroundlinesright from '../../../assets/images/background-lines-right.svg'
import SectionTitle from '../../../assets/generic/SectionTitle'


function OurServices() {
  const servicesArray = [
    {
      id:0,
      h5 : "Business Advice",
      paragraph : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nulla. Excepturi, inventore!",
      route : '/Contacts',
      icon: "fa-solid fa-arrow-right" 
    },
    {
      id:1,
      h5 : "Startup Business",
      paragraph : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nulla. Excepturi, inventore!",
      route : '/Contacts',
      icon: "fa-solid fa-arrow-right" 
    },
    {
      id:2,
      h5 : "Financial Advice Advice",
      paragraph : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nulla. Excepturi, inventore!",
      route : '/Contacts',
      icon: "fa-solid fa-arrow-right" 
    },
    {
      id:3,
      h5 : "Risk Management",
      paragraph : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nulla. Excepturi, inventore!",
      route : '/Contacts',
      icon: "fa-solid fa-arrow-right" 
    },
  ]
  return (    
    <section className="our-services">
    <div className="title">
    <SectionTitle title ="Our Services" h3text ="We Provide The Best Service For Consulting" />
     </div>

  <div className="flex-box">
    {servicesArray.map((localpar) => 
      <div className="flex-services" key={localpar.id}>
      <h6>____</h6>
      <h5>{localpar.h5}</h5>
      <p>{localpar.paragraph}</p>
      <Link className="btn-black" to={localpar.route}><i className={localpar.icon}></i></Link>
         
    </div>)}
  </div> 
  <div className="center-content">
  <Button type="btn-transparent" url="/contacts" text = "Browse Services" />
  </div>
  
<div className="lines">
<img src={backgroundlinesright} alt="lines" />
</div>
  </section>
  )
}

export default OurServices