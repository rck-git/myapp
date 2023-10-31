import React from 'react'
import './logos.css'
import paperz from '../../../assets/images/paperz.svg'
import dorfus from '../../../assets/images/dorfus.svg'
import martino from '../../../assets/images/martino.svg'
import gobona from  '../../../assets/images/gobona.svg'
import square from  '../../../assets/images/square.svg'

function Logos() {
      const customerBrands = [
        { 
          id:1,
          brand: paperz,
          name:"paperz"
        },
        {
          id:2,
          brand: dorfus,
          name:"dorfus"
        },
        { 
          id:3,
          brand: martino,
          name:"martino"
        },
        { 
          id:4,
          brand: gobona,
          name:"gobona"
        },
        { 
          id:5,
          brand: square,
          name:"square"
        },
      ]
       
    return (
      
      <section className="logos">
        <div className="brands">
          
            {customerBrands.map((localpar) => 
              (<div className="brand" key={localpar.id}>
              <a href="#top"> 
                <img src={localpar.brand} alt={"logo for" + localpar.name} />
              </a>
              </div>
              ))
            } 
        </div>
      </section>
    )
  }

export default Logos