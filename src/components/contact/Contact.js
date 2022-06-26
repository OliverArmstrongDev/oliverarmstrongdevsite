import React from 'react'
import ContactForm from '../contactModal/ContactForm';

//styles
import "./Contact.css";

const Contact = () => {
  return (
    <div className='contact-section'>
        <div className='contact-content'>
        <h1 className='green'>Contact Me</h1>
        <h2>I'm interested in freelance development opportunities of any kind. <br></br>However, if you have any requests or questions, please don’t hesitate to use the form to contact me.</h2>
        <ContactForm />
        </div>
    </div>
  )
}

export default Contact