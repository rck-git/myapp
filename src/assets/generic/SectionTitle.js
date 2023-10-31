import React from 'react'
import './sectiontitle.css'




function SectionTitle({title, h3text}) {
  return (
    <div className="section-title">
        <p> {title}</p>
        <h3>{h3text}</h3>
      </div>
  )
}

export default SectionTitle