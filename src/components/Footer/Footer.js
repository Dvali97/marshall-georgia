import React from 'react'
import './Footer.css'
import { TfiFacebook } from 'react-icons/tfi'
import { GrInstagram } from 'react-icons/gr'

const Footer = () => {
    return (
        <div className='footer_container'>
            <div className='social'>
                <div className='facebook'>
                    <a target='_blank' href="https://www.facebook.com/marshallGeorgi">
                        <TfiFacebook />
                    </a>
                </div>
                <div className='instagram'>
                    <a target='_blank' href="https://www.instagram.com/__marshall_georgia__/">
                        <GrInstagram />
                    </a>
                </div>
            </div>
            <div className='logo'>
                <a href="/">
                    <img src="https://www.marshallheadphones.com/on/demandware.static/Sites-Marshall-NT-Site/-/default/dwc8ef0074/images/marshall-logo-white.svg" alt="Logo" />
                </a>
            </div>
            <div className='copyright'>
                ©2023 ALL RIGHTS RESERVED.
                <div>
                    Design by 551910050
                </div>
            </div>
        </div>
    )
}

export default Footer