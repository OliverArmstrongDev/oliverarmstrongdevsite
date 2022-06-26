import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com';

//styles
import "../contactModal/ContactModal.css";

const ContactForm = () => {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');
        const [error, setError] = useState('');
        const [emailSent, setEmailSent] = useState(false);
       // const [validDetails, setValidDetails] = useState(false);
        const form = useRef();
        const validDetails = useRef(false);

      
    
        const checkDetails = () => {
            setError("");
            setEmailSent(false);
           
            if (name && email && message) {
                if (!isValidEmail(email)) {
                    setError('The email address is an incorrect format.');
                    validDetails.current = false;
                }
                else{
                    validDetails.current = true;
                }
                
            } else {
                setError('Please fill in all fields.');
                validDetails.current = false;
            }
        }

        const sendEmail = (e) => {
            e.preventDefault();
            checkDetails();
        
            if(validDetails.current)
            { 
                emailjs
              .sendForm(
                "service_3sqka8w",
                "template_qjhuchy",
                form.current,
                "Ei5KgoqZGmMfJZKNb"
              )
              .then(
                (result) => {
                  console.log(result.text);
                    setName('');
                    setEmail('');
                    setMessage('');
                    setEmailSent(true);
                    setError("");
                },
                (error) => {
                  console.log(error.text);
                  setError("FAILED...", error);
                }
              );
            }
          };

        const isValidEmail = email => {
            const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(String(email).toLowerCase());
        };
        

    return (
        <div id="contact-form">
            <form ref={form} onSubmit={sendEmail}>
            <input className='form-inputs' type="text" name='name' placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
            <input className='form-inputs' type="email" name='email' placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
            <textarea className='form-inputs' name='message' placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
            <div className='btn-area'> 
            <button className='btn-main-md' >Send Message</button>
           {emailSent && <span className={error ? "error" : "success"}>Message sent successfully!<br></br>I will be in touch soon.</span>}
           {error && <span className='error'>{error}</span>}
           </div>
           </form>
        </div>
    );
};

export default ContactForm;