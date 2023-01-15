import React from 'react'
import './SecondBlock.css'

const SecondBlock = () => {
    return (
        <div className='second_block_container'>
            <div className='block_container'>
                <div className='block first'>
                    <img className='image' src="/images/block_1.jpg" alt="First" />
                </div>
                <div className='block second'>
                    <img className='image' src="/images/block_2.jpg" alt="Second" />
                    <div className='banner_text'>
                        <h1>MIGHTY SOUND, EVERYWHERE</h1>
                        <p>15+ HOURS OF PORTABLE PLAYTIME</p>
                        <button type="button">FIND OUT MORE</button>
                    </div>
                </div>
            </div>
            <div className='block_container'>
                <div className='block third'>
                    <img className='image' src="/images/block_3.jpg" alt="Third" />
                    <div className='banner_text'>
                        <h1>MIGHTY SOUND, EVERYWHERE</h1>
                        <p>15+ HOURS OF PORTABLE PLAYTIME</p>
                        <button type="button">FIND OUT MORE</button>
                    </div>
                </div>
                <div className='block fourth'>
                    <img className='image' src="/images/block_4.jpg" alt="Fourth" />
                </div>
            </div>
            <div className='block_container'>
                <div className='block fifth'>
                    <img className='image' src="/images/block_5.jpg" alt="Fifth" />
                </div>
                <div className='block sixth'>
                    <img className='image' src="/images/block_6.jpg" alt="sixth" />
                    <div className='banner_text'>
                        <h1>MIGHTY SOUND, EVERYWHERE</h1>
                        <p>15+ HOURS OF PORTABLE PLAYTIME</p>
                        <button type="button">FIND OUT MORE</button>
                    </div>
                </div>
            </div>
            <div className='block_container'>
                <div className='block seventh'>
                    <img className='image' src="/images/block_7.jpg" alt="seventh" />
                    <div className='banner_text'>
                        <h1>MIGHTY SOUND, EVERYWHERE</h1>
                        <p>15+ HOURS OF PORTABLE PLAYTIME</p>
                        <button type="button">FIND OUT MORE</button>
                    </div>
                </div>
                <div className='block eighth'>
                    <img className='image' src="/images/block_8.jpg" alt="Eighth" />
                </div>
            </div>

        </div>
    )
}

export default SecondBlock