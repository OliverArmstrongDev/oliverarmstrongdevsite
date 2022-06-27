import React from 'react'
import github from "../../assets/images/GitHub-Mark-Light-120px-plus.png"
import linkedin from "../../assets/images/LI-In-Bug.png"

//styles
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer-section'>
    <div className='footer-content'>
    <div className='icons-area'>
        <div className='icon github'>
        <a rel="noreferrer"  target={"_blank"} href='https://github.com/OliverArmstrongDev'><img className='logo-img' alt='gallery item' src={github}/></a>
        </div>
        <div className='icon linkedin'>
        <a rel="noreferrer"  target={"_blank"} href='https://www.linkedin.com/in/oliver~armstrong'><img className='logo-img' alt='gallery item' src={linkedin}/></a>
        </div>
    </div>
        Copywright Oliver Armstrong © 2022.
    </div>
    </div>
  )
}

export default Footer