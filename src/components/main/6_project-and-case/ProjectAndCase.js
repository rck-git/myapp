import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../assets/generic/Button'
import SectionTitle from '../../../assets/generic/SectionTitle'
import './projectandcase.css'

import image1 from '../../../assets/images/Image.png'
import image2 from '../../../assets/images/Image(2).png'
import image3 from '../../../assets/images/Image(3).png'
import image4 from '../../../assets/images/Image(4).png'



function ProjectAndCase() {
    const newsArray = [ 
        {
        id : '1',
        image: image1,
        alt:" man reading news",
        h3 : "Grow your business",
        Link : "/news",
        icon : "fa-regular fa-arrow-up-right",
        },
        {
        id : '2',
        image: image2,
        alt: "picture of pen and paper",
        Link : "/news",
        h3 : "Why your client needs a responsive website",
        icon: "fa-regular fa-arrow-up-right"
        },
        {
        id : '3',
        image: image3,
        alt: "picture of a laptop",
        Link : "/news",
        h3 : "Educate your employees to get better results",
        icon: "fa-regular fa-arrow-up-right"
        },
        {
        id : '4',
        image: image4,
        alt: "picture of glasses and phone",
        Link : "/news",
        h3 : "Business Insights is an important piece of your business",
        icon: "fa-regular fa-arrow-up-right"
        },      
        
    ]


  return (
    <section className="project-and-case">
    <div className="container">
      <SectionTitle title={"Project & Case Studies"} h3={"Let's Look At Our Global Projects"}/>      
      <div className="project-and-cases">
       {newsArray.map((localpar) =>
        <Link className="project" to={localpar.Link} key={localpar.id}>
            <img src={localpar.image} alt={localpar.alt} />
            <h3>{localpar.h3}</h3>
            <div className="readmore">Read More <i className={localpar.icon}>
            </i>
            </div>
        </Link>
        )}
      </div>
      <div className="center-content">
        <Button type="btn-black" url="/news" text="All Recent Projects" />
      </div>
    </div>
  </section>

  )
}

export default ProjectAndCase