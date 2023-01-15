import React from 'react'
import './ContactForm.css'
import { TfiFacebook } from 'react-icons/tfi';
import { GrInstagram } from 'react-icons/gr';
import { FaMobileAlt } from 'react-icons/fa';

const ContactForm = () => {
    return (<>
        <div className='contact_container'>
            <div className='contact_form'>
                <div className='contact_logo contact_block'>
                    <img src="/images/contact/logo.png" alt="logo" />
                </div>
                <div className='contact_info contact_block'>
                    <div className='contact_header'>
                        <h1>CONTACT</h1>
                    </div>
                    <div className='contact_info_socials'>
                        <div className='contact_mobile'>
                            <div className='mobile_icon'>
                                <FaMobileAlt />
                            </div>
                            <div className='mobile_number'>
                                <h1>(+995) 551-91-00-50</h1>
                            </div>
                        </div>
                        <div className='contact_facebook'>
                            <a className='facebook_icon' target='_blank' href="https://www.facebook.com/marshallGeorgi">
                                <TfiFacebook />
                            </a>
                            <div className='facebook_text'>
                                <h1>Click on FB icon</h1>
                            </div>
                        </div>
                        <div className='contact_instagram'>
                            <a className='instagram_icon' target='_blank' href="https://www.instagram.com/__marshall_georgia__/">
                                <GrInstagram />
                            </a>
                            <div className='instagram_text'>
                                <h1>Click on IG icon</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default ContactForm