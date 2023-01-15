import React from 'react'
import './Products.css'

const Products = () => {
    return (
        <div className='products_container'>
            <div className='block'>
                <div className='first'>
                    <img src="/images/headphones/first.jpg" alt="First" />
                    <h1>MONITOR II A.N.C.</h1>
                </div>
                <div className='second'>
                    <img src="/images/headphones/second.jpg" alt="Second" />
                    <h1>MOTIF A.N.C</h1>
                </div>
            </div>
            <div className='block'>
                <div className='first'>
                    <img src="/images/headphones/third.jpg" alt="Third" />
                    <h1>MINOR III</h1>
                </div>
                <div className='second'>
                    <img src="/images/headphones/fourth.jpg" alt="Fourth" />
                    <h1>MAJOR IV</h1>
                </div>
            </div>
            <div className='block'>
                <div className='first'>
                    <img src="/images/headphones/fifth.jpg" alt="Fifth" />
                    <h1>MONITOR II A.N.C.</h1>
                </div>
                <div className='second'>
                    <img src="/images/headphones/sixth.jpg" alt="Sixth" />
                    <h1>MOTIF A.N.C.</h1>
                </div>
            </div>
        </div>
    )
}

export default Products