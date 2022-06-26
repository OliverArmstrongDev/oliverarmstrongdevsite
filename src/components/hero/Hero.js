import React from 'react'

//styles
import "./Hero.css"

const Hero = ({setIsVisible}) => {
  return (
    <div className="hero">
    <h1>I'm a software developer with extensive technical experience.</h1>
    <h2>From a Systems Administrator to a Software Developer.<br/></h2>
    <div className='button-container'>
    <button className='btn-ghost'>Learn More</button>
    <button className='btn-main' onClick={() => setIsVisible(true)}>Contact Me</button>
    </div>
</div>
  )
}

export default Hero