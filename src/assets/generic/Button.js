import React from 'react'
import './button.css' 
import { Link } from 'react-router-dom'

const Button = ({type, text, url}) => {

//gör alltså en function expression som man sedan stoppar 
// in i returnen "classname"

let ButtonType = function () {
if (type === "yellow" || type === "btn-yellow")
{
    return "btn-yellow"
}
if (type === "black" || type === "btn-black")
{
    return "btn-black"
}
if (type === "transparent" || type === "btn-transparent")
{
    return "btn-transparent"
}
}

return (     
     
    <Link className={ButtonType()} to={url}>{text} <i className="fa-regular fa-arrow-up-right">
    </i>
    </Link>
)

}
export default Button

