import React from 'react'

function Iframe() {
  return (
    <iframe
    //  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.7793875974978!2d18.05943021309818!3d59.336636974511975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d6799554e87%3A0x6562d2c842903003!2sSveav%C3%A4gen%2031%2C%20111%2034%20Stockholm%2C%20Sverige!5e0!3m2!1ssv!2srs!4v1696173955992!5m2!1ssv!2srs"
     style={{
        width:"100%",
        height:"600px",
        style:"border:0",
        allowfullscreen:"",
        loading:"lazy",
        referrerpolicy:"no-referrer",
        }}>
    </iframe>
  )
}

export default Iframe