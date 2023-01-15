import React from 'react'
import './Contact.css'
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
  return (
    <div className='contact_container'>
        <div className='contact_cover'>
            <img className='contact_image' src="/images/contact/cover.jpg" alt="Cover" />
            <div className='contact_cover_text'>
                <h1>Contact Us</h1>
                {/* <p>ENJOY MARSHALL SOUND AT HOME AND ON THE ROAD</p> */}
            </div>
        </div>
        <div className='contact_content'>
            <div className='contact_content_header'>
                {/* <h1>Contact Us</h1> */}
                {/* <p>All speakers</p> */}
            </div>
            <div className='contact_content_products'>
                <ContactForm />
            </div>
        </div>
    </div>
  )
}

export default Contact