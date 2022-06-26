import React from 'react'

import logo from "../../assets/images/logo.png";

//styles
import "./Navbar.css"

export const Navbar = ({setIsVisible}) => {
  return (
    <nav>
        <img className='logo' src={logo}/>
        <ul>
            {/* <li>Home</li>
            <li>About</li> */}
            <li onClick={() => setIsVisible(true)} >Contact</li>
        </ul>
    </nav>
  )
}
