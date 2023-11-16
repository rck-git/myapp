import React from 'react'
import './main.css'
import Contact from "./Contact";
import LeaveMessage from "./LeaveMessage";
import LetsConnect from "./LetsConnect";
import backgroundwavylines from '../../assets/images/background-lines.svg'
import Iframe from './Iframe';


function Main() {
  return (
    <>
  
   <LetsConnect/>
   <div className='container'> 
   <Contact />
   <LeaveMessage/>
   </div>
   <Iframe/>
   
   </>
  )
}

export default Main