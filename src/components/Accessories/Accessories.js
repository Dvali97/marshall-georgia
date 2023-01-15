import React from 'react'
import './Accessories.css'
import ProductAccessories from './ProductAccessories/ProductAccessories';

const Accessories = () => {
  return (
    <div class="accessories_container">
      <div className='accessories_cover'>
            <img className='accessories_image' src="/images/accessories/cover.jpg" alt="Cover" />
            <div className='accessories_cover_text'>
                <h1>60 YEARS OF LOUD</h1>
                {/* <p>ENJOY MARSHALL SOUND AT HOME AND ON THE ROAD</p> */}
            </div>
        </div>
        <div className='accessories_content'>
            <div className='accessories_content_header'>
                <h1>OUR FAVORITES</h1>
                <p>All accessories</p>
            </div>
            <div className='accessories_content_products'>
                <ProductAccessories />
            </div>
        </div>
    </div>
  )
}

export default Accessories