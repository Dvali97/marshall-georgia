import React from 'react'
import './Speakers.css';
import ProductsSpeaker from './Products/ProductsSpeaker';

const Speakers = () => {
  return (
    <div className='speakers_container'>
        <div className='speakers_cover'>
            <img className='speakers_image' src="/images/speakers/cover.jpg" alt="Cover" />
            <div className='speakers_cover_text'>
                <h1>ALL SPEAKERS</h1>
                <p>ENJOY MARSHALL SOUND AT HOME AND ON THE ROAD</p>
            </div>
        </div>
        <div className='speakers_content'>
            <div className='speakers_content_header'>
                <h1>OUR FAVORITES</h1>
                <p>All speakers</p>
            </div>
            <div className='speakers_content_products'>
                <ProductsSpeaker />
            </div>
        </div>
    </div>
  )
}

export default Speakers