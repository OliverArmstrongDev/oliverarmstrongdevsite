import React from 'react'
import ContactForm from './ContactForm'

//styles
import "./ContactModal.css"

const ContactModal = ({setIsVisible}) => {
  return (
    <>
    <div className='modal'>
        <div className='modal-content'> 
            <button id='close' className='btn-ghost-sm' onClick={() => setIsVisible(false)}>Close</button>
            <div className='modal-inner-content'> 
            <ContactForm />
            </div>
        
        </div>
    </div>
    </>
  )
}

export default ContactModal