import React from 'react'
import './teamtestimonials.css'
import Button from '../../../assets/generic/Button'
import { Link } from 'react-router-dom'
import SectionTitle from '../../../assets/generic/SectionTitle'
import Stars from './Stars'

import palmer from '../../../assets/images/palmer.png'
import mark from '../../../assets/images/mark-a.png'
import justin from '../../../assets/images/justin-w.png'
import kim from '../../../assets/images/kim-b.png'
import cassandra from '../../../assets/images/cassandra-w.png'
import jack from '../../../assets/images/jack-m.png'
import amanda from '../../../assets/images/amanda-t.png'


    function TeamTestimonial() {
    const profilesArray = [
    {
        id:1,
        image: palmer,
        name: "Kristine Palmer",
        title: "Chef Operation Officer",
    },
    {
        id:2,
        image: mark,
        name:" Mark Aubri",
        title:" Senior Consultant",
    },
    {
        id:3,
        image: kim,
        name:"Kimberly Hansen",
        title: "Senior Consultant",
    },
    {
    id:4,
    image: justin,
    name: "Justin Willoman",
    title: "Senior Tech Consultant",
    },
    ]
    const clientsArray = [
      {
        id:11,
        name: "Cassandra Warren",
        desc: "Business Manager, Dorfus",
        image: cassandra
      },
      {
        id:21,
        name: "Amanda Tulling",
        desc: "Senior Developer, Square",
        image: amanda
      },
      { 
        id:31,
        name: "Jack McDogglas",
        desc: "Key Account Manager, Gobona",
        image: jack
      },
    ]
    
  return (
    
    <section className="team-testimonial">
  <div className="meet-our-team">
    
    <div className="section-title">
    <SectionTitle title={"Meet Our Team"} h3text={"Experience Team Members"} />
      <Button type={"btn-yellow"} url="/services" text={"Browse Team"} />
    </div> 
    <div className="team-profiles">
        {profilesArray.map((localpar) => 
        <div className="team-profile" key={localpar.id}>
        <img src={localpar.image} alt="team member profile" width="100%" />
        <h6>{localpar.name}</h6>
        <p>{localpar.title}</p>
      </div>)}   
    </div>
    <div className="dots">
      <a href="#top">.</a>
      <a className="active" href="#top">.</a>
      <a href="#top">.</a>
      <a href="#top">.</a>
      <a href="#top">.</a>
    </div>

  </div>
  <div className="testimonial container">
  <div className="section-title">
    <p>Testimonial</p>
    <h3>What Our Client Says</h3>
  </div>
<div className="clients">
{clientsArray.map((localpar) =>
  <div className="client" key={localpar.id}>
    <ul className="stars">   
    {Stars()}
    </ul>
    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"        
    </p>
      <div className="client-intro">
      <img src={localpar.image} />
      <p>{localpar.name}<br/><span>{localpar.desc}</span></p>
    </div>
  </div>)}
 
</div>

  <div className="center-content">
    <Button type={"btn-black"} url={"/services"} text={"All Reviews"}/>
  </div>
 
</div>  
</section>
  )
}

export default TeamTestimonial