import React from 'react'
import './articlenews.css'
import { Link } from 'react-router-dom'
import Button from '../../../assets/generic/Button'
import SectionTitle from '../../../assets/generic/SectionTitle'

import smiling from '../../../assets/images/smiling-woman-news.png'
import news2 from '../../../assets/images/news-2.png'
import news3 from '../../../assets/images/news-3.png'



function ArticleNews() {

    const newsArray =[
        {
            id:1,
            Link:"/news",
            day:"25",
            month:"Mar",
            img:smiling,
            alt:"image of a woman smiling",
            cat: "Business",
            h3:"How To Use Digitalization In The Classroom",
            para2:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."          
        },
        {
            id:2,
            Link:"/news",
            day:"17",
            month:"Mar",
            img :news2,
            alt:"image of a blurry monitor",
            cat: "Business",
            h3:"How To Implement Chat GPT In Your Projects",
            para2:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."          
        },
        {
            id:3,
            Link:"/news",
            day:"13",
            month:"Mar",
            img :news3,
            alt:"image of two books and a phone",
            cat: "Business",
            h3:"The Guide To Support Modern CSS Design",
            para2:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."          
        },
       
    ]
  return (
    <section className="article-news">
  <div className="container">
    <div className="section-title ">
      <div>
        <p>Article & News</p>
        <h3>Get Every Single Articles & News</h3>
      </div>
      <Button type="btn-transparent" url="/news" text="Browse Articles" />
    </div>
    <div className="news-container">
    {newsArray.map((localpar) => 
        <div className="news" key={localpar.id}>
         <div className="news-date" key={localpar.id}>
          <p>{localpar.day}</p>
          <p><span>{localpar.month}</span></p>
        </div>
        <Link to={localpar.Link}><img src={localpar.img} alt={localpar.alt} />
            <p>{localpar.cat}</p>
            <h3>{localpar.h3}</h3>
            <p>{localpar.para2}</p></Link>
      </div>
      )}
    </div>
    <div className="dots">
      <a href="#top">.</a>
      <a className="active" href="#top">.</a>
      <a href="#top">.</a>
      <a href="#top">.</a>
      <a href="#top">.</a>
    </div>
  </div>
</section>
  )
}

export default ArticleNews