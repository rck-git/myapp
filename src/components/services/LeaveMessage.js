import React from 'react'
import Button from '../../assets/generic/Button'
import { useState } from 'react'

function LeaveMessage() {
  const [name, setName] =  useState ("")
  const [error, setError] = useState("")

  const [email, setEmail] = useState("")
  const [errorEmail, setErrorEmail] = useState("")

  const [message, setMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
 


function formValidation(e){
  e.preventDefault(e); 

  if (name === "" )  {
    setError("Name field cannot be empty!")
  }
  else {
    setError("")
  }
  console.log(name + "was written in name form")

  if (!email.includes('@') || !email.includes('.') || email === "")  {
    
    setErrorEmail("Email field must contain '@' and '.' ")
  }
  else {
    setErrorEmail("")
  }
  console.log(email + "was written in email form")
  if (message === "")  {
    
    setErrorMessage("Message field cannot be empty!")
  }
  else {
    setErrorMessage("")
  }
  console.log(message + "was written in message form")

  if (!name == "" && email.includes('@') && email.includes('.') &&  !message === "") {
  
  }
}


  return (
    <div className="leave-message">
      <div className="section-title">
        <h1>Leave us a message for any information</h1>
      </div>
      <div className="user-contact-form">
        <form noValidate>
          <div className="user-contact">
            <label htmlFor="user-name"></label>
            <input type="text" name="user-name" id="user-name" className="user-contact" placeholder="Your Name*" value={name} onChange={(e) => setName(e.target.value)} />
            <span style={{color:"red"}}>{error}</span>
          </div>
          <div className="user-contact">
            <label htmlFor="user-email"></label>
            <input type="email" name="user-email" id="user-email" className="user-contact" placeholder="Your Email*" value={email} onChange={(e) => setEmail(e.target.value)} />
            <span style={{color:"red"}}>{errorEmail}</span>
          </div>
          <div className="user-contact">
            <label htmlFor="user-message"></label>
            <input type="text" name="user-message" id="user-message" className="user-contact" placeholder="Your Message*" value={message} onChange={(e) => setMessage(e.target.value)}  />
            <span style={{color:"red"}}>{errorMessage}</span>
          </div>
          <div className="user-contact-form-submit">
              <button onClick={formValidation} className="btn-yellow" type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LeaveMessage