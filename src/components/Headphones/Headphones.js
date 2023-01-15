import React from 'react'
import './Headphones.css';
import Products from './Products/Products';

const Headphones = () => {
  return (
    <div className='headphones_container'>
        <div className='headphones_cover'>
            <img className='headphones_image' src="/images/headphones_cover.jpg" alt="Cover" />
            <div className='headphones_cover_text'>
                <h1>ALL HEADPHONES</h1>
                <p>LEND US YOUR EARS AND WE’LL PLAY YOU A SONG</p>
            </div>
        </div>
        <div className='headphones_content'>
            <div className='headphones_content_header'>
                <h1>OUR FAVORITES</h1>
                <p>All headphones</p>
            </div>
            <div className='headphones_content_products'>
                <Products />
            </div>
        </div>
    </div>
  )
}

export default Headphones