import React from 'react'
import './showcase.css'
import { Link } from 'react-router-dom'

import Button from '../../../assets/generic/Button'
import backgroundline from '../../../assets/images/background-lines.svg'
import showcase from '../../../assets/images/showcase-man-with-tablet.svg'

const Showcase = () => {
  return (
    <section className="showcase">
        <img className= "backgroundline" src={backgroundline} alt="background lines" />
            <div className="container">
                <div className="content">
                    <h1>We Provide The Best Business Solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    <Button type="btn-yellow" url="/contacts" text = "Get Consulting" />
                    <Button type="btn-transparent" url="/contacts" text = "Learn More" />
                    </div>
                <img src={showcase} alt="image of a man in a suit with a tablet" />
            </div>
    </section>
  )
}

export default Showcase