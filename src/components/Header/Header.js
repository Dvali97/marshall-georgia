import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }


    // ჩამოსქროლვისას მენიუს ბექგრაუნდი მუქდება
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <div className={navbar ? 'navbar active' : 'navbar'}>
            <div className='navbar_container'>
                <div className='logo'>
                    <Link to='/'>
                        <img src="https://www.marshallheadphones.com/on/demandware.static/Sites-Marshall-NT-Site/-/default/dwc8ef0074/images/marshall-logo-white.svg" alt="Logo" />
                    </Link>
                </div>



                <ul ref={navRef}>
                    <li className='nav_item'>
                        <Link to='/headphones' className='nav_links' >
                            HEADPHONES
                        </Link>
                    </li>
                    <li className='nav_item'>
                        <Link to='/speakers' className='nav_links'>
                            SPEAKERS
                        </Link>
                    </li>
                    <li className='nav_item'>
                        <Link to='/accessories' className='nav_links'>
                            ACCESSORIES
                        </Link>
                    </li>
                    <li className='nav_item'>
                        <Link to='/contact' className='nav_links'>
                            CONTACT
                        </Link>
                    </li>
                    <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </ul>
                <button className='nav-btn' onClick={showNavbar}>
                    <FaBars />
                </button>

            </div>
        </div>
    )
}

export default Header