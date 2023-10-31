import React from 'react'
import './features-about.css'
import Button from '../../../assets/generic/Button'

import {Link} from 'react-router-dom'
import samantha from '../../../assets/images/samantha.png'

function FeaturesAbout() {
    const adviceArray =     [
        { 
            id:0,
            icon:"fa-light fa-handshake fa-xl",
            h4:"Business Advice",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            
        },
        {   id:1,
            icon:"fa-sharp fa-light fa-lightbulb-exclamation-on fa-xl",
            h4:"Startup Business",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            
        },
        {   id:2,
            icon:"fa-regular fa-chart-mixed-up-circle-dollar fa-xl",
            h4:"Financial Advice",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            
        },
        {   id:3,
            icon:"fa-regular fa-box-circle-check fa-xl",
            h4:"Risk Management",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            
        },
    ]
    
  return (
      <section className="features-about-company">
          <div className="features-about">
              <div className="section-title features">
                  <div className="features-accounting">
                      <p>Features</p>
                      <h2>Our Accounting is trusted by thousand of companies</h2>
                      <Button type="btn-yellow" url="/contacts" text = "Learn More" />
                      
                  </div>
                  <div className="features-advice">
                    {adviceArray.map((advice ) =>(
                    <div className="advice" key={advice.id}>
                    <i className={advice.icon}></i>
                    <h4>{advice.h4}</h4>
                    <p>{advice.text}</p>
                    </div>  
                    ))}      
                </div>
              </div>

              <div className="section-title about">
                  <div className="about-samantha">
                      <div className="box">
                          <div className="samantha-intro">
                              <p className="sam">Samantha Brown, <span>Founder</span></p>
                              <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit."</p>
                          </div>
                      </div>
                      <div className="samantha-intro2">
                          <p className="sam">Samantha Brown, <span>Founder</span></p>
                          <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit."</p>
                      </div>

                      <img src={samantha} alt="Samantha walking with laptop" />
                  </div>
                  <div className="about-company">
                      <h4><span>About Company</span>We Are Business Consulting & Credit Repair Experts</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                      <div>
                          <Button type="btn-black" url="/contacts" text = "Learn More" />
                          <Link to="/Contacts" className="btn-transparent" ><i className="fa-solid fa-play"></i>Intro Video</Link>
                      </div>

                  </div>
              </div>
          </div>
      </section>
  )
}

export default FeaturesAbout