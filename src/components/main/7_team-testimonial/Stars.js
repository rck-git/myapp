import React from 'react'
import './stars.css'

function Stars() {
    let starsArray = [
    {
      icon :"fa-solid fa-star",
      id:1
    },
    {
      icon :"fa-solid fa-star",
      id:2
    },
    {
      icon :"fa-solid fa-star",
      id:3
    },
    {
      icon :"fa-solid fa-star",
      id:4
    },
    {
      icon :"fa-solid fa-star",
      id:5
    },
  ]
  return (
    <>  
    {starsArray.map((localpar) => {
        return (
        <li  key={localpar.id}>
        <i className={localpar.icon} style={{color: `#FA714A`}}></i>
        </ li>
        )
        
    })}
    </>
  )
}

export default Stars